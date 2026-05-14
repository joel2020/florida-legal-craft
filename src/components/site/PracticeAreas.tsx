// NOTE: Practice areas are placeholders — confirm with attorney before publishing.
const areas = [
  { num: "01", title: "Business & Civil Litigation", desc: "Strategic representation in complex commercial and civil disputes across Florida courts." },
  { num: "02", title: "Mediation & Dispute Resolution", desc: "Court-certified mediation focused on efficient, confidential resolutions." },
  { num: "03", title: "Real Estate & Contract Matters", desc: "Counsel on transactions, contract drafting, and real estate disputes." },
  { num: "04", title: "Immigration & Cross-Border Legal Support", desc: "Multilingual guidance for international clients and cross-border matters." },
  { num: "05", title: "Personal & Business Legal Counsel", desc: "Trusted ongoing counsel for individuals, families, and closely-held businesses." },
];

export function PracticeAreas() {
  return (
    <section id="practice-areas" className="bg-ivory py-20 lg:py-28">
      <div className="container-x">
        <div className="text-center mb-14">
          <p className="eyebrow">Practice Areas</p>
          <h2 className="font-serif text-3xl lg:text-[2.5rem] mt-3">
            Focused Legal Solutions. Practical Results.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {areas.map((a) => (
            <article
              key={a.num}
              className="group bg-white border border-soft-border p-7 transition-all hover:border-bronze hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(7,17,31,0.18)]"
            >
              <div className="text-bronze text-sm font-medium tracking-wider mb-4">{a.num}</div>
              <h3 className="font-serif text-xl leading-snug mb-3 min-h-[3.5rem]">{a.title}</h3>
              <div className="w-8 h-px bg-bronze mb-4 transition-all group-hover:w-14" />
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
