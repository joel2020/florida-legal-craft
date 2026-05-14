const credentials = [
  { primary: "UNIVERSITY of MIAMI", secondary: "School of Law" },
  { primary: "UNIVERSITY of CONNECTICUT", secondary: "B.A." },
  { primary: "FLORIDA SUPREME COURT", secondary: "Certified Mediator" },
  { primary: "ADMITTED TO PRACTICE IN", secondary: "Middle & Southern District Courts of Florida" },
  { primary: "FLUENT IN", secondary: "English, Mandarin & Spanish" },
];

export function CredentialBar() {
  return (
    <section className="bg-ivory border-b border-soft-border">
      <div className="container-x py-8">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 divide-x divide-soft-border">
          {credentials.map((c, i) => (
            <li
              key={c.primary}
              className={`px-4 text-center ${i === 0 ? "lg:pl-0" : ""} ${
                i === credentials.length - 1 ? "lg:pr-0" : ""
              }`}
            >
              <div className="text-[0.65rem] tracking-[0.18em] uppercase font-semibold text-foreground/85 leading-tight">
                {c.primary}
              </div>
              <div className="font-serif italic text-sm text-muted-foreground mt-1.5">
                {c.secondary}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
