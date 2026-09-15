import { existsSync } from "fs";
import path from "path";
import { departments, doctors } from "@/lib/data";
import InstituteDiagram from "@/components/InstituteDiagram";

function panelSrc(deptId: string) {
  const rel = `institutes/${deptId}.jpg`;
  return existsSync(path.join(process.cwd(), "public", rel)) ? `/${rel}` : null;
}

export default function InstituteChapters() {
  return (
    <section id="institutes" className="bg-stone px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium tracking-[0.3em] text-copper uppercase">
          Chapters
        </p>
        <h2 className="font-display mt-2 text-4xl font-semibold text-forest sm:text-5xl">
          Our institutes
        </h2>
        <p className="mt-3 max-w-xl text-forest/65">
          Scroll through the care pillars that define Prashanti Super Speciality
          Hospital — named teams, clear pathways, Khammam pride.
        </p>

        <div className="mt-12 space-y-6">
          {departments.map((dept, i) => {
            const leads = doctors.filter((d) => dept.doctorIds.includes(d.id));
            const reverse = i % 2 === 1;
            const photo = panelSrc(dept.id);

            return (
              <article
                key={dept.id}
                id={dept.id}
                className={`grid overflow-hidden rounded-2xl bg-forest text-stone md:grid-cols-2 ${
                  reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative flex min-h-[16rem] flex-col justify-between bg-forest-deep p-8 sm:p-10">
                  <div>
                    <p className="text-xs tracking-[0.25em] text-copper-soft uppercase">
                      {dept.chapter}
                    </p>
                    <h3 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
                      {dept.name}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-stone/70">
                      {dept.description}
                    </p>
                  </div>
                  <ul className="mt-8 space-y-1 border-t border-white/10 pt-4 text-sm">
                    {leads.map((doc) => (
                      <li key={doc.id}>
                        <span className="font-medium">{doc.name}</span>
                        <span className="text-stone/55"> · {doc.qualifications}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative flex min-h-[18rem] flex-col items-center justify-center overflow-hidden bg-[#163f38] px-6 py-10 sm:px-10">
                  <div className="pointer-events-none absolute inset-0 opacity-[0.08]" aria-hidden>
                    <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern
                          id={`grid-${dept.id}`}
                          width="28"
                          height="28"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M28 0H0V28"
                            fill="none"
                            stroke="white"
                            strokeWidth="1"
                          />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#grid-${dept.id})`} />
                    </svg>
                  </div>

                  {photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={photo}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-35"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-forest/40" aria-hidden />

                  <div className="relative z-10 flex w-full max-w-xs flex-col items-center">
                    <div className="relative mb-6 flex h-36 w-36 items-center justify-center sm:h-40 sm:w-40">
                      <div
                        className="absolute inset-0 rounded-full border border-copper/35"
                        aria-hidden
                      />
                      <div
                        className="absolute inset-3 rounded-full border border-copper/15"
                        aria-hidden
                      />
                      <InstituteDiagram
                        kind={dept.icon}
                        className="relative h-28 w-28 text-copper-soft sm:h-32 sm:w-32"
                      />
                    </div>

                    <p className="mb-3 text-[10px] tracking-[0.28em] text-copper/70 uppercase">
                      Care path
                    </p>
                    <ol className="flex w-full items-start justify-between gap-2">
                      {dept.pathway.map((step, idx) => (
                        <li
                          key={step}
                          className="relative flex flex-1 flex-col items-center text-center"
                        >
                          {idx < dept.pathway.length - 1 && (
                            <span
                              className="absolute top-3.5 left-[60%] hidden h-px w-[80%] bg-copper/35 sm:block"
                              aria-hidden
                            />
                          )}
                          <span className="relative z-10 mb-2 flex h-7 w-7 items-center justify-center rounded-full border border-copper/50 bg-[#163f38] text-[10px] font-semibold text-copper-soft">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[11px] leading-tight font-medium text-stone/85 sm:text-xs">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>
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
