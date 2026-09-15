"use client";

import { useMemo, useState } from "react";
import { departments } from "@/lib/data";

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

export default function CallbackStrip() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState(departments[0]?.name ?? "");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [message, setMessage] = useState("");
  // Client-only min avoids SSR/client date hydration mismatch
  const minDate = useMemo(() => todayISO(), []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      setStatus("err");
      setMessage("Enter a valid 10-digit mobile number.");
      return;
    }

    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patient_name: name.trim() || "Callback request",
          phone: phone.trim(),
          department,
          preferred_date: date || todayISO(),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setStatus("err");
        setMessage(data.message || "Could not send. Please call the helpline.");
        return;
      }
      setStatus("ok");
      setMessage("Received — our desk will call you shortly.");
      setName("");
      setPhone("");
    } catch {
      setStatus("err");
      setMessage("Network error. Please call 08742-222424.");
    }
  }

  return (
    <section id="callback" className="border-y border-forest/10 bg-white px-4 py-5">
      <form
        onSubmit={onSubmit}
        className="mx-auto flex max-w-6xl flex-col gap-3 lg:flex-row lg:items-end"
      >
        <div className="min-w-0 shrink-0 lg:w-44">
          <p className="text-xs font-medium tracking-wide text-forest/50 uppercase">
            Optional
          </p>
          <p className="text-sm font-semibold text-forest">Request a callback</p>
        </div>

        <label className="block min-w-0 flex-1">
          <span className="sr-only">Specialty</span>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full rounded-lg border border-forest/15 bg-stone/40 px-3 py-2.5 text-sm text-forest outline-none focus:border-copper"
          >
            {departments.map((d) => (
              <option key={d.id} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>
        </label>

        <label className="block min-w-0 flex-1">
          <span className="sr-only">Phone</span>
          <input
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your phone"
            className="w-full rounded-lg border border-forest/15 bg-stone/40 px-3 py-2.5 text-sm text-forest outline-none focus:border-copper"
          />
        </label>

        <label className="block min-w-0 flex-1">
          <span className="sr-only">Name</span>
          <input
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name (optional)"
            className="w-full rounded-lg border border-forest/15 bg-stone/40 px-3 py-2.5 text-sm text-forest outline-none focus:border-copper"
          />
        </label>

        <label className="block min-w-0 sm:w-40">
          <span className="sr-only">Preferred date</span>
          <input
            type="date"
            value={date}
            min={minDate}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-lg border border-forest/15 bg-stone/40 px-3 py-2.5 text-sm text-forest outline-none focus:border-copper"
          />
        </label>

        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg bg-forest px-5 py-2.5 text-sm font-semibold text-stone transition hover:bg-forest/90 disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Request callback"}
        </button>
      </form>
      {message && (
        <p
          role="status"
          className={`mx-auto mt-2 max-w-6xl text-center text-xs ${
            status === "ok" ? "text-emerald-700" : "text-emergency"
          }`}
        >
          {message}
        </p>
      )}
    </section>
  );
}
