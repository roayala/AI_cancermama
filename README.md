# AnaLuz

> An AI agent that walks alongside breast cancer patients from the moment their results are ready — so that no result goes unnoticed and no patient is left waiting.
> -3

---

## The Problem

When a breast cancer lab result is uploaded to the clinic's system, patients are often not notified promptly. Days can pass before a patient learns their results are available. In oncology, this delay is not a minor inconvenience — it can allow the disease to progress to a less treatable stage.

The current process depends on manual follow-up by clinic staff, which is inconsistent and prone to gaps.

---

## The Solution

**AnaLuz** is an autonomous agent that:

1. **Monitors** the lab results database for new results
2. **Notifies** patients via SMS the moment a result is uploaded — with a calm, human tone
3. **Follows up** automatically if the patient doesn't respond within 24–48 hours
4. **Escalates** to clinic staff if the patient remains unreachable
5. **Supports** patients post-consultation with an informational chatbot

AnaLuz never delivers or interprets the actual medical result. That responsibility stays with the doctor. AnaLuz's role is to make sure the patient shows up.

---

## Agent Flow

```
Lab uploads result to database
           ↓
AnaLuz detects new result
           ↓
SMS sent to patient:
"Your results are ready. Please schedule
 your appointment with your doctor."
           ↓
Did the patient respond or schedule?
  ├─ YES → loop closes ✓
  └─ NO (24h) → follow-up SMS sent
               └─ NO (48h) → clinic staff notified
```

---

## The Chatbot

After the doctor delivers the results in person, they can refer the patient to AnaLuz for ongoing support.

**AnaLuz can:**
- Explain what next steps in treatment typically look like
- Answer common questions about breast cancer care
- Provide resources and guidance in a calm, empathetic tone
- Help patients feel informed and less alone

**AnaLuz never:**
- Delivers or interprets the patient's actual result
- Diagnoses or suggests a diagnosis
- Generates fear or unnecessary urgency

---

## Tone Principles

Every message — SMS or chat — follows these principles:

- **Calm**: no alarmist language
- **Clear**: simple words, no medical jargon
- **Human**: warm, not robotic
- **Respectful**: the patient is going through something hard

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (deployed on Vercel) |
| Agent orchestration | Vercel AI SDK |
| Scheduled monitoring | Vercel Cron Jobs |
| SMS delivery | Twilio |
| Database | TBD |
| Language model | Claude (Anthropic) |

---

## Why This Matters

Early detection is the single most important factor in breast cancer survival rates. A system that ensures every patient is notified — every time, on time — is not a convenience. It's a clinical safety net.

AnaLuz doesn't replace doctors. It makes sure patients reach them.
