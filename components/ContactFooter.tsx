import { MapPin, MessageCircle, Phone, Star } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
import { HOSPITAL } from "@/lib/data";

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-forest-deep px-4 py-16 text-stone">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div>
          <p className="font-display text-2xl font-semibold sm:text-3xl">
            {HOSPITAL.name}
          </p>
          <p className="mt-2 text-sm text-stone/60">
            Super speciality care · {HOSPITAL.city}, Telangana
          </p>
          <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-stone/75">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden />
            <span>{HOSPITAL.addressLine}</span>
          </p>
          <p className="mt-3 text-sm font-medium text-copper-soft">
            {HOSPITAL.hoursLabel} · Emergency & admissions
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-stone/70">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1">
              <Star className="h-3.5 w-3.5 text-copper" aria-hidden />
              {HOSPITAL.googleRating} · {HOSPITAL.googleReviewCount} Google reviews
            </span>
            {HOSPITAL.accreditations.map((a) => (
              <span
                key={a}
                className="rounded-full border border-copper/40 px-3 py-1 text-copper-soft"
              >
                {a}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={HOSPITAL.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-copper/60 px-4 py-2 text-sm font-medium text-copper-soft transition hover:bg-copper/10"
            >
              <MapPin className="h-4 w-4" aria-hidden />
              Get directions
            </a>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-xs tracking-[0.25em] text-stone/40 uppercase">
              Follow us
            </p>
            <SocialLinks variant="pills" />
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs tracking-[0.25em] text-stone/40 uppercase">
            Prefer to talk?
          </p>
          <a
            href={`tel:${HOSPITAL.emergencyLandlineTel}`}
            className="flex items-center gap-3 text-lg font-semibold hover:text-copper-soft"
          >
            <Phone className="h-5 w-5 text-emergency" aria-hidden />
            {HOSPITAL.emergencyLandline}
          </a>
          <a
            href={`tel:${HOSPITAL.emergencyMobileTel}`}
            className="flex items-center gap-3 text-base hover:text-copper-soft"
          >
            <Phone className="h-4 w-4 text-copper" aria-hidden />
            {HOSPITAL.emergencyMobile}
          </a>
          <a
            href={HOSPITAL.whatsappEnquire}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 pt-2 text-sm font-medium text-copper-soft hover:text-copper"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp enquiry
          </a>
          <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
            <iframe
              title={`${HOSPITAL.name} map`}
              src={`https://maps.google.com/maps?q=${HOSPITAL.lat},${HOSPITAL.lng}&z=16&output=embed`}
              className="h-48 w-full grayscale-[20%] contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center gap-4 border-t border-white/10 pt-6 sm:flex-row sm:justify-between">
        <p className="text-center text-xs text-stone/35 sm:text-left">
          © {new Date().getFullYear()} {HOSPITAL.name}. All rights reserved.
        </p>
        <SocialLinks variant="icons" />
      </div>
    </footer>
  );
}
