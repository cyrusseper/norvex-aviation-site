import Link from "next/link";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Coverage", href: "#coverage" },
  { label: "Fleet", href: "#fleet" },
  { label: "Partnership", href: "#partnership" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#06131f]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center border border-emerald-300/40 bg-white/10 text-sm font-semibold tracking-[0.2em] text-emerald-200">
            NX
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-white">
            Norvex Aviation
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="hidden border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/60 hover:text-emerald-100 sm:inline-flex"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
