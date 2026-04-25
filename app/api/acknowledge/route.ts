import { neon } from "@neondatabase/serverless";

export async function POST(req: Request) {
  const { resultId } = await req.json();
  const sql = neon(process.env.DATABASE_URL!);

  await sql`UPDATE results SET status = 'acknowledged' WHERE id = ${resultId}`;
  await sql`
    UPDATE notification_log SET acknowledged_at = now()
    WHERE result_id = ${resultId}
  `;

  return Response.json({ acknowledged: true });
}
