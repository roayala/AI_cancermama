import { neon } from "@neondatabase/serverless";

function db() {
  return neon(process.env.DATABASE_URL!);
}

export async function sendInitialSMS(phone: string, name: string, resultId: string) {
  "use step";

  const sql = db();
  const message = `Hola ${name}, tus resultados médicos están listos. Por favor agenda tu cita con tu médico a la brevedad. — AnaLuz`;

  // Mock SMS — replace with Twilio in production
  console.log(`[SMS → ${phone}]: ${message}`);

  await sql`
    UPDATE results SET status = 'notified' WHERE id = ${resultId}
  `;
  await sql`
    UPDATE notification_log SET sms_sent_at = now()
    WHERE result_id = ${resultId}
  `;

  return { sent: true, phone, message };
}

export async function sendFollowUpSMS(phone: string, name: string, resultId: string) {
  "use step";

  const sql = db();
  const message = `Hola ${name}, te recordamos que tus resultados médicos siguen esperándote. Es importante que contactes a tu médico pronto. Estamos aquí para ti. — AnaLuz`;

  console.log(`[FOLLOW-UP SMS → ${phone}]: ${message}`);

  await sql`
    UPDATE results SET status = 'follow_up_sent' WHERE id = ${resultId}
  `;
  await sql`
    UPDATE notification_log SET follow_up_sent_at = now()
    WHERE result_id = ${resultId}
  `;

  return { sent: true, phone, message };
}

export async function escalateToClinic(resultId: string, patientName: string) {
  "use step";

  const sql = db();

  console.log(`[ESCALATION] Patient ${patientName} has not responded. Notifying clinic staff for result ${resultId}.`);

  await sql`
    UPDATE results SET status = 'escalated' WHERE id = ${resultId}
  `;
  await sql`
    UPDATE notification_log SET escalated_at = now()
    WHERE result_id = ${resultId}
  `;

  return { escalated: true, resultId };
}

export async function checkAcknowledged(resultId: string) {
  "use step";

  const sql = db();
  const rows = await sql`
    SELECT status FROM results WHERE id = ${resultId}
  `;

  return rows[0]?.status === "acknowledged";
}

export async function createNotificationLog(resultId: string, patientId: string) {
  "use step";

  const sql = db();
  await sql`
    INSERT INTO notification_log (result_id, patient_id)
    VALUES (${resultId}, ${patientId})
    ON CONFLICT DO NOTHING
  `;
}
