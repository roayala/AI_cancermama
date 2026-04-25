import { neon } from "@neondatabase/serverless";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);

async function migrate() {
  console.log("Running migrations...");

  await sql`
    CREATE TABLE IF NOT EXISTS patients (
      id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name        TEXT NOT NULL,
      phone       TEXT NOT NULL,
      created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS results (
      id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      patient_id  UUID NOT NULL REFERENCES patients(id),
      doctor_name TEXT NOT NULL,
      uploaded_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      status      TEXT NOT NULL DEFAULT 'pending'
      -- status: pending | notified | follow_up_sent | escalated | acknowledged
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS notification_log (
      id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      result_id        UUID NOT NULL REFERENCES results(id),
      patient_id       UUID NOT NULL REFERENCES patients(id),
      sms_sent_at      TIMESTAMPTZ,
      follow_up_sent_at TIMESTAMPTZ,
      escalated_at     TIMESTAMPTZ,
      acknowledged_at  TIMESTAMPTZ,
      workflow_id      TEXT
    )
  `;

  console.log("✅ Tables created: patients, results, notification_log");

  // Seed demo patient
  await sql`
    INSERT INTO patients (name, phone)
    VALUES ('María González', '+521234567890')
    ON CONFLICT DO NOTHING
  `;

  console.log("✅ Demo patient seeded");
}

migrate().catch(console.error);
