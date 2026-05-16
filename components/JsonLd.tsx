import { SITE_URL } from "@/lib/data/portfolio";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kunal Pareek",
  url: SITE_URL,
  jobTitle: "Full Stack Engineer",
  knowsAbout: [
    "WordPress",
    "React",
    "Next.js",
    "TypeScript",
    "PHP",
    "Node.js",
    "Open Source",
  ],
  sameAs: [
    "https://github.com/KunalPareek21",
    "https://www.linkedin.com/in/kunal-pareek21/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kunal Pareek Portfolio",
  url: SITE_URL,
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([personSchema, websiteSchema]).replace(/</g, "\\u003c"),
      }}
    />
  );
}
