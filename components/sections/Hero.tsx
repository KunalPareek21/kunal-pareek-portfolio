import { Github, Linkedin, FolderGit2, Mail } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-4 md:pt-40 md:pb-6 lg:pb-8 px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto flex flex-col justify-center min-h-[70vh]">
      <FadeIn
        className="bg-gradient-to-br from-[#111111]/70 to-[#0A0A0A]/70 backdrop-blur-md border border-[#1F1F1F] rounded-xl p-8 md:p-12 flex flex-col justify-center w-full z-10 relative"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-none text-white">
          Open Source Focused<br/>
          <span className="text-emerald-500">Full Stack Engineer</span>
        </h1>
        <p className="text-gray-400 max-w-full text-sm md:text-base mb-8 leading-relaxed">
          Building WordPress ecosystems, custom plugins, themes, APIs, automation tools, and modern frontend applications with React, Next.js, PHP, Node.js, and TypeScript.
        </p>
        
        <div className="flex flex-wrap items-center gap-4">
          <Link href="#projects" className="bg-white text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-tight flex items-center gap-2 hover:bg-gray-200 transition-colors">
            <FolderGit2 className="w-4 h-4" />
            Projects
          </Link>
          <Link href="https://github.com/KunalPareek21" target="_blank" rel="noopener noreferrer" className="border border-[#2A2A2A] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-tight flex items-center gap-2 hover:bg-[#1A1A1A] transition-colors">
            <Github className="w-4 h-4" />
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/kunal-pareek21/" target="_blank" rel="noopener noreferrer" className="border border-[#2A2A2A] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-tight flex items-center gap-2 hover:bg-[#1A1A1A] transition-colors">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
