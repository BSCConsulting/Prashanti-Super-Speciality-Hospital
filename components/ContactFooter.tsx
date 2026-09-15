import { MapPin, MessageCircle, Phone, Star } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
import { HOSPITAL } from "@/lib/data";

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-forest-deep px-4 pt-16 pb-8 text-stone">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-3xl font-bold tracking-[0.14em] text-white uppercase sm:text-4xl">
              PRASHANTI
            </p>
            <p className="mt-2 text-xs font-medium tracking-[0.28em] text-copper-soft uppercase">
              Super Speciality Hospital
            </p>
            <p className="mt-4 text-sm text-stone/55">
              {HOSPITAL.city}, Telangana · {HOSPITAL.hoursLabel}
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-stone/75">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden />
              <span>{HOSPITAL.addressLine}</span>
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-stone/70">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5">
                <Star className="h-3.5 w-3.5 text-copper" aria-hidden />
                {HOSPITAL.googleRating} · {HOSPITAL.googleReviewCount} reviews
              </span>
              {HOSPITAL.accreditations.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-copper/40 px-3 py-1.5 text-copper-soft"
                >
                  {a}
                </span>
              ))}
            </div>

            <a
              href={HOSPITAL.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-copper/60 px-4 py-2 text-sm font-medium text-copper-soft transition hover:bg-copper/10"
            >
              <MapPin className="h-4 w-4" aria-hidden />
              Get directions
            </a>
          </div>

          <div className="space-y-4 lg:col-span-3">
            <p className="text-[11px] tracking-[0.28em] text-stone/40 uppercase">
              Talk to us
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
              className="inline-flex items-center gap-2 text-sm font-medium text-copper-soft hover:text-copper"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp enquiry
            </a>

            <div className="pt-4">
              <p className="mb-3 text-[11px] tracking-[0.28em] text-stone/40 uppercase">
                Follow
              </p>
              <SocialLinks variant="icons" />
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="mb-3 text-[11px] tracking-[0.28em] text-stone/40 uppercase">
              Find us
            </p>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title={`${HOSPITAL.name} map`}
                src={`https://maps.google.com/maps?q=${HOSPITAL.lat},${HOSPITAL.lng}&z=16&output=embed`}
                className="h-52 w-full grayscale-[25%] contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 sm:flex-row">
          <p className="text-center text-xs text-stone/35 sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold tracking-wide text-stone/50 uppercase">
              PRASHANTI
            </span>{" "}
            Super Speciality Hospital. All rights reserved.
          </p>
          <a
            href="#home"
            className="text-xs tracking-[0.2em] text-stone/40 uppercase transition hover:text-copper-soft"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
