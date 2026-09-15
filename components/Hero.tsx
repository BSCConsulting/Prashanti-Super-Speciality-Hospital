import { existsSync } from "fs";
import path from "path";
import { MessageCircle, Phone } from "lucide-react";
import { HOSPITAL } from "@/lib/data";

const FALLBACK_HERO =
  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1920&q=80";

export default function Hero() {
  const localHero = existsSync(
    path.join(process.cwd(), "public", "campus", "hero.jpg"),
  );
  const bg = localHero ? "/campus/hero.jpg" : FALLBACK_HERO;

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-6.5rem)] items-center justify-center overflow-hidden"
    >
      <div
        className="hero-kenburns absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${bg}')` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-forest/78" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(184,115,51,0.18), transparent 55%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center">
        <p className="animate-fade-up mb-4 text-xs font-medium tracking-[0.35em] text-copper-soft uppercase">
          Khammam · Telangana · NABH · ISO
        </p>
        <h1 className="font-display animate-fade-up-delay text-4xl leading-[1.05] font-semibold tracking-tight text-stone sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Prashanti</span>
          <span className="mt-1 block text-[0.72em] font-semibold text-copper-soft sm:mt-2">
            Super Speciality Hospital
          </span>
        </h1>
        <p className="animate-fade-up-delay-2 mx-auto mt-5 max-w-xl text-base text-stone/80 sm:text-lg">
          {HOSPITAL.tagline} · {HOSPITAL.hoursLabel}
        </p>
        <p className="animate-fade-up-delay-2 mx-auto mt-2 max-w-lg text-sm text-stone/55">
          Renal sciences · Neurosurgery · Orthopedics · Critical care · Surgery
        </p>

        <div className="animate-fade-up-delay-2 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${HOSPITAL.emergencyLandlineTel}`}
            className="inline-flex min-w-[11rem] items-center justify-center gap-2 rounded-full border border-copper bg-transparent px-6 py-3 text-sm font-semibold text-copper-soft transition hover:bg-copper/15"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call Helpline
          </a>
          <a
            href={HOSPITAL.whatsappEnquire}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[11rem] items-center justify-center gap-2 rounded-full bg-copper px-6 py-3 text-sm font-semibold text-forest-deep transition hover:bg-copper-soft"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp Enquiry
          </a>
        </div>

        <a
          href="#callback"
          className="mt-5 inline-block text-xs text-stone/55 underline-offset-4 hover:text-stone/80 hover:underline"
        >
          Or request a callback
        </a>

        <p className="scroll-cue mt-14 text-xs tracking-[0.25em] text-stone/55 uppercase">
          Meet our consultants · Renal · Neuro · Ortho
        </p>
      </div>
    </section>
  );
}
