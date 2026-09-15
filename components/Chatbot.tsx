"use client";

import { useMemo, useState } from "react";
import {
  ChevronDown,
  MessageCircle,
  Phone,
  X,
  AlertTriangle,
  CalendarPlus,
  HelpCircle,
  MapPin,
} from "lucide-react";
import { departments, HOSPITAL } from "@/lib/data";
import {
  FAQ_CATEGORIES,
  faqsByCategory,
  type FaqCategoryId,
} from "@/lib/faqs";
import type { ChatView } from "@/types";

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<ChatView>("menu");
  const [faqCategory, setFaqCategory] = useState<FaqCategoryId | null>(null);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState(departments[0]?.name ?? "");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [message, setMessage] = useState("");
  const minDate = useMemo(() => todayISO(), []);

  function go(next: ChatView) {
    setView(next);
    setStatus("idle");
    setMessage("");
    if (next !== "faq-category") {
      setFaqCategory(null);
      setOpenFaq(null);
    }
  }

  function openCategory(id: FaqCategoryId) {
    setFaqCategory(id);
    setOpenFaq(null);
    setView("faq-category");
  }

  async function submitAppointment(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patient_name: name.trim(),
          phone: phone.trim(),
          department,
          preferred_date: date,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setStatus("err");
        setMessage(data.message || "Could not submit. Please call the helpline.");
        return;
      }
      setStatus("ok");
      setMessage(data.message);
      setName("");
      setPhone("");
      setDate("");
    } catch {
      setStatus("err");
      setMessage("Network error. Call 08742-222424 for help.");
    }
  }

  const categoryFaqs = faqCategory ? faqsByCategory(faqCategory) : [];
  const categoryMeta = FAQ_CATEGORIES.find((c) => c.id === faqCategory);

  return (
    <div className="fixed right-4 bottom-20 z-[60] flex flex-col items-end gap-3 sm:right-6 md:bottom-6">
      {open && (
        <div
          className="flex h-[min(34rem,72svh)] w-[min(22.5rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-forest/15 bg-white shadow-2xl"
          role="dialog"
          aria-label="Prashanthi Desk"
        >
          <div className="flex items-center justify-between bg-forest-deep px-4 py-3 text-stone">
            <div>
              <p className="text-sm font-semibold">Prashanthi Desk</p>
              <p className="text-xs text-stone/55">Call-first help · No AI</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg p-1 hover:bg-white/10"
              aria-label="Close Prashanthi Desk"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {view === "menu" && (
              <div className="space-y-2">
                <p className="mb-3 text-sm text-forest/70">
                  How can Prashanthi Desk help?
                </p>
                <a
                  href={`tel:${HOSPITAL.emergencyLandlineTel}`}
                  className="flex w-full items-center gap-3 rounded-xl border border-emergency/20 bg-emergency/5 px-3 py-3 text-left text-sm font-medium text-emergency"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emergency/10">
                    <Phone className="h-4 w-4" />
                  </span>
                  Call helpline now
                </a>
                <a
                  href={HOSPITAL.whatsappEnquire}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-3 text-left text-sm font-medium text-emerald-800"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  WhatsApp enquiry
                </a>
                <MenuButton
                  icon={CalendarPlus}
                  label="Request a callback"
                  onClick={() => go("appointment")}
                />
                <MenuButton
                  icon={AlertTriangle}
                  label="Emergency contacts"
                  onClick={() => go("emergency")}
                />
                <MenuButton
                  icon={HelpCircle}
                  label="FAQs by topic"
                  onClick={() => go("faqs")}
                />
                <a
                  href={HOSPITAL.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center gap-3 rounded-xl border border-forest/10 bg-stone/60 px-3 py-3 text-left text-sm font-medium text-forest"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-copper/15 text-copper">
                    <MapPin className="h-4 w-4" />
                  </span>
                  Get directions
                </a>
              </div>
            )}

            {view === "faqs" && (
              <div>
                <Back onClick={() => go("menu")} />
                <h3 className="mb-1 text-sm font-semibold text-forest">
                  FAQs by topic
                </h3>
                <p className="mb-3 text-xs text-forest/55">
                  Pick a topic — answers are short; call us for personal advice.
                </p>
                <div className="space-y-2">
                  {FAQ_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => openCategory(cat.id)}
                      className="flex w-full items-center justify-between rounded-xl border border-forest/10 bg-stone/50 px-3 py-3 text-left text-sm font-medium text-forest transition hover:border-copper/40"
                    >
                      {cat.label}
                      <span className="text-xs text-forest/40">
                        {faqsByCategory(cat.id).length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {view === "faq-category" && faqCategory && (
              <div>
                <Back onClick={() => go("faqs")} />
                <h3 className="mb-3 text-sm font-semibold text-forest">
                  {categoryMeta?.label}
                </h3>
                <ul className="space-y-2">
                  {categoryFaqs.map((item) => {
                    const isOpen = openFaq === item.id;
                    return (
                      <li
                        key={item.id}
                        className="overflow-hidden rounded-xl border border-forest/10"
                      >
                        <button
                          type="button"
                          className="flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left text-sm font-medium text-forest"
                          onClick={() => setOpenFaq(isOpen ? null : item.id)}
                          aria-expanded={isOpen}
                        >
                          {item.q}
                          <ChevronDown
                            className={`h-4 w-4 shrink-0 transition ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <p className="border-t border-forest/8 px-3 py-2 text-xs leading-relaxed text-forest/70">
                            {item.a}
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {view === "appointment" && (
              <div>
                <Back onClick={() => go("menu")} />
                <h3 className="mb-1 text-sm font-semibold text-forest">
                  Request a callback
                </h3>
                <p className="mb-3 text-xs text-forest/55">
                  Prefer calling? Use the helpline — this form is optional.
                </p>
                <form onSubmit={submitAppointment} className="space-y-3">
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Patient name"
                    className="w-full rounded-lg border border-forest/15 px-3 py-2 text-sm outline-none focus:border-copper"
                  />
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone number"
                    className="w-full rounded-lg border border-forest/15 px-3 py-2 text-sm outline-none focus:border-copper"
                  />
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full rounded-lg border border-forest/15 px-3 py-2 text-sm outline-none focus:border-copper"
                  >
                    {departments.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                  <input
                    required
                    type="date"
                    value={date}
                    min={minDate}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-lg border border-forest/15 px-3 py-2 text-sm outline-none focus:border-copper"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full rounded-lg bg-forest py-2.5 text-sm font-semibold text-stone disabled:opacity-60"
                  >
                    {status === "loading" ? "Sending…" : "Send request"}
                  </button>
                  {message && (
                    <p
                      className={`text-xs ${
                        status === "ok" ? "text-emerald-700" : "text-emergency"
                      }`}
                    >
                      {message}
                    </p>
                  )}
                </form>
              </div>
            )}

            {view === "emergency" && (
              <div>
                <Back onClick={() => go("menu")} />
                <h3 className="mb-3 text-sm font-semibold text-forest">
                  Emergency contacts
                </h3>
                <div className="space-y-2">
                  <a
                    href={`tel:${HOSPITAL.emergencyLandlineTel}`}
                    className="flex items-center gap-3 rounded-xl border border-emergency/20 bg-emergency/5 px-3 py-3 text-sm font-medium text-emergency"
                  >
                    <Phone className="h-4 w-4 shrink-0" />
                    Landline: {HOSPITAL.emergencyLandline}
                  </a>
                  <a
                    href={`tel:${HOSPITAL.emergencyMobileTel}`}
                    className="flex items-center gap-3 rounded-xl border border-emergency/20 bg-emergency/5 px-3 py-3 text-sm font-medium text-emergency"
                  >
                    <Phone className="h-4 w-4 shrink-0" />
                    Mobile: {HOSPITAL.emergencyMobile}
                  </a>
                  <a
                    href={HOSPITAL.whatsappEmergency}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-3 text-sm font-medium text-emerald-800"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" />
                    WhatsApp Emergency
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-copper text-forest-deep shadow-lg transition hover:bg-copper-soft"
        aria-label={open ? "Close Prashanthi Desk" : "Open Prashanthi Desk"}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}

function Back({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mb-3 text-xs font-medium text-copper hover:underline"
    >
      ← Back
    </button>
  );
}

function MenuButton({
  icon: Icon,
  label,
  onClick,
}: {
  icon: typeof CalendarPlus;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-xl border border-forest/10 bg-stone/60 px-3 py-3 text-left text-sm font-medium text-forest transition hover:border-copper/40"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-copper/15 text-copper">
        <Icon className="h-4 w-4" />
      </span>
      {label}
    </button>
  );
}
