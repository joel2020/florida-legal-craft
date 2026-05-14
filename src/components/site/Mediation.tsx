import { ArrowRight } from "lucide-react";

const services = [
  { title: "Business & Commercial Disputes", desc: "Resolution-focused mediation for partnership, contract, and commercial conflicts." },
  { title: "Contract & Real Estate Disputes", desc: "Confidential, structured mediation for property and contract disagreements." },
  { title: "Civil & General Litigation Matters", desc: "Neutral, court-recognized mediation across a wide range of civil matters." },
];

export function Mediation() {
  return (
    <section id="mediation" className="bg-navy text-ivory py-20 lg:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Mediation</p>
          <h2 className="font-serif text-3xl lg:text-[2.5rem] mt-3 leading-tight">
            Certified Mediation for Complex Disputes
          </h2>
          <p className="mt-5 text-ivory/75 leading-relaxed">
            As a Florida Supreme Court Certified Mediator, Mr. Huang helps parties resolve
            disputes efficiently, confidentially, and cost-effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-white/10 p-7 hover:border-bronze transition-colors group"
            >
              <h3 className="font-serif text-xl text-ivory">{s.title}</h3>
              <div className="w-8 h-px bg-bronze mt-4 mb-5 transition-all group-hover:w-14" />
              <p className="text-sm text-ivory/65 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a href="#contact" className="btn-primary hover:bg-bronze-soft group">
            Learn More About Mediation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
