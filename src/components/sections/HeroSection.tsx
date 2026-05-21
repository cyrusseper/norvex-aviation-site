import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#06131f] pt-20 text-white">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(125deg,rgba(6,19,31,0.92),rgba(6,19,31,0.64)_45%,rgba(10,31,44,0.86)),url('/aviation-hero.svg')] bg-cover bg-center" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-52 bg-gradient-to-t from-[#06131f] to-transparent" />
      <div className="mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.38em] text-emerald-200">
            Multi-state aerial operations
          </p>
          <h1 className="mt-8 max-w-5xl text-6xl font-semibold uppercase leading-[0.9] tracking-[-0.03em] text-white sm:text-7xl lg:text-8xl">
            NORVEX AVIATION
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-200 sm:text-2xl">
            Multi-State Aviation Operations for Aerial Application, Logistics, Drones, and Aerial Intelligence.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#services"
              className="inline-flex h-14 items-center justify-center bg-white px-7 text-sm font-bold uppercase tracking-[0.18em] text-[#06131f] transition hover:bg-emerald-100"
            >
              Explore Operations
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-14 items-center justify-center border border-white/30 px-7 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-emerald-300 hover:text-emerald-100"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border border-white/15 bg-white/[0.06] p-5 shadow-2xl shadow-black/30 backdrop-blur-md">
          <div className="aspect-[4/5] border border-white/10 bg-[#0b1f2e]/80 p-6">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-200">
                  Operations Profile
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {["Aerial Application", "Logistics", "Drones", "Mapping"].map((item) => (
                    <div key={item} className="border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-sm font-semibold text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="text-4xl font-semibold tracking-[-0.03em] text-white">4</p>
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-300">
                  Initial operating states
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
