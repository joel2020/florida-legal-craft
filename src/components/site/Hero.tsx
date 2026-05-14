import heroImg from "@/assets/mr-huang.png";
import { Shield, Landmark, Award, Globe, ArrowRight } from "lucide-react";

const badges = [
  { icon: Shield, label: "Florida\nLicensed Attorney" },
  { icon: Landmark, label: "Federal Court\nAdmissions" },
  { icon: Award, label: "Certified\nMediator" },
  { icon: Globe, label: "English • Mandarin • Spanish" },
];

export function Hero() {
  return (
    <section className="relative bg-navy text-ivory overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, rgba(184,135,59,0.5), transparent 60%)",
        }}
      />
      <div className="container-x relative grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center pt-16 lg:pt-20 pb-16 lg:pb-24 min-h-[640px]">
        <div className="max-w-xl">
          <p className="eyebrow mb-6">Miami Law. Florida Focus. Global Perspective.</p>
          <h1 className="font-serif text-[2.6rem] leading-[1.1] sm:text-5xl lg:text-[3.6rem] lg:leading-[1.08] text-ivory">
            Strategic Legal Counsel.
            <br />
            <span className="block mt-2">
              Trusted Advocacy Across Florida<span className="text-bronze">.</span>
            </span>
          </h1>
          <p className="mt-6 text-ivory/75 text-base lg:text-[1.05rem] leading-relaxed max-w-lg">
            Representing clients with precision, discretion, and multilingual legal insight
            across Florida state and federal courts.
          </p>

          <ul className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-xl">
            {badges.map((b) => (
              <li key={b.label} className="flex items-start gap-2.5">
                <b.icon className="w-5 h-5 text-bronze shrink-0 mt-0.5" strokeWidth={1.4} />
                <span className="text-[0.62rem] tracking-[0.16em] uppercase leading-[1.4] text-ivory/85 whitespace-pre-line">
                  {b.label}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary hover:bg-bronze-soft group">
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#about" className="btn-outline-light hover:bg-bronze hover:text-white">
              View Credentials
            </a>
          </div>
        </div>

        <div className="relative justify-self-center lg:justify-self-end w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[600px] w-full">
            <img
              src={heroImg}
              alt="Mr. Huang, Florida attorney and Supreme Court Certified Mediator"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
