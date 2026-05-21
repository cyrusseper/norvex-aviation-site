const metrics = [
  { label: "Scalability", value: "Repeatable" },
  { label: "Utilization", value: "Asset-led" },
  { label: "Model", value: "Multi-state" },
];

export function InvestorSection() {
  return (
    <section id="partnership" className="bg-white py-24 text-[#06131f] sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 border border-slate-200 bg-slate-50 p-8 sm:p-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-700">
              Investors & Partnerships
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
              A platform approach to aviation operations.
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-slate-600">
              Norvex Aviation is structured around scalability, utilization, and a multi-state operational model
              that can align aircraft, drone systems, pilots, field teams, and customer demand across complementary
              markets.
            </p>
          </div>
          <div className="grid gap-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  {metric.label}
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#06131f]">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
