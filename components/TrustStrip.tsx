import { BadgeCheck, Clock, Shield, Star } from "lucide-react";
import { HOSPITAL } from "@/lib/data";

const TPAS = HOSPITAL.cashlessPartners;

export default function TrustStrip() {
  return (
    <section
      aria-label="Trust and cashless partners"
      className="border-b border-forest/10 bg-white px-4 py-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-copper/15 px-3 py-1.5 text-xs font-semibold tracking-wide text-forest">
            Super Speciality
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-forest px-3 py-1.5 text-xs font-semibold tracking-wide text-stone">
            <BadgeCheck className="h-3.5 w-3.5 text-copper-soft" aria-hidden />
            NABH
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-forest px-3 py-1.5 text-xs font-semibold tracking-wide text-stone">
            <Shield className="h-3.5 w-3.5 text-copper-soft" aria-hidden />
            ISO
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-forest/15 px-3 py-1.5 text-xs font-medium text-forest">
            <Clock className="h-3.5 w-3.5 text-copper" aria-hidden />
            {HOSPITAL.hoursLabel}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-forest/15 px-3 py-1.5 text-xs font-medium text-forest">
            <Star className="h-3.5 w-3.5 text-copper" aria-hidden />
            {HOSPITAL.googleRating} · {HOSPITAL.googleReviewCount} reviews
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <p className="text-xs tracking-[0.2em] text-forest/45 uppercase">
            Cashless
          </p>
          {TPAS.map((name) => (
            <span
              key={name}
              className="rounded-lg border border-forest/12 bg-stone/80 px-4 py-2 text-sm font-semibold text-forest"
            >
              {name}
            </span>
          ))}
          <a
            href={HOSPITAL.whatsappEnquire}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-copper underline-offset-2 hover:underline"
          >
            Ask desk for cashless
          </a>
        </div>
      </div>
    </section>
  );
}
