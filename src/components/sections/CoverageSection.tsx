import { states } from "@/lib/site";

export function CoverageSection() {
  return (
    <section id="coverage" className="bg-white py-24 text-[#06131f] sm:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-700">
            Multi-State Coverage
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
            Regional reach with disciplined operating lanes.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {states.map((state) => (
            <div key={state} className="border border-slate-200 bg-slate-50 p-8">
              <p className="text-3xl font-semibold tracking-[-0.03em]">{state}</p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Targeted coverage planning for seasonal demand, crew positioning, and aircraft utilization.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
