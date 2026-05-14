// NOTE: Practice areas are placeholders — confirm with attorney before publishing.
const areas = [
  { num: "01", title: "Business & Civil Litigation", desc: "Strategic advocacy in complex commercial disputes across Florida state and federal courts." },
  { num: "02", title: "Mediation & Dispute Resolution", desc: "Certified neutral mediation providing efficient, confidential paths to conflict resolution." },
  { num: "03", title: "Real Estate & Contract Matters", desc: "Meticulous counsel on high-value transactions, contract drafting, and property disputes." },
  { num: "04", title: "Immigration & Cross-Border", desc: "Multilingual guidance for international entities and individuals navigating U.S. regulations." },
  { num: "05", title: "Personal & Business Counsel", desc: "Discreet ongoing advisory services for closely-held businesses and private individuals." },
];

export function PracticeAreas() {
  return (
    <section id="practice-areas" className="bg-white py-32 lg:py-40">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row justify-between items-baseline mb-20 lg:mb-32 gap-10">
          <div className="max-w-xl">
            <span className="text-bronze text-[10px] uppercase tracking-[0.6em] block mb-8">
              Practice Expertise
            </span>
            <h2 className="font-serif text-5xl lg:text-7xl font-light leading-[1.05]">
              Focused Legal Solutions.
              <br />
              <span className="italic font-medium">Practical Results.</span>
            </h2>
          </div>
          <p className="text-foreground/40 max-w-xs text-sm font-light leading-relaxed">
            Tailored legal representation combining deep technical knowledge with a commitment
            to strategic resolution.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-foreground/5 border border-foreground/5">
          {areas.map((a) => (
            <article
              key={a.num}
              className="group bg-white p-10 lg:p-14 transition-colors hover:bg-[oklch(0.985_0.012_85)] relative"
            >
              <div className="text-bronze text-[10px] font-bold tracking-[0.5em] mb-16">
                {a.num}
              </div>
              <h3 className="font-serif text-2xl mb-8 leading-snug min-h-[4rem]">{a.title}</h3>
              <p className="text-sm text-foreground/50 leading-relaxed font-light mb-10">
                {a.desc}
              </p>
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-bronze/40 transition-all duration-700" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
