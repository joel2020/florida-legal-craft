import heroImg from "@/assets/mr-huang.png";

export function Hero() {
  return (
    <section className="relative bg-navy text-ivory">
      <div className="container-x grid lg:grid-cols-2 gap-16 lg:gap-24 items-center pt-20 pb-24 lg:pt-28 lg:pb-32 min-h-[calc(100vh-5rem)]">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-4 mb-10">
            <span className="h-px w-8 bg-bronze" />
            <span className="text-bronze text-[10px] uppercase tracking-[0.5em] font-semibold">
              Miami · Florida · Global
            </span>
          </div>
          <h1 className="font-serif font-light text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.05] text-ivory">
            Strategic Legal{" "}
            <span className="italic text-bronze font-medium">Counsel.</span>
            <br />
            Trusted Advocacy.
          </h1>
          <p className="mt-10 text-ivory/45 text-lg lg:text-xl font-light leading-relaxed max-w-md">
            Representing clients with precision, discretion, and multilingual legal insight
            across Florida state and federal courts.
          </p>
          <div className="mt-14 flex flex-wrap gap-10 items-center">
            <a
              href="#contact"
              className="bg-bronze text-navy px-12 py-6 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-ivory transition-colors duration-500"
            >
              Schedule Consultation
            </a>
            <a
              href="#about"
              className="group flex items-center gap-4 text-ivory/70 text-[10px] uppercase tracking-[0.4em] hover:text-bronze transition-colors"
            >
              View Credentials
              <span className="block w-10 h-px bg-ivory/20 group-hover:bg-bronze transition-colors" />
            </a>
          </div>
        </div>

        <div className="relative justify-self-center lg:justify-self-end w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] bg-midnight overflow-hidden z-10">
            <img
              src={heroImg}
              alt="Mr. Huang, Florida attorney and Supreme Court Certified Mediator"
              className="w-full h-full object-cover object-top grayscale"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 border-l border-b border-bronze/30 pointer-events-none" />
          <div className="absolute top-1/2 -right-12 w-24 h-px bg-bronze/40 pointer-events-none hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
