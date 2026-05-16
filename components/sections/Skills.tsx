import { Wrench } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { skillGroups } from "@/lib/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="py-4 md:py-6 lg:py-8 px-4 sm:px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto scroll-mt-24">
      <FadeIn
        className="rounded-xl p-8 md:p-12 border transition-colors duration-300"
        style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' } as React.CSSProperties}
      >
        <div className="mb-8">
          <h2 className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 mb-4" style={{ color: 'var(--text-muted)' }}>
            <Wrench className="w-4 h-4 text-emerald-500" />
            Technical Arsenal
          </h2>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            Technologies and systems I use to build scalable WordPress ecosystems, APIs, automation tooling, and modern frontend applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {skillGroups.map((group) => (
            <div key={group.category} className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--text-muted)' }}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-[9px] uppercase tracking-widest font-bold rounded border"
                    style={{ backgroundColor: 'var(--card-secondary)', borderColor: 'var(--border-hover)', color: 'var(--text-primary)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
