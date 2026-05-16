import { ExternalLink, Github, Code2 } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { projects } from "@/lib/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="py-4 md:py-6 lg:py-8 px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto scroll-mt-24">
      <FadeIn className="mb-8">
        <h2 className="text-[10px] uppercase tracking-widest text-[#6b7280] font-bold flex items-center gap-2">
          <Code2 className="w-4 h-4 text-emerald-500" />
          Featured Projects
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <FadeIn
            key={project.title}
            delay={idx * 0.05}
            className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-xl flex flex-col h-full hover:border-[#2A2A2A] transition-colors p-6"
          >
            <h3 className="text-[14px] font-bold uppercase tracking-tight text-white mb-2">{project.title}</h3>
            <p className="text-[12px] text-gray-400 mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>
            
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 bg-[#1A1A1A] border border-[#2A2A2A] text-[#E5E7EB] font-bold text-[9px] rounded uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 pt-4">
                <Link href="https://github.com/KunalPareek21" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
                  <Github className="w-3 h-3" />
                  GitHub
                </Link>
                <Link href="mailto:kunalpareek56@gmail.com?subject=Project%20case%20study%20request" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
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
