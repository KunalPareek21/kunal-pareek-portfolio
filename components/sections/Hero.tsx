import { Github, Linkedin, FolderGit2 } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-4 md:pt-40 md:pb-6 lg:pb-8 px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto flex flex-col justify-center min-h-[70vh]">
      <FadeIn
        className="backdrop-blur-md rounded-xl p-8 md:p-12 flex flex-col justify-center w-full z-10 relative border transition-colors duration-300"
        style={{ background: 'linear-gradient(to bottom right, var(--hero-from), var(--hero-to))', borderColor: 'var(--border)' } as React.CSSProperties}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-none" style={{ color: 'var(--text-primary)' }}>
          Open Source Focused<br/>
          <span className="text-emerald-500">Full Stack Engineer</span>
        </h1>
        <p className="max-w-full text-sm md:text-base mb-8 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          Building WordPress ecosystems, custom plugins, themes, APIs, automation tools, and modern frontend applications with React, Next.js, PHP, Node.js, and TypeScript.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link href="#projects" className="bg-emerald-500 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-tight flex items-center gap-2 hover:bg-emerald-600 transition-colors">
            <FolderGit2 className="w-4 h-4" />
            Projects
          </Link>
          <Link href="https://github.com/KunalPareek21" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-tight flex items-center gap-2 transition-colors border" style={{ borderColor: 'var(--border-hover)', color: 'var(--text-primary)', backgroundColor: 'var(--card-secondary)' }}>
            <Github className="w-4 h-4" />
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/kunal-pareek21/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-tight flex items-center gap-2 transition-colors border" style={{ borderColor: 'var(--border-hover)', color: 'var(--text-primary)', backgroundColor: 'var(--card-secondary)' }}>
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
