import { Briefcase } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { experienceHighlights, experienceTech } from "@/lib/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-4 md:py-6 lg:py-8 px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto scroll-mt-24">
      <FadeIn
        className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-xl p-8 md:p-12"
      >
        <h2 className="text-[10px] uppercase tracking-widest text-[#6b7280] font-bold flex items-center gap-2 mb-8">
          <Briefcase className="w-4 h-4 text-emerald-500" />
          Experience
        </h2>

        <div className="relative border-l border-[#1F1F1F] ml-2">
          {/* Timeline Item */}
          <div className="relative pl-6 md:pl-8 pb-10 last:pb-0">
            <div className="absolute w-2 h-2 bg-emerald-500 rounded-full -left-[4.5px] top-1"></div>
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              <div>
                <p className="text-[14px] font-bold text-white mb-1">Perimattic</p>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest font-medium">Frontend & Full Stack Developer</p>
              </div>
              <p className="text-[10px] text-gray-500 italic mt-2 md:mt-0">2021 — Present</p>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {experienceTech.map((tech) => (
                <span key={tech} className="px-2 py-0.5 bg-[#1A1A1A] text-[9px] rounded border border-[#2A2A2A] uppercase font-bold text-[#E5E7EB]">
                  {tech}
                </span>
              ))}
            </div>

            <ul className="space-y-2">
              {experienceHighlights.map((highlight) => (
                <li key={highlight} className="text-[#D1D5DB] text-[12px] flex items-start gap-3">
                  <span className="text-gray-600 mt-[2px] leading-none px-1 font-bold">•</span>
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
