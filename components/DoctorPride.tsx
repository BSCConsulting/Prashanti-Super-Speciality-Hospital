import { Phone } from "lucide-react";
import { doctors, HOSPITAL } from "@/lib/data";

function monogram(name: string) {
  const parts = name.replace(/^Dr\.\s*/i, "").split(/\s+/);
  const a = parts[0]?.[0] ?? "P";
  const b = parts[parts.length - 1]?.[0] ?? "";
  return (a + b).toUpperCase();
}

export default function DoctorPride() {
  return (
    <section id="doctors" className="bg-forest-deep px-4 py-20 text-stone sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium tracking-[0.3em] text-copper-soft uppercase">
          Consultants
        </p>
        <h2 className="font-display mt-2 text-4xl font-semibold sm:text-5xl">
          Faces of Prashanthi
        </h2>
        <p className="mt-3 max-w-xl text-stone/65">
          Our doctors — credentials forward, portraits proud. Call the helpline
          to book with a named consultant.
        </p>
        <p className="mt-2 max-w-xl text-xs text-copper/70">
          Temporary stock portraits for layout — replace with official consultant
          photos when ready.
        </p>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doc, i) => (
            <li
              key={doc.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-forest transition duration-500 hover:-translate-y-1 hover:border-copper/40"
            >
              <div
                className="relative flex aspect-[4/5] items-end justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(160deg, #1a4a42 0%, #0a1210 70%)`,
                }}
              >
                {/* ponytail: stylized monogram until real portraits land in /public/doctors/{id}.jpg */}
                {doc.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-7xl font-semibold text-copper/35 transition group-hover:text-copper/55 sm:text-8xl">
                      {monogram(doc.name)}
                    </span>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep via-forest-deep/80 to-transparent p-5 pt-16">
                  <p className="text-[10px] tracking-[0.2em] text-copper-soft uppercase">
                    Chapter {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-1 text-2xl font-semibold">{doc.name}</h3>
                  <p className="mt-1 text-sm font-medium text-copper-soft">
                    {doc.qualifications}
                  </p>
                  <p className="mt-1 text-sm text-stone/70">{doc.specialty}</p>
                </div>
              </div>
              <div className="space-y-3 p-5">
                <p className="text-sm leading-relaxed text-stone/70">{doc.focus}</p>
                <a
                  href={`tel:${HOSPITAL.emergencyLandlineTel}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-copper-soft transition hover:text-copper"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden />
                  Call to book with {doc.name.split(" ").slice(-1)[0]}
                </a>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-stone/50">
          Prefer a named consultant? Call{" "}
          <a
            href={`tel:${HOSPITAL.emergencyLandlineTel}`}
            className="text-copper-soft hover:underline"
          >
            {HOSPITAL.emergencyLandline}
          </a>{" "}
          or WhatsApp{" "}
          <a
            href={HOSPITAL.whatsappEnquire}
            target="_blank"
            rel="noopener noreferrer"
            className="text-copper-soft hover:underline"
          >
            {HOSPITAL.emergencyMobile}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
