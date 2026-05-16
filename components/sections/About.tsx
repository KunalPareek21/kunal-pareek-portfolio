import { Terminal } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { technicalStack } from "@/lib/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-4 md:py-6 lg:py-8 px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto scroll-mt-24">
      <FadeIn
        className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-xl p-8 md:p-12"
      >
        <div className="mb-8">
          <h2 className="text-[10px] uppercase tracking-widest text-[#6b7280] font-bold flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-500" />
            About
          </h2>
        </div>

        <div className="space-y-6 text-sm leading-relaxed text-[#D1D5DB] max-w-full">
          <p>
            I am a self-taught developer from India, beginning my journey by diving deep into <span className="text-emerald-400 font-medium">WordPress and frontend development</span>. What started as building simple websites quickly evolved into architecting custom plugins and robust internal tooling from the ground up.
          </p>
          <p>
            Working remotely with globally distributed teams, particularly US-based companies, has shaped my approach to software. I thrive in asynchronous environments, where clear communication and highly documented code are not just preferred, but essential.
          </p>
          <p>
            My core interests lie at the intersection of open source, developer experience (DX), automation, SaaS systems, and modern frontend engineering. 
          </p>
          <p className="text-white font-medium bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A] italic">
            &quot;I enjoy building tools that improve developer workflows and simplify complex systems.&quot;
          </p>
        </div>
        
        <div className="mt-10">
          <h2 className="text-[10px] uppercase tracking-widest text-[#6b7280] mb-4 font-bold">Technical Stack</h2>
          <div className="flex flex-wrap gap-2">
            {technicalStack.map(tech => (
              <span key={tech} className="px-2 py-1 bg-[#1A1A1A] text-[10px] rounded border border-[#2A2A2A] uppercase tracking-widest font-bold text-[#E5E7EB]">{tech}</span>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
