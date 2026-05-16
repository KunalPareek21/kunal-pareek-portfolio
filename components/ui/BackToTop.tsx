'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 0.65, scale: 1, y: 0 }}
          whileHover={{ opacity: 1, y: -4, scale: 1.05 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-11 h-11 rounded-lg border group shadow-md backdrop-blur-sm cursor-pointer"
          style={{ 
            backgroundColor: 'var(--card-secondary)', 
            borderColor: 'var(--border)', 
          }}
        >
          <ArrowUp className="w-5 h-5 transition-colors group-hover:text-emerald-500" style={{ color: 'var(--text-muted)' }} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
