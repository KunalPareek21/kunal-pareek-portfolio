import { Briefcase } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { experienceHighlights, experienceTech } from "@/lib/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-4 md:py-6 lg:py-8 px-4 sm:px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto scroll-mt-24">
      <FadeIn
        className="rounded-xl p-8 md:p-12 border transition-colors duration-300"
        style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' } as React.CSSProperties}
      >
        <h2 className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 mb-8" style={{ color: 'var(--text-muted)' }}>
          <Briefcase className="w-4 h-4 text-emerald-500" />
          Experience
        </h2>

        <div className="relative border-l ml-2" style={{ borderColor: 'var(--border)' }}>
          <div className="relative pl-6 md:pl-8 pb-10 last:pb-0">
            <div className="absolute w-2 h-2 bg-emerald-500 rounded-full -left-[4.5px] top-1"></div>

            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              <div>
                <p className="text-[14px] font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Perimattic</p>
                <p className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--text-muted)' }}>Frontend Engineer → Full Stack Engineer</p>
              </div>
              <p className="text-[10px] italic mt-2 md:mt-0" style={{ color: 'var(--text-muted)' }}>Apr 2021 — Present</p>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {experienceTech.map((tech) => (
                <span key={tech} className="px-2 py-0.5 text-[9px] rounded border uppercase font-bold" style={{ backgroundColor: 'var(--card-secondary)', borderColor: 'var(--border-hover)', color: 'var(--text-primary)' }}>
                  {tech}
                </span>
              ))}
            </div>

            <ul className="space-y-2 mb-6">
              {experienceHighlights.map((highlight) => (
                <li key={highlight} className="text-[12px] flex items-start gap-3" style={{ color: 'var(--text-secondary)' }}>
                  <span className="mt-[2px] leading-none px-1 font-bold" style={{ color: 'var(--text-muted)' }}>•</span>
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="text-[12px] font-medium leading-relaxed p-4 rounded-lg border italic" style={{ color: 'var(--text-primary)', backgroundColor: 'var(--card-secondary)', borderColor: 'var(--border-hover)' }}>
              Currently focused on open-source tooling, scalable frontend architecture, async collaboration, and modern WordPress ecosystem development.
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
