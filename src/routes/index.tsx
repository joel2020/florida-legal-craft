import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { CredentialBar } from "@/components/site/CredentialBar";
import { PracticeAreas } from "@/components/site/PracticeAreas";
import { About } from "@/components/site/About";
import { Mediation } from "@/components/site/Mediation";
import { Multilingual } from "@/components/site/Multilingual";
import { WhyChoose } from "@/components/site/WhyChoose";
import { FinalCTA } from "@/components/site/FinalCTA";
import { SiteFooter } from "@/components/site/SiteFooter";

const title = "Huang Law, P.A. | Florida Attorney & Certified Mediator";
const description =
  "Huang Law, P.A. provides strategic legal counsel, mediation, and multilingual representation across Florida. Led by Mr. Huang, a Florida attorney and Supreme Court Certified Mediator fluent in English, Mandarin, and Spanish.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Florida attorney, Florida mediator, certified mediator Florida, Huang Law, multilingual attorney Florida, Mandarin speaking attorney Florida, Spanish speaking attorney Florida, Miami attorney, Florida litigation attorney",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Huang Law, P.A.",
          url: "https://huanglawfl.com",
          areaServed: "Florida",
          description,
          founder: {
            "@type": "Person",
            name: "Mr. Huang",
            jobTitle: "Attorney & Florida Supreme Court Certified Mediator",
            alumniOf: [
              { "@type": "CollegeOrUniversity", name: "University of Miami School of Law" },
              { "@type": "CollegeOrUniversity", name: "University of Connecticut" },
            ],
            knowsLanguage: ["English", "Mandarin", "Spanish"],
          },
          knowsLanguage: ["English", "Mandarin", "Spanish"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <CredentialBar />
        <PracticeAreas />
        <About />
        <Mediation />
        <Multilingual />
        <WhyChoose />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
