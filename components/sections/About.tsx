import { Terminal } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { technicalStack } from "@/lib/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-4 md:py-6 lg:py-8 px-4 sm:px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto scroll-mt-24">
      <FadeIn
        className="rounded-xl p-8 md:p-12 border transition-colors duration-300"
        style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' } as React.CSSProperties}
      >
        <div className="mb-8">
          <h2 className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
            <Terminal className="w-4 h-4 text-emerald-500" />
            About
          </h2>
        </div>

        <div className="space-y-6 text-sm leading-relaxed max-w-full" style={{ color: 'var(--text-secondary)' }}>
          <p>
            I build scalable WordPress ecosystems, open-source plugins, internal tooling, and modern frontend systems focused on performance, developer experience, and maintainability.
          </p>
          <p>
            My journey started with frontend development and evolved into building custom plugins, APIs, automation systems, dashboards, and full-stack applications used in real-world business environments.
          </p>
          <p>
            Working remotely with globally distributed teams, particularly US-based companies, has shaped how I approach software engineering. I thrive in asynchronous environments where clear communication, ownership, documentation, and thoughtful collaboration are essential.
          </p>
          <p>
            I’m especially interested in open source, developer tooling, automation systems, SaaS architecture, WordPress extensibility, and modern frontend engineering with React and Next.js.
          </p>
          <p
            className="font-medium p-6 rounded-lg border italic"
            style={{ color: 'var(--text-primary)', backgroundColor: 'var(--card-secondary)', borderColor: 'var(--border-hover)' }}
          >
            &quot;I enjoy building developer-focused tools that simplify complex workflows, improve maintainability, and create better user experiences.&quot;
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-[10px] uppercase tracking-widest mb-4 font-bold" style={{ color: 'var(--text-muted)' }}>Technical Stack</h2>
          <div className="flex flex-wrap gap-2">
            {technicalStack.map(tech => (
              <span key={tech} className="px-2 py-1 text-[10px] rounded border uppercase tracking-widest font-bold" style={{ backgroundColor: 'var(--card-secondary)', borderColor: 'var(--border-hover)', color: 'var(--text-primary)' }}>{tech}</span>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
