import { PenLine, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { noteTopics } from "@/lib/data/portfolio";

export function Writing() {
  return (
    <section id="notes" className="py-4 md:py-6 lg:py-8 px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto scroll-mt-24">
      <FadeIn
        className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-xl p-8 md:p-12"
      >
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
          <div>
            <h2 className="text-[10px] uppercase tracking-widest text-[#6b7280] font-bold flex items-center gap-2 mb-6">
              <PenLine className="w-4 h-4 text-emerald-500" />
              Developer Notes
            </h2>
            <p className="text-[12px] text-gray-400 leading-relaxed mb-6">
              Thoughts, explorations, and documented solutions on building modern web systems.
            </p>
            <Link href="#notes" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-500 hover:text-white transition-colors">
              View all notes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-[#6b7280] font-bold mb-6">
              Note Topics
            </h3>
            <div className="flex flex-wrap gap-3">
              {noteTopics.map((topic) => (
                <div 
                  key={topic.name}
                  className="flex items-center gap-3 px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg hover:border-[#3A3A3A] transition-colors cursor-pointer group"
                >
                  <span className="text-[11px] font-bold uppercase text-white tracking-widest group-hover:text-emerald-400 transition-colors">{topic.name}</span>
                  <span className="text-gray-600 text-[10px] font-mono">{topic.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
