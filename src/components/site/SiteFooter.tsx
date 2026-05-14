const cols = [
  {
    title: "Firm",
    links: ["About", "Mediation", "Results & Experience", "Resources", "Contact"],
  },
  {
    title: "Practice Areas",
    links: [
      "Business & Civil Litigation",
      "Mediation & Dispute Resolution",
      "Real Estate & Contracts",
      "Immigration",
      "Personal & Business Counsel",
    ],
  },
  {
    title: "Contact",
    links: ["Miami, Florida", "contact@huanglawfl.com", "(000) 000-0000"],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-ivory pt-16 pb-8 border-t border-white/5">
      <div className="container-x">
        <div className="grid lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3">
              <div className="font-serif text-2xl">
                <span className="text-bronze">H</span>L
              </div>
              <div>
                <div className="font-serif text-lg tracking-wide">HUANG LAW</div>
                <div className="text-[0.55rem] tracking-[0.35em] text-bronze -mt-0.5">P.A.</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-ivory/65 leading-relaxed max-w-xs">
              Strategic legal counsel, mediation, and multilingual representation across Florida.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[0.7rem] tracking-[0.22em] uppercase text-bronze mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-ivory/75 hover:text-bronze transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 space-y-4 text-xs text-ivory/55 leading-relaxed">
          <p>
            <strong className="text-ivory/75">Attorney Advertising.</strong> The information on
            this website is for general informational purposes only and does not constitute
            legal advice. Viewing this website or contacting Huang Law, P.A. does not create an
            attorney-client relationship.
          </p>
          <div className="flex flex-wrap justify-between gap-4 pt-2">
            <p>© {new Date().getFullYear()} Huang Law, P.A. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-bronze">Privacy Policy</a>
              <a href="#" className="hover:text-bronze">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
