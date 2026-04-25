import { start } from "workflow/api";
import { neon } from "@neondatabase/serverless";
import { notificationWorkflow } from "@/workflows/notification";

export async function POST(req: Request) {
  const { patientId } = await req.json();
  const sql = neon(process.env.DATABASE_URL!);

  const patients = await sql`SELECT * FROM patients WHERE id = ${patientId}`;
  if (!patients.length) {
    return Response.json({ error: "Patient not found" }, { status: 404 });
  }

  const patient = patients[0];

  const results = await sql`
    INSERT INTO results (patient_id, doctor_name, status)
    VALUES (${patientId}, 'Dr. Ramírez', 'pending')
    RETURNING id
  `;
  const resultId = results[0].id;

  const run = await start(notificationWorkflow, [
    resultId,
    patientId,
    patient.name,
    patient.phone,
  ]);

  return Response.json({ runId: run.runId, resultId });
}
