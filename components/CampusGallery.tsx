import InstagramIcon from "@/components/InstagramIcon";
import { existsSync } from "fs";
import path from "path";
import { HOSPITAL } from "@/lib/data";

const SLOTS = [
  { file: "campus/exterior.jpg", label: "Campus exterior", alt: "Prashanti Super Speciality Hospital exterior" },
  { file: "campus/care.jpg", label: "Patient care", alt: "Care at Prashanti Super Speciality Hospital" },
  { file: "campus/entrance.jpg", label: "Entrance", alt: "Hospital entrance on Bhavani Mess Road" },
] as const;

function hasPublic(rel: string) {
  return existsSync(path.join(process.cwd(), "public", rel));
}

export default function CampusGallery() {
  const ready = SLOTS.filter((s) => hasPublic(s.file));

  return (
    <section id="campus" className="bg-forest-deep px-4 py-16 text-stone sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] text-copper-soft uppercase">
              Campus
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold sm:text-4xl">
              See Prashanti Super Speciality Hospital
            </h2>
            <p className="mt-2 max-w-md text-sm text-stone/60">
              Follow campus life, camps, and updates on Instagram — or visit our
              super speciality campus on Bhavani Mess Road, Nehru Nagar.
            </p>
          </div>
          <a
            href={HOSPITAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border border-copper/50 px-4 py-2 text-sm text-copper-soft transition hover:bg-copper/10"
          >
            <InstagramIcon className="h-4 w-4" />
            @prashanthi_hospital_khammam
          </a>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {SLOTS.map((slot) => {
            const ok = ready.some((r) => r.file === slot.file);
            return (
              <li
                key={slot.file}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#1a4a42]"
              >
                {ok ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`/${slot.file}`}
                    alt={slot.alt}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <a
                    href={HOSPITAL.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center transition hover:bg-white/5"
                  >
                    <InstagramIcon className="h-8 w-8 text-copper/50" />
                    <span className="text-sm font-medium text-stone/80">
                      {slot.label}
                    </span>
                    <span className="text-xs text-stone/45">
                      View on Instagram
                    </span>
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
