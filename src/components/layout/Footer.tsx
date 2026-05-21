import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#06131f]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-lg font-semibold uppercase tracking-[0.3em] text-white">
            NORVEX AVIATION
          </p>
          <p className="mt-3 text-base text-slate-300">&ldquo;{siteConfig.tagline}&rdquo;</p>
        </div>
        <a
          href={siteConfig.contactHref}
          className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200 transition hover:text-white"
        >
          Contact Us
        </a>
      </div>
    </footer>
  );
}
