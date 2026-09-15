import type { Department } from "@/types";

type IconKind = Department["icon"];

/** Editorial copper-line specialty diagrams for institute panels. */
export default function InstituteDiagram({
  kind,
  className = "",
}: {
  kind: IconKind;
  className?: string;
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      viewBox="0 0 160 160"
      className={className}
      aria-hidden
      role="img"
    >
      {kind === "kidney" && (
        <>
          <ellipse cx="58" cy="78" rx="28" ry="42" {...common} />
          <ellipse cx="102" cy="78" rx="28" ry="42" {...common} />
          <path d="M58 48c8 6 12 18 12 30s-4 24-12 30" {...common} opacity="0.55" />
          <path d="M102 48c-8 6-12 18-12 30s4 24 12 30" {...common} opacity="0.55" />
          <path d="M70 110c4 14 10 22 18 28" {...common} />
          <path d="M90 110c-4 14-10 22-18 28" {...common} />
          <circle cx="80" cy="142" r="4" {...common} />
          <path d="M40 36h20M100 36h20" {...common} opacity="0.4" />
        </>
      )}

      {kind === "brain" && (
        <>
          <path
            d="M48 78c0-22 16-38 36-38 14 0 26 8 32 20 10 2 18 12 18 24 0 16-12 28-28 28H62c-8 0-14-6-14-14z"
            {...common}
          />
          <path d="M62 52c8 4 12 12 12 22M88 48c6 8 8 16 6 26M104 68c-6 4-8 12-6 20" {...common} opacity="0.55" />
          <path d="M80 94v36M80 112h14M80 124h10" {...common} />
          <circle cx="80" cy="134" r="3" {...common} />
        </>
      )}

      {kind === "bone" && (
        <>
          <path d="M52 48c8-10 20-10 28 0l8 10c4 6 4 14 0 20l-20 26c-4 6-4 14 0 20l8 10c8 10 20 10 28 0" {...common} />
          <path d="M68 62l24 36M72 98l16-20" {...common} opacity="0.45" />
          <circle cx="48" cy="44" r="7" {...common} />
          <circle cx="84" cy="44" r="7" {...common} />
          <circle cx="76" cy="128" r="7" {...common} />
          <circle cx="112" cy="128" r="7" {...common} />
          <path d="M40 88h20M100 88h20" {...common} opacity="0.35" />
        </>
      )}

      {kind === "heart-pulse" && (
        <>
          <path
            d="M80 128s-36-24-36-52c0-16 12-28 28-28 8 0 14 4 18 10 4-6 10-10 18-10 16 0 28 12 28 28 0 28-36 52-36 52z"
            {...common}
          />
          <path d="M36 78h22l8-16 12 32 10-20h36" {...common} />
          <circle cx="80" cy="42" r="3" {...common} opacity="0.5" />
        </>
      )}

      {kind === "scalpel" && (
        <>
          <path d="M44 116l52-52 16 16-52 52H44v-16z" {...common} />
          <path d="M96 64l12-12c6-6 16-6 22 0s6 16 0 22l-12 12" {...common} />
          <path d="M52 108l16 16" {...common} opacity="0.5" />
          <circle cx="48" cy="48" r="10" {...common} opacity="0.45" />
          <circle cx="48" cy="48" r="4" {...common} />
          <path d="M112 112h20M112 120h14" {...common} opacity="0.35" />
        </>
      )}
    </svg>
  );
}
