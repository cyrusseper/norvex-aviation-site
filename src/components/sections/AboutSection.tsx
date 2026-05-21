export function AboutSection() {
  return (
    <section className="bg-[#06131f] py-24 text-white sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-5xl border border-white/10 bg-white/[0.04] p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-200">
            About Norvex
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
            A coordinated aviation operations platform.
          </h2>
          <p className="mt-7 text-lg leading-9 text-slate-300">
            Norvex Aviation is being built as a scalable aviation operations platform integrating aircraft, drones,
            logistics, and aerial intelligence into one coordinated multi-state system.
          </p>
        </div>
      </div>
    </section>
  );
}
