'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from '@/components/ui/Logo';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after 1.8 seconds to allow aesthetic initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ backgroundColor: 'var(--background)' }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-8"
          >
            <Logo className="h-24" />
            
            <div className="flex flex-col items-center gap-4">
              <motion.div 
                className="w-48 h-[1px] overflow-hidden"
                style={{ backgroundColor: 'var(--border)' }}
              >
                <motion.div
                  className="h-full bg-emerald-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-[9px] uppercase tracking-[0.3em] font-mono"
                style={{ color: 'var(--text-muted)' }}
              >
                Initializing Workspace
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
