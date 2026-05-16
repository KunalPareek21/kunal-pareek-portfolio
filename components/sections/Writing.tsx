import { PenLine, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { noteTopics } from "@/lib/data/portfolio";

export function Writing() {
  return (
    <section id="notes" className="py-4 md:py-6 lg:py-8 px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto scroll-mt-24">
      <FadeIn
        className="rounded-xl p-8 md:p-12 border transition-colors duration-300"
        style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' } as React.CSSProperties}
      >
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
          <div>
            <h2 className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 mb-6" style={{ color: 'var(--text-muted)' }}>
              <PenLine className="w-4 h-4 text-emerald-500" />
              Developer Notes
            </h2>
            <p className="text-[12px] leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              Engineering notes, open source work, architecture decisions, frontend systems, WordPress development, API integrations, and async collaboration learnings from real production work.
            </p>
            <Link
              href="https://dev.to/kunal_pareek"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-500 hover:text-emerald-400 transition-colors"
            >
              View all notes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-widest font-bold mb-6" style={{ color: 'var(--text-muted)' }}>
              Note Topics
            </h3>
            <div className="flex flex-wrap gap-3">
              {noteTopics.map((topic) => (
                <Link
                  key={topic.name}
                  href={topic.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer group border border-[var(--border-hover)] hover:-translate-y-0.5 hover:border-emerald-500/60 hover:shadow-[0_0_18px_rgba(16,185,129,0.12)]"
                  style={{ backgroundColor: 'var(--card-secondary)' }}
                >
                  <span className="text-[11px] font-bold uppercase tracking-widest group-hover:text-emerald-500 transition-colors" style={{ color: 'var(--text-primary)' }}>{topic.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
