import { existsSync } from "fs";
import path from "path";
import { ArrowRight } from "lucide-react";
import { departments, doctors, HOSPITAL } from "@/lib/data";
import InstituteDiagram from "@/components/InstituteDiagram";

function panelSrc(deptId: string) {
  const rel = `institutes/${deptId}.jpg`;
  return existsSync(path.join(process.cwd(), "public", rel)) ? `/${rel}` : null;
}

export default function InstituteChapters() {
  return (
    <section id="institutes" className="relative overflow-hidden bg-stone px-4 py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.3em] text-copper uppercase">
            Institutes
          </p>
          <h2 className="font-display mt-2 text-4xl font-semibold text-forest sm:text-5xl">
            Care pillars of{" "}
            <span className="font-bold tracking-[0.08em] text-forest uppercase">
              PRASHANTI
            </span>
          </h2>
          <p className="mt-4 text-forest/65">
            Five named institutes — clear pathways, named consultants, and the
            clinical depth families across Khammam expect.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {departments.map((dept, i) => {
            const leads = doctors.filter((d) => dept.doctorIds.includes(d.id));
            const reverse = i % 2 === 1;
            const photo = panelSrc(dept.id);
            const face = leads[0]?.photo;

            return (
              <article
                key={dept.id}
                id={dept.id}
                className={`grid overflow-hidden rounded-3xl border border-forest/10 bg-forest text-stone shadow-[0_20px_60px_rgba(18,53,47,0.18)] md:grid-cols-12 ${
                  reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="flex flex-col justify-between p-7 sm:p-9 md:col-span-7">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-[11px] tracking-[0.28em] text-copper-soft uppercase">
                        {dept.chapter}
                      </p>
                      <span className="h-px w-8 bg-copper/40" aria-hidden />
                      <p className="text-[11px] tracking-wide text-stone/40">
                        Institute {String(i + 1).padStart(2, "0")} of{" "}
                        {String(departments.length).padStart(2, "0")}
                      </p>
                    </div>

                    <h3 className="font-display mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                      {dept.name}
                    </h3>
                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-stone/70 sm:text-base">
                      {dept.description}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {dept.highlights.map((h) => (
                        <li
                          key={h}
                          className="rounded-full border border-copper/35 bg-copper/10 px-3 py-1.5 text-xs font-medium text-copper-soft"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-5">
                    <p className="mb-3 text-[10px] tracking-[0.25em] text-stone/40 uppercase">
                      Consultant leads
                    </p>
                    <ul className="space-y-3">
                      {leads.map((doc) => (
                        <li key={doc.id} className="flex items-center gap-3">
                          {doc.photo ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={doc.photo}
                              alt=""
                              className="h-11 w-11 rounded-full object-cover ring-2 ring-copper/40"
                            />
                          ) : (
                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-copper-soft">
                              {doc.name
                                .split(" ")
                                .slice(0, 2)
                                .map((p) => p[0])
                                .join("")}
                            </span>
                          )}
                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold">{doc.name}</p>
                            <p className="truncate text-xs text-stone/50">
                              {doc.qualifications}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#doctors"
                      className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-copper-soft transition hover:text-copper"
                    >
                      Meet the team
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  </div>
                </div>

                <div className="relative min-h-[22rem] overflow-hidden md:col-span-5">
                  {(photo || face) && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={photo ?? face!}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                  <div
                    className={`absolute inset-0 ${
                      photo || face
                        ? "bg-gradient-to-t from-forest-deep via-forest/75 to-forest/45"
                        : "bg-[#163f38]"
                    }`}
                    aria-hidden
                  />

                  <div className="relative z-10 flex h-full flex-col items-center justify-between px-6 py-8 sm:px-8">
                    <div className="relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
                      <div
                        className="absolute inset-0 rounded-full border border-copper/40"
                        aria-hidden
                      />
                      <div
                        className="absolute inset-2.5 rounded-full border border-copper/15"
                        aria-hidden
                      />
                      <InstituteDiagram
                        kind={dept.icon}
                        className="relative h-20 w-20 text-copper-soft drop-shadow sm:h-24 sm:w-24"
                      />
                    </div>

                    <div className="w-full rounded-2xl border border-white/15 bg-forest-deep/70 p-5 backdrop-blur-sm">
                      <p className="mb-4 text-[10px] tracking-[0.28em] text-copper/80 uppercase">
                        Care path
                      </p>
                      <ol className="space-y-3">
                        {dept.pathway.map((step, idx) => (
                          <li key={step} className="flex items-center gap-3">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-copper/50 text-[11px] font-bold text-copper-soft">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            <span className="text-sm font-medium text-stone/90">
                              {step}
                            </span>
                            {idx < dept.pathway.length - 1 && (
                              <span
                                className="ml-auto hidden h-8 w-px bg-copper/25 sm:block"
                                aria-hidden
                              />
                            )}
                          </li>
                        ))}
                      </ol>
                      <a
                        href={`tel:${HOSPITAL.emergencyLandlineTel}`}
                        className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-copper px-4 py-2.5 text-xs font-bold tracking-wide text-forest-deep transition hover:bg-copper-soft"
                      >
                        Call for this pathway
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
