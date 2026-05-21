import { siteConfig } from "@/lib/site";
import Link from "next/link";

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#06131f]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-lg font-semibold uppercase tracking-[0.3em] text-white">
            NORVEX AVIATION
          </p>
          <p className="mt-3 text-base text-slate-300">{siteConfig.tagline}</p>
          <a className="mt-3 block text-sm font-semibold text-emerald-200" href={siteConfig.contactHref}>
            {siteConfig.contactEmail}
          </a>
        </div>
        <div className="flex flex-wrap gap-5 text-sm font-semibold text-slate-300">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
