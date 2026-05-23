import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

type LegalPageLayoutProps = {
  title: string;
  children: ReactNode;
};

export function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#06131f] text-white">
      <Header />
      <main className="px-5 pb-24 pt-36 sm:px-8">
        <article className="mx-auto max-w-4xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/20 sm:p-12">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200"
          >
            Norvex Aviation
          </Link>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 border-b border-white/10 pb-8 text-base leading-8 text-slate-300">
            Last updated: May 23, 2026
          </p>
          <div className="mt-10 space-y-8 text-base leading-8 text-slate-300 [&_a]:font-semibold [&_a]:text-emerald-200 [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:text-white [&_li]:pl-1 [&_strong]:text-white [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
