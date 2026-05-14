const credentials = [
  { eyebrow: "Alumni", label: "University of Miami", italic: "School of Law" },
  { eyebrow: "Certified", label: "Florida Supreme Court", italic: "Mediator" },
  { eyebrow: "Admitted", label: "Middle & Southern", italic: "District Courts" },
  { eyebrow: "Multilingual", label: "English, Mandarin", italic: "& Spanish" },
  { eyebrow: "Licensed", label: "Florida", italic: "Attorney at Law" },
];

export function CredentialBar() {
  return (
    <section className="bg-[oklch(0.96_0.012_85)] border-b border-foreground/5">
      <div className="container-x py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-10 gap-y-10">
          {credentials.map((c) => (
            <div key={c.eyebrow} className="space-y-2">
              <div className="text-[9px] uppercase tracking-[0.4em] font-bold text-foreground/30">
                {c.eyebrow}
              </div>
              <div className="font-serif text-lg text-foreground/80 leading-snug">
                {c.label} <span className="italic">{c.italic}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
