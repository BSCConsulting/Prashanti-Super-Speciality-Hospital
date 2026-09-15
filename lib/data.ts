import type { Department, Doctor } from "@/types";

export const HOSPITAL = {
  name: "Prashanthi Super Speciality Hospital",
  shortName: "Prashanthi",
  city: "Khammam",
  emergencyLandline: "08742-222424",
  emergencyLandlineTel: "08742222424",
  emergencyMobile: "+91 90003 97547",
  emergencyMobileTel: "+919000397547",
  whatsappEmergency: "https://wa.me/919000397547?text=EMERGENCY",
  whatsappEnquire:
    "https://wa.me/919000397547?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20an%20appointment",
  doorNo: "2-10-1055",
  addressLine:
    "Door No 2-10-1055, Bhavani Mess Road, Wyra Road, Nehru Nagar, Khammam, Telangana 507001",
  addressShort: "Bhavani Mess Road, Nehru Nagar, Khammam — 507001",
  // User-provided pin; Google listing also shows 507002 nearby — confirm with hospital if needed
  pincode: "507001",
  lat: 17.249083,
  lng: 80.149306,
  mapsUrl: "https://maps.app.goo.gl/22m4VQ6WCS58mrag9",
  mapsUrlExact: "https://www.google.com/maps?q=17.249083,80.149306",
  instagram: "https://www.instagram.com/prashanthi_hospital_khammam/",
  instagramHandle: "@prashanthi_hospital_khammam",
  facebook:
    "https://www.facebook.com/p/Prasanthi-hospital-khammam-100085687020702/",
  facebookLabel: "Prasanthi hospital khammam",
  hoursLabel: "Open 24 hours",
  googleRating: "4.1",
  googleReviewCount: "368",
  // Public news: NABH + ISO announced by hospital director Dr. Bharat Babu Kesoju (Apr 2025)
  accreditations: ["NABH", "ISO"] as const,
  cashlessPartners: ["FHPL", "Health India"] as const,
  serving:
    "Khammam, Bhadradri Kothagudem, Warangal, Nalgonda, Krishna & nearby districts",
} as const;

export const doctors: Doctor[] = [
  {
    id: "dr-bharat-babu",
    name: "Dr. Bharat Babu Kesoju",
    qualifications: "MBBS, M.D.",
    specialty: "General Medicine & Critical Care",
    departmentId: "general-medicine",
    focus: "Critical care and complex medical management for Khammam families.",
    photo: "/doctors/dr-bharat-babu.jpg",
  },
  {
    id: "dr-jeevan-kumar",
    name: "Dr. V. Jeevan Kumar",
    qualifications: "M.S., M.Ch. Urology",
    specialty: "Institute of Renal Sciences",
    departmentId: "renal-sciences",
    focus: "Advanced urological care within our renal sciences institute.",
    photo: "/doctors/dr-jeevan-kumar.jpg",
  },
  {
    id: "dr-krishna-prasad",
    name: "Dr. Krishna Prasad",
    qualifications: "MD, DM Nephrology",
    specialty: "Institute of Renal Sciences",
    departmentId: "renal-sciences",
    focus: "Nephrology and kidney care with institute-level continuity.",
    photo: "/doctors/dr-krishna-prasad.jpg",
  },
  {
    id: "dr-bhaskar",
    name: "Dr. V. Bhaskar",
    qualifications: "M.S., M.Ch. Neuro Surgery",
    specialty: "Neurosurgery & Spine Care",
    departmentId: "neurosurgery",
    focus: "Brain and spine surgery with precision and calm guidance.",
    photo: "/doctors/dr-bhaskar.jpg",
  },
  {
    id: "dr-raj-kumar",
    name: "Dr. Raj Kumar Chinthapalli",
    qualifications: "MBBS, M.S. Ortho",
    specialty: "Orthopedics & Trauma",
    departmentId: "orthopedics",
    focus: "Trauma, fractures, and joint care when every hour matters.",
    photo: "/doctors/dr-raj-kumar.jpg",
  },
  {
    id: "dr-hemanth",
    name: "Dr. Hemanth Patibandla",
    qualifications: "MBBS, M.S.",
    specialty: "General & Laparoscopic Surgery",
    departmentId: "general-surgery",
    focus: "Open and laparoscopic surgery with a patient-first approach.",
    photo: "/doctors/dr-hemanth.jpg",
  },
];

export const departments: Department[] = [
  {
    id: "renal-sciences",
    name: "Institute of Renal Sciences",
    chapter: "01 — Renal",
    description:
      "Urology and nephrology under one roof — continuity from diagnosis to long-term kidney care.",
    doctorIds: ["dr-jeevan-kumar", "dr-krishna-prasad"],
    icon: "kidney",
    pathway: ["Consult", "Diagnose", "Long-term care"],
  },
  {
    id: "neurosurgery",
    name: "Neurosurgery & Spine Care",
    chapter: "02 — Neuro",
    description:
      "Brain and spine surgery for complex neurological conditions, led with clarity and care.",
    doctorIds: ["dr-bhaskar"],
    icon: "brain",
    pathway: ["Assess", "Image", "Operate"],
  },
  {
    id: "orthopedics",
    name: "Orthopedics & Trauma",
    chapter: "03 — Ortho",
    description:
      "Fracture, joint, and trauma pathways built for speed when minutes matter.",
    doctorIds: ["dr-raj-kumar"],
    icon: "bone",
    pathway: ["Stabilize", "Repair", "Mobilize"],
  },
  {
    id: "general-medicine",
    name: "General Medicine & Critical Care",
    chapter: "04 — Critical Care",
    description:
      "Comprehensive medicine and intensive critical care for acute and chronic illness.",
    doctorIds: ["dr-bharat-babu"],
    icon: "heart-pulse",
    pathway: ["Triage", "Monitor", "Recover"],
  },
  {
    id: "general-surgery",
    name: "General & Laparoscopic Surgery",
    chapter: "05 — Surgery",
    description:
      "Open and minimally invasive surgery with careful pre- and post-operative support.",
    doctorIds: ["dr-hemanth"],
    icon: "scalpel",
    pathway: ["Plan", "Operate", "Follow-up"],
  },
];

export const careJourney = [
  { step: "01", title: "Call or WhatsApp", detail: "Reach our 24/7 desk — we guide the next step." },
  { step: "02", title: "Meet the specialist", detail: "Matched to the right consultant and institute." },
  { step: "03", title: "Diagnose with clarity", detail: "Investigations and a plan you can understand." },
  { step: "04", title: "Treat & recover", detail: "Inpatient or day-care pathways with family support." },
] as const;

