# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

**AnaLuz** is a breast cancer results notification agent built with Next.js and deployed on Vercel. The agent monitors a database for new lab results, sends SMS alerts to patients, handles follow-up if patients don't respond, and provides an informational chatbot for post-consultation support.

## Architecture (planned)

- **Next.js** — frontend + API routes
- **Vercel AI SDK** — agent orchestration and chatbot
- **Vercel Cron Jobs** — periodic polling for new results in the DB
- **Twilio** — SMS delivery
- **Database** — stores patients, doctors, and results

## Agent Flow

1. Cron job detects new result in DB → triggers notification agent
2. Agent sends SMS to patient: results are ready, schedule appointment
3. If no response in 24–48h → agent sends follow-up SMS
4. If still no response → agent notifies clinic staff
5. After consultation, doctor refers patient to the chatbot
6. Chatbot answers questions about next steps and treatment (never delivers the actual result)

## Chatbot Constraints

The chatbot must never:
- Deliver or interpret the actual medical result
- Diagnose or suggest a diagnosis
- Generate fear or unnecessary urgency

The chatbot tone is always calm, empathetic, and supportive.
