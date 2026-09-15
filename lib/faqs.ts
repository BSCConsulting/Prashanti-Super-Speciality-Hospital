export type FaqCategoryId =
  | "emergency"
  | "appointments"
  | "visit"
  | "insurance"
  | "specialties"
  | "trust";

export type FaqItem = {
  id: string;
  category: FaqCategoryId;
  q: string;
  a: string;
};

export const FAQ_CATEGORIES: {
  id: FaqCategoryId;
  label: string;
  short: string;
}[] = [
  { id: "emergency", label: "Emergency & hours", short: "Emergency" },
  { id: "appointments", label: "Appointments & OPD", short: "Appointments" },
  { id: "visit", label: "Location & visit", short: "Visit" },
  { id: "insurance", label: "Insurance & billing", short: "Insurance" },
  { id: "specialties", label: "Specialties & doctors", short: "Specialties" },
  { id: "trust", label: "Trust & general", short: "About us" },
];

export const faqs: FaqItem[] = [
  {
    id: "er-24-7",
    category: "emergency",
    q: "Is the ER open 24/7?",
    a: "Yes. Prashanti Super Speciality Hospital is open 24 hours. For emergencies call 08742-222424 or +91 90003 97547.",
  },
  {
    id: "er-landline",
    category: "emergency",
    q: "What is the emergency landline?",
    a: "08742-222424 — available round the clock.",
  },
  {
    id: "er-mobile",
    category: "emergency",
    q: "What is the emergency mobile / WhatsApp?",
    a: "+91 90003 97547. You can also WhatsApp this number for urgent help.",
  },
  {
    id: "er-when",
    category: "emergency",
    q: "When should I come straight to the ER?",
    a: "Chest pain, stroke signs, major trauma, severe breathlessness, uncontrolled bleeding, or sudden collapse — call and come immediately.",
  },
  {
    id: "er-ambulance",
    category: "emergency",
    q: "Do you have ambulance support?",
    a: "Call the helpline; our desk will guide ambulance and transfer options for your situation.",
  },
  {
    id: "appt-how",
    category: "appointments",
    q: "How do I book an appointment?",
    a: "Call or WhatsApp is fastest. You can also request a callback on the website or through Prashanti Desk.",
  },
  {
    id: "appt-online",
    category: "appointments",
    q: "Can I book online only?",
    a: "The online form is optional. Most families call or WhatsApp the desk directly.",
  },
  {
    id: "appt-doctor",
    category: "appointments",
    q: "How do I see a specific doctor?",
    a: "Call the helpline and name the consultant — for example Dr. V. Bhaskar for neurosurgery.",
  },
  {
    id: "appt-opd",
    category: "appointments",
    q: "What are OPD timings?",
    a: "The hospital is open 24 hours for emergency care. For consultant OPD slots, call or WhatsApp the desk.",
  },
  {
    id: "appt-referral",
    category: "appointments",
    q: "Do I need a referral letter?",
    a: "Not always. Bring prior reports if you have them; the desk will advise based on your case.",
  },
  {
    id: "visit-where",
    category: "visit",
    q: "Where is the hospital?",
    a: "Door No 2-10-1055, Bhavani Mess Road, Wyra Road, Nehru Nagar, Khammam, Telangana 507001.",
  },
  {
    id: "visit-directions",
    category: "visit",
    q: "How do I get directions?",
    a: "Use Get directions on the website (Google Maps) or call the desk for landmarks near Bhavani Mess Road.",
  },
  {
    id: "visit-parking",
    category: "visit",
    q: "Is parking available?",
    a: "Call the desk for current parking guidance near the Nehru Nagar / Bhavani Mess Road entrance.",
  },
  {
    id: "visit-bring",
    category: "visit",
    q: "What should I bring for admission?",
    a: "ID proof, insurance card (if using cashless), prior reports and prescriptions, and attendant details.",
  },
  {
    id: "ins-cashless",
    category: "insurance",
    q: "Do you accept cashless insurance?",
    a: "Yes — via FHPL and Health India. Please confirm eligibility with the desk before admission.",
  },
  {
    id: "ins-tpa",
    category: "insurance",
    q: "Which TPAs do you support?",
    a: "FHPL and Health India. Ask the desk about your specific policy.",
  },
  {
    id: "ins-auto",
    category: "insurance",
    q: "Is everything cashless automatically?",
    a: "No. Pre-authorisation may be required. Carry your policy card and photo ID.",
  },
  {
    id: "ins-estimate",
    category: "insurance",
    q: "Can I get an estimate before surgery?",
    a: "Yes. Call the desk with the consultant’s advice and reports for a guidance estimate.",
  },
  {
    id: "spec-renal",
    category: "specialties",
    q: "Do you have kidney / renal care?",
    a: "Yes — Institute of Renal Sciences covering urology and nephrology.",
  },
  {
    id: "spec-renal-docs",
    category: "specialties",
    q: "Who are the renal consultants?",
    a: "Dr. V. Jeevan Kumar (M.S., M.Ch. Urology) and Dr. Krishna Prasad (MD, DM Nephrology).",
  },
  {
    id: "spec-neuro",
    category: "specialties",
    q: "Do you treat brain and spine problems?",
    a: "Yes — Neurosurgery & Spine Care with Dr. V. Bhaskar (M.S., M.Ch. Neuro Surgery).",
  },
  {
    id: "spec-ortho",
    category: "specialties",
    q: "Do you handle fractures and trauma?",
    a: "Yes — Orthopedics & Trauma with Dr. Raj Kumar Chinthapalli (MBBS, M.S. Ortho).",
  },
  {
    id: "spec-icu",
    category: "specialties",
    q: "Is there critical care / ICU support?",
    a: "Yes — General Medicine & Critical Care led by Dr. Bharat Babu Kesoju (MBBS, M.D.), Hospital Director.",
  },
  {
    id: "spec-lap",
    category: "specialties",
    q: "Do you do laparoscopic surgery?",
    a: "Yes — General & Laparoscopic Surgery with Dr. Hemanth Patibandla (MBBS, M.S.).",
  },
  {
    id: "trust-nabh",
    category: "trust",
    q: "Are you NABH / ISO certified?",
    a: "Yes. Prashanti Super Speciality Hospital holds NABH and ISO quality recognition.",
  },
  {
    id: "trust-google",
    category: "trust",
    q: "What is your Google rating?",
    a: "About 4.1★ from 368+ Google reviews. Check Google Maps for the latest rating.",
  },
  {
    id: "trust-areas",
    category: "trust",
    q: "Which areas do patients come from?",
    a: "Khammam and nearby regions including Bhadradri Kothagudem, Warangal, Nalgonda, and Krishna districts.",
  },
  {
    id: "trust-ig",
    category: "trust",
    q: "How can I follow updates and photos?",
    a: "Instagram @prashanthi_hospital_khammam and Facebook (Prasanthi hospital khammam) — campus moments, camps, and updates.",
  },
];

export function faqsByCategory(category: FaqCategoryId): FaqItem[] {
  return faqs.filter((f) => f.category === category);
}
