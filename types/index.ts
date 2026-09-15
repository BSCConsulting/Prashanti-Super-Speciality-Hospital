export type Doctor = {
  id: string;
  name: string;
  qualifications: string;
  specialty: string;
  departmentId: string;
  /** Short pride line shown on portrait chapter */
  focus: string;
  /** Optional path under /public — falls back to stylized monogram */
  photo?: string;
};

export type Department = {
  id: string;
  name: string;
  description: string;
  doctorIds: string[];
  icon: "heart-pulse" | "kidney" | "brain" | "bone" | "scalpel";
  chapter: string;
  pathway: [string, string, string];
  highlights: [string, string, string];
  panelImage?: string;
};

export type AppointmentPayload = {
  patient_name: string;
  phone: string;
  department: string;
  preferred_date: string;
  doctor?: string;
};

export type AppointmentStatus = "Pending" | "Confirmed" | "Cancelled";

export type PatientInquiry = {
  id: string;
  created_at: string;
  patient_name: string;
  phone: string;
  department: string;
  preferred_date: string;
  status: AppointmentStatus;
};

export type ChatView =
  | "menu"
  | "appointment"
  | "faqs"
  | "faq-category"
  | "emergency";
