import { BookOpen, Share2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { openSourceCategories } from "@/lib/data/portfolio";

export function OpenSource() {
  return (
    <section id="open-source" className="py-4 md:py-6 lg:py-8 px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto scroll-mt-24">
      <FadeIn className="mb-8">
        <h2 className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 mb-4" style={{ color: 'var(--text-muted)' }}>
          <Share2 className="w-4 h-4 text-emerald-500" />
          Open Source &amp; Community
        </h2>
        <p className="text-sm leading-relaxed max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
          I strongly believe in the open web. My ecosystem contributions span from developing functional WordPress plugins and robust themes to sharing developer tooling and architectural experiments in public.
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
            <div className="space-y-4 text-[11px] uppercase tracking-widest leading-relaxed font-medium" style={{ color: 'var(--text-muted)' }}>
              <p>
                My philosophy is grounded in collaboration, the open web, and the power of async culture. Learning in public isn&apos;t just about showing code; it&apos;s about documenting the &quot;why&quot; behind technical decisions.
              </p>
              <p>
                I focus on building useful tools with long-term maintainability in mind. Whether it&apos;s a utility hook for a WordPress site or a sprawling Next.js dashboard, the code should be understandable by the next developer who touches it—which might be me six months from now.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
