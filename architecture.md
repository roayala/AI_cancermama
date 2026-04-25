# AnaLuz — Architecture

## Overview

AnaLuz is a durable notification agent built on Vercel's Workflow SDK (WDK). It monitors a database for new breast cancer lab results and autonomously walks each patient through a notification lifecycle — surviving deploys, retrying on failures, and pausing for hours or days between steps.

---

## Competition Track

**Vercel Workflow (WDK)** — Durable async agents via `use workflow` + `DurableAgent`.

Chosen because the core of AnaLuz is a long-running, stateful flow that must pause 24–48 hours between steps. This is the native use case for WDK.

---

## System Components

```
┌─────────────────────────────────────────────────────────────┐
│                          VERCEL                             │
│                                                             │
│  ┌─────────────┐     ┌────────────────────────────────┐    │
│  │  Cron Job   │────▶│     Notification Workflow      │    │
│  │ (every 15m) │     │     "use workflow"             │    │
│  └─────────────┘     │                                │    │
│                       │  1. sendInitialSMS             │    │
│                       │  2. waitForResponse (24h)      │    │
│                       │  3. sendFollowUp (if needed)   │    │
│                       │  4. waitForResponse (48h)      │    │
│                       │  5. escalateToClinic           │    │
│                       └──────────────┬─────────────────┘   │
│                                      │                      │
│                          reads/writes state                 │
│                                      │                      │
│  ┌───────────────────────────────────▼──────────────────┐  │
│  │                  Database (Neon / Vercel Postgres)    │  │
│  │                                                       │  │
│  │  patients | results | notification_log               │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │           Chat Interface                            │   │
│  │   Next.js App Router + Vercel AI SDK + Claude       │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
         │                              │
         ▼                              ▼
    Twilio (SMS out)           Twilio Webhook (SMS in)
    sends notification         patient reply → marks acknowledged
```

---

## Workflow Lifecycle

Each result triggers one workflow instance per patient. The workflow owns the full notification state machine:

```
NEW RESULT DETECTED
       │
       ▼
[Step 1] Send initial SMS
       │
       ▼
[Step 2] Pause 24 hours
       │
       ▼
[Step 3] Check DB — did patient acknowledge?
       ├── YES → workflow ends ✓
       └── NO
            ▼
       [Step 4] Send follow-up SMS
            │
            ▼
       [Step 5] Pause 48 hours
            │
            ▼
       [Step 6] Check DB — did patient acknowledge?
            ├── YES → workflow ends ✓
            └── NO → escalate to clinic staff → workflow ends
```

---

## Database Schema

```sql
-- Patients (populated by clinic)
patients (
  id, name, phone, email, created_at
)

-- Results uploaded by labs
results (
  id, patient_id, doctor_id, uploaded_at, status
  -- status: pending | notified | acknowledged | escalated
)

-- Tracks every notification action
notification_log (
  id, result_id, patient_id,
  sms_sent_at, follow_up_sent_at, escalated_at,
  acknowledged_at, workflow_id
)
```

---

## Chatbot

The chat interface is a separate Next.js route powered by Vercel AI SDK and Claude.

- Patients access it via a link sent in the SMS (after doctor consultation)
- Claude operates under a strict system prompt: supportive, informative, never delivers results
- No authentication for the hackathon — patient identified via URL token
- Knowledge scope: breast cancer care, treatment steps, clinic info, emotional support

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router) |
| Agent | Vercel Workflow SDK — `use workflow` + DurableAgent |
| LLM | Claude (Anthropic) via Vercel AI SDK |
| SMS | Twilio |
| Database | Neon (Vercel Postgres) |
| Cron | Vercel Cron Jobs |
| Deployment | Vercel |

---

## Key WDK Properties Used

- **Durability** — workflow survives deploys and server restarts
- **Sleep/pause** — native 24h and 48h waits without polling
- **Retry** — automatic retry on Twilio or DB failures
- **State isolation** — one workflow instance per patient result
