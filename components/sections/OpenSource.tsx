import { BookOpen, Share2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { openSourceCategories } from "@/lib/data/portfolio";

export function OpenSource() {
  return (
    <section id="open-source" className="py-4 md:py-6 lg:py-8 px-4 sm:px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto scroll-mt-24">
      <FadeIn className="mb-8">
        <h2 className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 mb-4" style={{ color: 'var(--text-muted)' }}>
          <Share2 className="w-4 h-4 text-emerald-500" />
          Open Source &amp; Community
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          I strongly believe in the open web and public engineering. My work spans open-source WordPress plugins, reusable tooling, internal systems, automation workflows, and frontend architecture experiments built for real-world scalability and maintainability.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-6 mb-8 md:mb-12 lg:mb-16">
        {openSourceCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <FadeIn
              key={cat.title}
              delay={idx * 0.05}
              className="rounded-xl p-6 border transition-colors duration-300"
              style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' } as React.CSSProperties}
            >
              <h3 className="text-[10px] uppercase tracking-widest text-emerald-500 mb-6 font-bold flex items-center gap-2">
                <Icon className="w-5 h-5" style={{ color: 'var(--text-muted)' }} />
                {cat.title}
              </h3>
              <ul className="space-y-4">
                {cat.items.map((item) => (
                  <li key={item} className="text-[11px] font-bold uppercase tracking-widest flex items-start gap-2" style={{ color: 'var(--text-primary)' }}>
                    <span style={{ color: 'var(--text-muted)' }} className="mt-[1px]">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn
        delay={0.15}
        className="rounded-xl p-8 md:p-12 border transition-colors duration-300"
        style={{ backgroundColor: 'var(--card-secondary)', borderColor: 'var(--border-hover)' } as React.CSSProperties}
      >
        <div className="flex items-start gap-4">
          <BookOpen className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-[11px] font-bold uppercase mb-4" style={{ color: 'var(--text-primary)' }}>Open Source Philosophy</h3>
            <div className="space-y-4 text-[12px] leading-relaxed font-medium" style={{ color: 'var(--text-muted)' }}>
              <p>
                My approach to engineering is centered around building maintainable software that solves practical problems. Over the past few years, I&apos;ve worked across WordPress ecosystems, frontend systems, internal tooling, and API-driven applications while collaborating remotely with distributed teams.
              </p>
              <p>
                I enjoy building tools that improve workflows, simplify repetitive tasks, and create better developer experiences. A large part of my work involves custom WordPress development, scalable frontend architecture with React and Next.js, and integrating external services into production systems.
              </p>
              <p>
                I value clean communication, readable code, and long-term maintainability over unnecessary complexity. Whether I&apos;m developing a utility plugin, an internal dashboard, or a full-stack application, I focus on building systems that remain understandable and useful months after they&apos;re written.
              </p>
              <p>
                Outside of client work, I&apos;m actively improving my open-source presence by building public plugins, reusable tooling, and engineering-focused side projects while continuing to learn modern backend and frontend technologies.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
