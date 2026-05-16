'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [hoverType, setHoverType] = useState<'default' | 'button' | 'text' | 'image'>('default');
  const magneticElementRef = useRef<HTMLElement | null>(null);

  // Mouse positions
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing blob
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Velocity tracking
  const prevMouseX = useRef(0);
  const prevMouseY = useRef(0);
  const velocityMV = useMotionValue(0);

  // Stretching based on velocity
  const stretchX = useTransform(velocityMV, [0, 20], [1, 1.2]);
  const stretchY = useTransform(velocityMV, [0, 20], [1, 0.8]);

  // Trailing particles
  const trailX1 = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.8 });
  const trailY1 = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.8 });
  const trailX2 = useSpring(mouseX, { damping: 40, stiffness: 150, mass: 1 });
  const trailY2 = useSpring(mouseY, { damping: 40, stiffness: 150, mass: 1 });
  const trailX3 = useSpring(mouseX, { damping: 50, stiffness: 100, mass: 1.2 });
  const trailY3 = useSpring(mouseY, { damping: 50, stiffness: 100, mass: 1.2 });

  useEffect(() => {
    const checkMobile = () => {
      const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsMobile(hasCoarsePointer || prefersReducedMotion || window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const style = document.createElement('style');
      style.innerHTML = `
        * {
          cursor: none !important;
        }
      `;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    let rafId: number;
    let lastTime = performance.now();

    const updateMouse = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      let targetX = e.clientX;
      let targetY = e.clientY;

      // Magnetic pull logic
      if (magneticElementRef.current) {
        const rect = magneticElementRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        
        targetX = e.clientX - distanceX * 0.15;
        targetY = e.clientY - distanceY * 0.15;
      }

      mouseX.set(targetX);
      mouseY.set(targetY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const updateVelocity = () => {
      const currentTime = performance.now();
      const dt = currentTime - lastTime;
      
      if (dt > 16) {
        const dx = mouseX.get() - prevMouseX.current;
        const dy = mouseY.get() - prevMouseY.current;
        const v = Math.sqrt(dx * dx + dy * dy);
        
        // Smoothly approach new velocity limit
        const currentV = velocityMV.get();
        const targetV = Math.min(v * 0.5, 20);
        velocityMV.set(currentV + (targetV - currentV) * 0.2); 
        
        prevMouseX.current = mouseX.get();
        prevMouseY.current = mouseY.get();
        lastTime = currentTime;
      }
      
      rafId = requestAnimationFrame(updateVelocity);
    };

    window.addEventListener('mousemove', updateMouse);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    rafId = requestAnimationFrame(updateVelocity);

    return () => {
      window.removeEventListener('mousemove', updateMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isMobile, isVisible, mouseX, mouseY, velocityMV]);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const magneticTarget = target.closest('button') || target.closest('a') || target.closest('[role="button"]');
      const textTarget = target.closest('p') || target.closest('h1') || target.closest('h2') || target.closest('h3') || target.closest('h4') || target.closest('h5') || target.closest('h6') || target.closest('span');
      const imageTarget = target.closest('img') || target.closest('video') || target.closest('.glass-card');

      if (magneticTarget) {
        setHoverType('button');
        magneticElementRef.current = magneticTarget as HTMLElement;
      } else if (textTarget) {
        setHoverType('text');
        magneticElementRef.current = null;
      } else if (imageTarget) {
        setHoverType('image');
        magneticElementRef.current = null;
      } else {
        setHoverType('default');
        magneticElementRef.current = null;
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, [isMobile]);

  if (isMobile) return <></>;

  const variants = {
    default: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
      border: '1px solid rgba(var(--primary-rgb), 0.2)',
      backdropFilter: 'blur(4px)',
      borderRadius: '50%',
      x: '-50%',
      y: '-50%',
      scale: 1,
    },
    button: {
      width: 64,
      height: 64,
      backgroundColor: 'transparent',
      border: '2px solid rgba(var(--primary-rgb), 0.6)',
      boxShadow: '0 0 20px rgba(var(--primary-rgb), 0.2), inset 0 0 20px rgba(var(--primary-rgb), 0.1)',
      backdropFilter: 'none',
      borderRadius: '50%',
      x: '-50%',
      y: '-50%',
      scale: 1.1,
    },
    text: {
      width: 4,
      height: 24,
      backgroundColor: 'rgba(var(--primary-rgb), 0.8)',
      border: '0px solid rgba(var(--primary-rgb), 1)',
      backdropFilter: 'blur(0px)',
      borderRadius: '2px',
      x: '-50%',
      y: '-50%',
      scale: 1,
    },
    image: {
      width: 80,
      height: 80,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(12px)',
      borderRadius: '24px',
      x: '-50%',
      y: '-50%',
      scale: 1,
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="pointer-events-none fixed inset-0 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Trails */}
          <motion.div className="absolute top-0 left-0 will-change-transform" style={{ x: trailX1, y: trailY1 }}>
            <motion.div 
              className="w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-[rgba(var(--primary-rgb),0.4)] rounded-full blur-[1px]" 
              animate={{ opacity: hoverType === 'default' ? 1 : 0 }} 
            />
          </motion.div>
          <motion.div className="absolute top-0 left-0 will-change-transform" style={{ x: trailX2, y: trailY2 }}>
            <motion.div 
              className="w-1 h-1 -ml-[2px] -mt-[2px] bg-[rgba(var(--primary-rgb),0.2)] rounded-full blur-[2px]" 
              animate={{ opacity: hoverType === 'default' ? 1 : 0 }} 
            />
          </motion.div>
          <motion.div className="absolute top-0 left-0 will-change-transform" style={{ x: trailX3, y: trailY3 }}>
            <motion.div 
              className="w-1 h-1 -ml-[2px] -mt-[2px] bg-[rgba(var(--primary-rgb),0.1)] rounded-full blur-[2px]" 
              animate={{ opacity: hoverType === 'default' ? 1 : 0 }} 
            />
          </motion.div>

          {/* Outer Blob */}
          <motion.div
            className="absolute top-0 left-0 flex items-center justify-center will-change-transform"
            style={{
              x: cursorX,
              y: cursorY,
            }}
          >
            <motion.div
              variants={variants}
              animate={hoverType}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative flex items-center justify-center"
              style={{
                scaleX: hoverType === 'default' ? stretchX : 1,
                scaleY: hoverType === 'default' ? stretchY : 1,
              }}
            >
              {/* Inner pulse ring for idle state */}
              {hoverType === 'default' && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full border border-[rgba(var(--primary-rgb),0.3)]"
                />
              )}

              {/* Drag/View Indicator for images */}
              {hoverType === 'image' && (
                <div className="absolute inset-0 flex items-center justify-center opacity-70 text-white text-[8px] tracking-widest font-bold">
                  VIEW
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Center Dot */}
          <motion.div
            className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)] will-change-transform"
            style={{
              x: mouseX,
              y: mouseY,
              backgroundColor: 'var(--primary)',
              marginLeft: '-3px',
              marginTop: '-3px',
              opacity: hoverType === 'text' ? 0 : 1
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
