import { services } from "@/lib/site";

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#06131f] py-24 text-white sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-200">
            Services
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
            Built for demanding aerial missions.
          </h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="min-h-72 bg-[#0a1b2a] p-7">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-5 text-base leading-8 text-slate-300">{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
