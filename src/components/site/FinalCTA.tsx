export function FinalCTA() {
  return (
    <section id="contact" className="py-32 lg:py-48 bg-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/5 pointer-events-none" />
      <div className="container-x relative text-center">
        <span className="text-bronze text-[10px] uppercase tracking-[0.7em] block mb-12">
          Begin the Conversation
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-light leading-[1.1] text-ivory max-w-5xl mx-auto">
          Speak with an attorney who understands
          <br />
          <span className="italic font-medium text-bronze">
            the law, the courts, and your language.
          </span>
        </h2>
        <div className="mt-16 lg:mt-20 flex flex-wrap justify-center gap-6">
          <a
            href="mailto:contact@huanglawfl.com"
            className="bg-bronze text-navy px-12 lg:px-16 py-6 lg:py-7 text-[10px] uppercase tracking-[0.35em] font-bold hover:bg-ivory transition-colors duration-500"
          >
            Schedule a Consultation
          </a>
          <a
            href="mailto:contact@huanglawfl.com"
            className="border border-white/20 text-ivory px-12 lg:px-16 py-6 lg:py-7 text-[10px] uppercase tracking-[0.35em] font-medium hover:border-bronze hover:text-bronze transition-colors duration-500"
          >
            Contact the Firm
          </a>
        </div>
      </div>
    </section>
  );
}
