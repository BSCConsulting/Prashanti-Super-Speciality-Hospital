import type { AppointmentPayload } from "@/types";

/** Shared appointment field checks used by the API route. */
export function validateAppointment(body: unknown): body is AppointmentPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.patient_name === "string" &&
    b.patient_name.trim().length > 1 &&
    typeof b.phone === "string" &&
    b.phone.replace(/\D/g, "").length >= 10 &&
    typeof b.department === "string" &&
    b.department.trim().length > 0 &&
    typeof b.preferred_date === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(b.preferred_date)
  );
}
