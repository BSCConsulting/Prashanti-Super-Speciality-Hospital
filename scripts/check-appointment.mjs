/** Runnable check for appointment validation (no frameworks). */
function validateAppointment(body) {
  if (!body || typeof body !== "object") return false;
  return (
    typeof body.patient_name === "string" &&
    body.patient_name.trim().length > 1 &&
    typeof body.phone === "string" &&
    body.phone.replace(/\D/g, "").length >= 10 &&
    typeof body.department === "string" &&
    body.department.trim().length > 0 &&
    typeof body.preferred_date === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(body.preferred_date)
  );
}

const good = validateAppointment({
  patient_name: "Ramu",
  phone: "9000397547",
  department: "Orthopedics & Trauma",
  preferred_date: "2026-09-20",
});
const bad = validateAppointment({
  patient_name: "A",
  phone: "123",
  department: "",
  preferred_date: "20-09-2026",
});

console.assert(good === true, "valid payload should pass");
console.assert(bad === false, "invalid payload should fail");
console.log("appointment validation check ok");
