'use client';

import Link from "next/link";
import { useActiveSection } from "@/hooks/use-active-section";
import { motion } from "motion/react";
import { useMemo, useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
import { navItems } from "@/lib/data/portfolio";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { AnimatePresence } from "motion/react";

export function Header() {
  const sectionIds = useMemo(() => navItems.map(item => item.id), []);
  const activeSection = useActiveSection(sectionIds, 300);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
            {mounted && (
              theme === 'dark' ? (
                <Sun className="w-4 h-4 text-emerald-400" />
              ) : (
                <Moon className="w-4 h-4 text-emerald-600" />
              )
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg border transition-all duration-200"
            style={{
              backgroundColor: 'var(--card-secondary)',
              borderColor: 'var(--border)',
              color: 'var(--text-primary)',
            }}
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex flex-col p-8"
            style={{ backgroundColor: 'var(--background)' }}
          >
            <div className="flex justify-between items-center mb-12">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Logo className="h-16" />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-8 h-8 rounded-lg border transition-all duration-200"
                style={{
                  backgroundColor: 'var(--card-secondary)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-primary)',
                }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 text-[13px] font-bold uppercase tracking-widest">
              {navItems.map(({ label, id }, idx) => {
                const isActive = activeSection === id;
                return (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={`#${id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-4 transition-colors"
                      style={{ color: isActive ? 'var(--text-primary)' : 'var(--text-muted)' }}
                    >
                      {isActive && <div className="w-2 h-2 rounded-full bg-emerald-500" />}
                      {label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            
            <div className="mt-auto pb-8">
               <p className="text-[10px] font-mono tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
                 Focused on scalable systems, open source, and modern web engineering.
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
