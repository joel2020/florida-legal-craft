import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="bg-midnight text-ivory py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 70% 30%, rgba(184,135,59,0.6), transparent 60%)",
        }}
      />
      <div className="container-x relative text-center max-w-3xl">
        <p className="eyebrow">Begin the Conversation</p>
        <h2 className="font-serif text-3xl lg:text-[2.6rem] leading-[1.15] mt-4">
          Speak with an attorney who understands the law, the courts, and your language<span className="text-bronze">.</span>
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="mailto:contact@huanglawfl.com" className="btn-primary hover:bg-bronze-soft group">
            Schedule a Consultation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="mailto:contact@huanglawfl.com" className="btn-outline-light hover:bg-bronze hover:text-white">
            Contact the Firm
          </a>
        </div>
      </div>
    </section>
  );
}
