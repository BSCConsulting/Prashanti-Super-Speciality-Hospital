import InstagramIcon from "@/components/InstagramIcon";
import FacebookIcon from "@/components/FacebookIcon";
import { HOSPITAL } from "@/lib/data";

type Props = {
  variant?: "pills" | "icons";
  className?: string;
};

const LINKS = [
  {
    href: HOSPITAL.instagram,
    label: "Instagram",
    Icon: InstagramIcon,
  },
  {
    href: HOSPITAL.facebook,
    label: "Facebook",
    Icon: FacebookIcon,
  },
] as const;

export default function SocialLinks({ variant = "icons", className = "" }: Props) {
  if (variant === "pills") {
    return (
      <div className={`flex flex-wrap gap-3 ${className}`}>
        {LINKS.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-stone/80 transition hover:border-copper/50 hover:bg-copper/10 hover:text-copper-soft"
          >
            <Icon className="h-4 w-4" />
            {label}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {LINKS.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Prashanthi on ${label}`}
          title={label}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-copper/40 text-copper-soft transition hover:bg-copper/15 hover:text-copper"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
