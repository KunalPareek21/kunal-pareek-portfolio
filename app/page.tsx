import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { OpenSource } from "@/components/sections/OpenSource";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Blog } from "@/components/sections/Blog";
import { Writing } from "@/components/sections/Writing";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

type HomeProps = {
  searchParams: Promise<{
    highlight?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { highlight } = await searchParams;

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <OpenSource highlightSlug={highlight} />
      <Experience />
      <Projects />
      <Blog />
      <Writing />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
