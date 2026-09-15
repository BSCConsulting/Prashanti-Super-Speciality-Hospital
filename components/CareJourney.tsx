import { careJourney, HOSPITAL } from "@/lib/data";

export default function CareJourney() {
  return (
    <section className="bg-white px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium tracking-[0.3em] text-copper uppercase">
          How care begins
        </p>
        <h2 className="font-display mt-2 text-3xl font-semibold text-forest sm:text-4xl">
          A simple path — call first
        </h2>
        <p className="mt-3 max-w-lg text-forest/60">
          Most families enquire by phone or WhatsApp. Online forms are optional —
          we keep them light.
        </p>

        <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="pointer-events-none absolute top-8 right-0 left-0 hidden h-px bg-forest/15 lg:block"
            aria-hidden
          />
          {careJourney.map((item) => (
            <li key={item.step} className="relative">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-copper bg-white text-xs font-semibold tracking-wider text-copper">
                {item.step}
              </div>
              <h3 className="text-base font-semibold text-forest">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-forest/60">
                {item.detail}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-4 rounded-2xl bg-stone/80 p-6 sm:grid-cols-3 sm:p-8">
          {[
            { title: "Hospital type", detail: "Super speciality · multi-institute" },
            { title: "24/7 emergency", detail: HOSPITAL.hoursLabel },
            { title: "Quality marks", detail: HOSPITAL.accreditations.join(" · ") },
          ].map((card) => (
            <div key={card.title}>
              <p className="text-xs tracking-[0.2em] text-forest/40 uppercase">
                {card.title}
              </p>
              <p className="mt-2 text-sm font-medium text-forest">{card.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
