import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Practice Areas", href: "#practice-areas", hasDropdown: true },
  { label: "About", href: "#about" },
  { label: "Mediation", href: "#mediation" },
  { label: "Results & Experience", href: "#results" },
  { label: "Resources", href: "#resources", hasDropdown: true },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-navy text-ivory border-b border-white/5">
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="font-serif text-2xl leading-none">
            <span className="text-bronze">H</span>
            <span className="text-ivory">L</span>
          </div>
          <div className="hidden sm:block border-l border-white/15 pl-3">
            <div className="font-serif text-lg leading-tight tracking-wide">HUANG LAW</div>
            <div className="text-[0.55rem] tracking-[0.35em] text-bronze text-center -mt-0.5">P.A.</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[0.7rem] tracking-[0.18em] uppercase font-medium text-ivory/85 hover:text-bronze transition-colors flex items-center gap-1"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex border border-bronze text-bronze px-5 py-3 text-[0.7rem] tracking-[0.2em] uppercase font-medium hover:bg-bronze hover:text-white transition-colors"
        >
          Schedule a Consultation
        </a>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-ivory"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy">
          <div className="container-x py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.15em] uppercase text-ivory/90 hover:text-bronze"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center border border-bronze text-bronze px-5 py-3 text-xs tracking-[0.2em] uppercase"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
