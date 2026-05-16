import { Wrench } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { skillGroups } from "@/lib/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="py-4 md:py-6 lg:py-8 px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto scroll-mt-24">
      <FadeIn
        className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-xl p-8 md:p-12"
      >
        <div className="mb-8">
          <h2 className="text-[10px] uppercase tracking-widest text-[#6b7280] font-bold flex items-center gap-2">
            <Wrench className="w-4 h-4 text-emerald-500" />
            Technical Arsenal
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {skillGroups.map((group) => (
            <div key={group.category} className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-widest text-[#6b7280] font-bold">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-2 py-1 bg-[#1A1A1A] border border-[#2A2A2A] text-[#E5E7EB] text-[9px] uppercase tracking-widest font-bold rounded"
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
