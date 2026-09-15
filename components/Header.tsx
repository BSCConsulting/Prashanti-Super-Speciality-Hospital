"use client";

import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { HOSPITAL } from "@/lib/data";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#institutes", label: "Institutes" },
  { href: "#doctors", label: "Doctors" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-emergency px-3 py-2 text-center text-sm font-semibold tracking-wide text-white sm:text-base">
        <a
          href={`tel:${HOSPITAL.emergencyLandlineTel}`}
          className="inline-flex items-center justify-center gap-2"
        >
          <Phone className="h-4 w-4 shrink-0" aria-hidden />
          <span>24/7 EMERGENCY HELPLINE: {HOSPITAL.emergencyLandline}</span>
        </a>
      </div>

      <div className="border-b border-white/10 bg-forest-deep/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="text-sm font-medium tracking-[0.2em] text-stone/90 uppercase">
            {HOSPITAL.shortName}
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-stone/75 transition hover:text-stone"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${HOSPITAL.emergencyLandlineTel}`}
              className="rounded-full border border-copper/70 px-4 py-1.5 text-sm text-copper-soft transition hover:bg-copper/15"
            >
              Call Helpline
            </a>
          </nav>

          <button
            type="button"
            className="rounded-lg p-2 text-stone md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 border-t border-white/10 px-4 py-3 md:hidden" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-stone/90 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${HOSPITAL.emergencyLandlineTel}`}
              className="mt-1 rounded-lg bg-emergency px-3 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Call {HOSPITAL.emergencyLandline}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
