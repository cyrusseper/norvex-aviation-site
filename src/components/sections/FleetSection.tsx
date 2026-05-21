import { fleetHighlights } from "@/lib/site";

export function FleetSection() {
  return (
    <section id="fleet" className="bg-[#0a1b2a] py-24 text-white sm:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr]">
        <div className="border border-white/10 bg-white/[0.04] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-200">
            Fleet Strategy
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
            Aircraft and drones working as one operating system.
          </h2>
        </div>
        <div className="space-y-4">
          {fleetHighlights.map((item, index) => (
            <details
              key={item.title}
              className="group border border-white/10 bg-[#06131f] p-6 transition hover:border-emerald-300/40"
            >
              <summary className="flex cursor-pointer list-none items-center gap-5">
              <span className="flex size-12 shrink-0 items-center justify-center border border-emerald-300/40 text-sm font-semibold text-emerald-200">
                {String(index + 1).padStart(2, "0")}
              </span>
                <span className="flex-1 text-xl font-semibold text-white">{item.title}</span>
                <span className="text-2xl leading-none text-emerald-200 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 pl-[68px] text-base leading-8 text-slate-300">{item.body}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
