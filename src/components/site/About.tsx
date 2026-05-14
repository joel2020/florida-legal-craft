import bioImg from "@/assets/mr-huang.png";
import { Check, ArrowRight } from "lucide-react";

const credentials = [
  "J.D., University of Miami School of Law",
  "B.A., University of Connecticut",
  "Licensed to practice law throughout the State of Florida",
  "Admitted in the Middle & Southern District Courts of Florida",
  "Florida Supreme Court Certified Mediator",
  "Fluent in English, Mandarin, and Spanish",
];

export function About() {
  return (
    <section id="about" className="bg-[oklch(0.96_0.01_80)]">
      <div className="container-x grid lg:grid-cols-2 gap-0 lg:gap-12 items-stretch">
        <div className="relative h-[420px] lg:h-auto lg:min-h-[560px] -mx-6 lg:mx-0 lg:-ml-10">
          <img
            src={bioImg}
            alt="Portrait of Mr. Huang at the firm's offices"
            className="absolute inset-0 w-full h-full object-cover object-top grayscale-[15%]"
          />
        </div>
        <div className="py-14 lg:py-20 lg:pr-6">
          <p className="eyebrow">About Mr. Huang</p>
          <h2 className="font-serif text-3xl lg:text-[2.4rem] leading-tight mt-3">
            Experienced. Multilingual. Solutions-Driven.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Mr. Huang is a Florida attorney and Florida Supreme Court Certified Mediator with a
            practice focused on litigation, dispute resolution, and strategic legal counsel. He
            is committed to delivering practical, cost-effective solutions tailored to each
            client's unique goals.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-y-3 gap-x-6">
            {credentials.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-sm">
                <Check className="w-4 h-4 text-bronze mt-0.5 shrink-0" strokeWidth={2.5} />
                <span className="text-foreground/85">{c}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-2 bg-navy text-ivory px-6 py-3.5 text-[0.7rem] tracking-[0.2em] uppercase font-medium hover:bg-midnight transition-colors group"
          >
            Learn More About Mr. Huang
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
