'use client';

import Link from "next/link";
import { useActiveSection } from "@/hooks/use-active-section";
import { motion } from "motion/react";
import { useMemo } from "react";
import { Logo } from "@/components/ui/Logo";
import { navItems } from "@/lib/data/portfolio";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function Header() {
  const sectionIds = useMemo(() => navItems.map(item => item.id), []);
  const activeSection = useActiveSection(sectionIds, 300);
  const { theme, setTheme } = useTheme();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300"
      style={{ backgroundColor: 'var(--header-bg)', borderColor: 'var(--border)' }}
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <Logo className="h-16" />
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex flex-wrap items-center gap-6 text-[11px] font-medium uppercase tracking-widest relative">
            {navItems.map(({ label, id }) => {
              const isActive = activeSection === id;
              return (
                <Link
                  key={id}
                  href={`#${id}`}
                  className="relative px-1 py-2 transition-colors"
                  style={{ color: isActive ? 'var(--text-primary)' : 'var(--text-muted)' }}
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

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
            className="flex items-center justify-center w-8 h-8 rounded-lg border transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: 'var(--card-secondary)',
              borderColor: 'var(--border)',
              color: 'var(--text-muted)',
            }}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-emerald-400" />
            ) : (
              <Moon className="w-4 h-4 text-emerald-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
