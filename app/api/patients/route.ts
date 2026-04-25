import { neon } from "@neondatabase/serverless";

export async function GET() {
  const sql = neon(process.env.DATABASE_URL!);
  const patients = await sql`SELECT id, name, phone FROM patients ORDER BY created_at`;
  return Response.json(patients);
}
