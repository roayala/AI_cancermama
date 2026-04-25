import { sleep } from "workflow";
import {
  sendInitialSMS,
  sendFollowUpSMS,
  escalateToClinic,
  checkAcknowledged,
  createNotificationLog,
} from "./steps";

// Demo uses short times — production would use "24h" and "48h"
const FIRST_WAIT  = "30s";
const SECOND_WAIT = "1m";

export async function notificationWorkflow(
  resultId: string,
  patientId: string,
  patientName: string,
  patientPhone: string
) {
  "use workflow";

  await createNotificationLog(resultId, patientId);
  await sendInitialSMS(patientPhone, patientName, resultId);

  await sleep(FIRST_WAIT);

  const acknowledged = await checkAcknowledged(resultId);
  if (acknowledged) return { status: "acknowledged" };

  await sendFollowUpSMS(patientPhone, patientName, resultId);

  await sleep(SECOND_WAIT);

  const acknowledgedAfterFollowUp = await checkAcknowledged(resultId);
  if (acknowledgedAfterFollowUp) return { status: "acknowledged" };

  await escalateToClinic(resultId, patientName);

  return { status: "escalated" };
}
