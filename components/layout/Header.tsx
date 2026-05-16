'use client';

import Link from "next/link";
import { useActiveSection } from "@/hooks/use-active-section";
import { motion } from "motion/react";
import { useMemo } from "react";
import { Logo } from "@/components/ui/Logo";
import { navItems } from "@/lib/data/portfolio";

export function Header() {
  const sectionIds = useMemo(() => navItems.map(item => item.id), []);
  const activeSection = useActiveSection(sectionIds, 300);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-[#1F1F1F]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <Logo className="h-16 text-white" />
        </Link>
        <nav className="hidden md:flex flex-wrap items-center gap-6 text-[11px] font-medium uppercase tracking-widest relative">
          {navItems.map(({ label, id }) => {
            const isActive = activeSection === id;
            return (
              <Link 
                key={id} 
                href={`#${id}`} 
                className={`relative px-1 py-2 transition-colors ${isActive ? 'text-white' : 'text-[#6b7280] hover:text-[#E5E7EB]'}`}
              >
                {label}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
