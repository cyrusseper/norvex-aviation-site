import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { legalPages } from "@/lib/site";

type LegalPageKey = keyof typeof legalPages;

export function LegalPage({ pageKey }: { pageKey: LegalPageKey }) {
  const page = legalPages[pageKey];

  return (
    <div className="min-h-screen bg-[#06131f] text-white">
      <Header />
      <main className="px-5 pb-24 pt-36 sm:px-8">
        <article className="mx-auto max-w-4xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/20 sm:p-12">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">
            Norvex Aviation
          </Link>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-6xl">
            {page.title}
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-300">Last updated: May 21, 2026</p>
          <div className="mt-12 space-y-10">
            {page.body.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold tracking-[-0.02em] text-white">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-slate-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
