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
      <div className="absolute inset-0 bg-forest-deep/85" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(184,115,51,0.28), transparent 50%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center">
        <p className="animate-fade-up mb-5 text-[11px] font-semibold tracking-[0.4em] text-copper uppercase sm:text-xs">
          Khammam · Telangana · NABH · ISO
        </p>

        <h1 className="animate-fade-up-delay">
          <span className="font-display block text-5xl font-bold tracking-[0.14em] text-white uppercase drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:text-6xl md:text-7xl lg:text-8xl">
            PRASHANTI
          </span>
          <span className="mt-4 inline-block border-t border-copper/60 pt-4 text-sm font-medium tracking-[0.28em] text-copper-soft uppercase sm:text-base md:tracking-[0.35em]">
            Super Speciality Hospital
          </span>
        </h1>

        <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-xl text-base text-white/85 sm:text-lg">
          {HOSPITAL.tagline} · {HOSPITAL.hoursLabel}
        </p>
        <p className="animate-fade-up-delay-2 mx-auto mt-2 max-w-lg text-sm tracking-wide text-white/50">
          Renal · Neuro · Ortho · Critical Care · Surgery
        </p>

        <div className="animate-fade-up-delay-2 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${HOSPITAL.emergencyLandlineTel}`}
            className="inline-flex min-w-[12rem] items-center justify-center gap-2 rounded-full border-2 border-copper bg-transparent px-6 py-3.5 text-sm font-bold tracking-wide text-copper-soft transition hover:bg-copper hover:text-forest-deep"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call Helpline
          </a>
          <a
            href={HOSPITAL.whatsappEnquire}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[12rem] items-center justify-center gap-2 rounded-full bg-copper px-6 py-3.5 text-sm font-bold tracking-wide text-forest-deep transition hover:bg-copper-soft"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp Enquiry
          </a>
        </div>

        <a
          href="#callback"
          className="mt-5 inline-block text-xs text-white/45 underline-offset-4 hover:text-white/75 hover:underline"
        >
          Or request a callback
        </a>

        <p className="scroll-cue mt-14 text-[10px] tracking-[0.35em] text-white/45 uppercase">
          Explore institutes · Meet consultants
        </p>
      </div>
    </section>
  );
}
