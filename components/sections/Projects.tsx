import { ExternalLink, Github, Code2 } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { projects } from "@/lib/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="py-4 md:py-6 lg:py-8 px-4 sm:px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto scroll-mt-24">
      <FadeIn className="mb-8">
        <h2 className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
          <Code2 className="w-4 h-4 text-emerald-500" />
          Featured Projects
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <FadeIn
            key={project.title}
            delay={idx * 0.05}
            className="rounded-xl flex flex-col h-full transition-colors p-6 border"
            style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' } as React.CSSProperties}
          >
            <h3 className="text-[14px] font-bold uppercase tracking-tight mb-2" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
            <p className="text-[12px] mb-6 flex-grow leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {project.description}
            </p>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 text-[9px] rounded uppercase tracking-widest font-bold border" style={{ backgroundColor: 'var(--card-secondary)', borderColor: 'var(--border-hover)', color: 'var(--text-primary)' }}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <Link href="https://github.com/KunalPareek21" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-emerald-500" style={{ color: 'var(--text-muted)' }}>
                  <Github className="w-3 h-3" />
                  GitHub
                </Link>
                <Link href="mailto:kunalpareek56@gmail.com?subject=Project%20case%20study%20request" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-emerald-500" style={{ color: 'var(--text-muted)' }}>
                  <ExternalLink className="w-3 h-3" />
                  Details
                </Link>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
