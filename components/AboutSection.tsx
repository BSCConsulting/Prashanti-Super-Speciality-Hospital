import InstagramIcon from "@/components/InstagramIcon";
import FacebookIcon from "@/components/FacebookIcon";
import { HOSPITAL } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="bg-stone px-4 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-medium tracking-[0.3em] text-copper uppercase">
            About
          </p>
          <h2 className="font-display mt-2 text-4xl font-semibold text-forest sm:text-5xl">
            Care with standards for Khammam
          </h2>
          <p className="mt-5 text-base leading-relaxed text-forest/70">
            Prashanthi Super Speciality Hospital on Bhavani Mess Road, Nehru
            Nagar, serves families across Khammam and neighbouring districts
            with institute-led care — renal sciences, neurosurgery, orthopedics,
            critical care, and surgery.
          </p>
          <p className="mt-4 text-base leading-relaxed text-forest/70">
            Under the leadership of{" "}
            <span className="font-semibold text-forest">
              Dr. Bharat Babu Kesoju
            </span>{" "}
            (MBBS, M.D.), Hospital Director, the centre focuses on advanced
            treatment at accessible cost — recognised with{" "}
            <span className="font-semibold text-forest">NABH</span> and{" "}
            <span className="font-semibold text-forest">ISO</span> certifications.
          </p>
          <p className="mt-4 text-sm text-forest/55">
            Patients visit from Khammam, Bhadradri Kothagudem, Warangal,
            Nalgonda, Krishna and nearby regions.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-forest/10 bg-white p-6">
            <p className="text-xs tracking-[0.2em] text-forest/40 uppercase">
              At a glance
            </p>
            <ul className="mt-4 space-y-3 text-sm text-forest/80">
              <li className="flex justify-between gap-4 border-b border-forest/8 pb-3">
                <span>Emergency</span>
                <span className="font-medium">{HOSPITAL.hoursLabel}</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-forest/8 pb-3">
                <span>Location</span>
                <span className="max-w-[14rem] text-right font-medium">
                  {HOSPITAL.addressShort}
                </span>
              </li>
              <li className="flex justify-between gap-4 border-b border-forest/8 pb-3">
                <span>Quality</span>
                <span className="font-medium">
                  {HOSPITAL.accreditations.join(" · ")}
                </span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Google</span>
                <span className="font-medium">
                  {HOSPITAL.googleRating}★ · {HOSPITAL.googleReviewCount} reviews
                </span>
              </li>
            </ul>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={HOSPITAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-copper/30 bg-forest px-4 py-4 text-stone transition hover:border-copper"
            >
              <InstagramIcon className="h-6 w-6 shrink-0 text-copper-soft" />
              <div className="min-w-0">
                <p className="text-sm font-semibold">Instagram</p>
                <p className="truncate text-xs text-stone/60">
                  {HOSPITAL.instagramHandle}
                </p>
              </div>
            </a>
            <a
              href={HOSPITAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-copper/30 bg-forest px-4 py-4 text-stone transition hover:border-copper"
            >
              <FacebookIcon className="h-6 w-6 shrink-0 text-copper-soft" />
              <div className="min-w-0">
                <p className="text-sm font-semibold">Facebook</p>
                <p className="truncate text-xs text-stone/60">
                  {HOSPITAL.facebookLabel}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
