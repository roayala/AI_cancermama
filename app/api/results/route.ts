import { neon } from "@neondatabase/serverless";

export async function GET() {
  const sql = neon(process.env.DATABASE_URL!);

  const rows = await sql`
    SELECT
      r.id,
      r.status,
      r.uploaded_at,
      r.doctor_name,
      p.name AS patient_name,
      p.phone AS patient_phone,
      n.sms_sent_at,
      n.follow_up_sent_at,
      n.escalated_at,
      n.acknowledged_at
    FROM results r
    JOIN patients p ON p.id = r.patient_id
    LEFT JOIN notification_log n ON n.result_id = r.id
    ORDER BY r.uploaded_at DESC
  `;

  return Response.json(rows);
}
