const points = [
  { t: "Direct Attorney Access", d: "Work directly with Mr. Huang at every stage of your matter." },
  { t: "State & Federal Court Experience", d: "Practiced across Florida's state and federal trial courts." },
  { t: "Certified Mediation Perspective", d: "A negotiator's mindset informs every litigation strategy." },
  { t: "Multilingual Legal Guidance", d: "Counsel delivered in English, Mandarin, and Spanish." },
  { t: "Resolution-Focused Strategy", d: "Practical, cost-effective solutions tailored to your goals." },
  { t: "Discreet, Professional Representation", d: "Confidentiality and discretion at the core of every engagement." },
];

export function WhyChoose() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="eyebrow">Why Clients Choose Huang Law</p>
          <h2 className="font-serif text-3xl lg:text-[2.4rem] mt-3">
            A boutique standard of representation.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {points.map((p, i) => (
            <div key={p.t}>
              <div className="text-bronze text-xs tracking-[0.2em] mb-3">
                0{i + 1}
              </div>
              <h3 className="font-serif text-xl mb-2">{p.t}</h3>
              <div className="w-8 h-px bg-bronze mb-3" />
              <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
