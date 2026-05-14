const langs = [
  { word: "English", sub: "Native fluency" },
  { word: "中文", sub: "Mandarin" },
  { word: "Español", sub: "Spanish" },
];

export function Multilingual() {
  return (
    <section className="bg-ivory py-20 lg:py-28 border-b border-soft-border">
      <div className="container-x grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
        <div>
          <p className="eyebrow">Multilingual Counsel</p>
          <h2 className="font-serif text-3xl lg:text-[2.4rem] mt-3 leading-tight">
            Legal Guidance in English, Mandarin, and Spanish.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
            Huang Law provides clear, strategic legal counsel for individuals, families,
            entrepreneurs, and businesses across Florida's diverse communities.
          </p>
        </div>

        <div className="grid grid-cols-3 border-y border-soft-border">
          {langs.map((l, i) => (
            <div
              key={l.word}
              className={`text-center py-10 ${i !== 0 ? "border-l border-soft-border" : ""}`}
            >
              <div className="font-serif text-3xl lg:text-4xl text-navy">{l.word}</div>
              <div className="eyebrow mt-3">{l.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
