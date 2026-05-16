'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

const COLORS = {
  primary: 'rgba(0, 255, 157, 1)', // Neon green
  secondaries: [
    'rgba(0, 240, 255, 1)', // Cyan
    'rgba(0, 102, 255, 1)', // Blue
    'rgba(168, 85, 247, 1)' // Purple
  ],
};

interface ParticleFieldBackgroundProps {
  particleCount?: number;
}

export function ParticleFieldBackground({
  particleCount = 100, // Reduced default for premium smoothness
}: ParticleFieldBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    let mouse = { x: -1000, y: -1000 };
    
    let animationFrameId: number;
    let running = true;

    class Particle {
      x: number;
      y: number;
      z: number; // depth: 0.2 (far) to 1 (near)
      size: number;
      color: string;
      isPrimary: boolean;
      vx: number;
      vy: number;
      baseVx: number;
      baseVy: number;
      phase: number;
      distToMouse: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.z = Math.random() * 0.8 + 0.2; 
        this.size = this.z * 1.5; 
        this.isPrimary = Math.random() > 0.25; 
        this.color = this.isPrimary 
          ? COLORS.primary 
          : COLORS.secondaries[Math.floor(Math.random() * COLORS.secondaries.length)];
          
        this.baseVx = (Math.random() - 0.5) * 0.3 * this.z;
        this.baseVy = (Math.random() - 0.5) * 0.3 * this.z;
        this.vx = this.baseVx;
        this.vy = this.baseVy;
        this.phase = Math.random() * Math.PI * 2;
        this.distToMouse = 1000;
      }

      update(mx: number, my: number, canvasWidth: number, canvasHeight: number) {
        let dx = mx - this.x;
        let dy = my - this.y;
        this.distToMouse = Math.sqrt(dx * dx + dy * dy);
        
        const interactionRadius = 250;
        
        // Attraction to mouse
        if (this.distToMouse < interactionRadius && this.distToMouse > 0) {
          const force = (interactionRadius - this.distToMouse) / interactionRadius;
          const ax = (dx / this.distToMouse) * force * 0.02 * this.z;
          const ay = (dy / this.distToMouse) * force * 0.02 * this.z;
          this.vx += ax;
          this.vy += ay;
        } else {
          // Slowly return to base random velocity
          this.vx += (this.baseVx - this.vx) * 0.02;
          this.vy += (this.baseVy - this.vy) * 0.02;
        }

        // Friction
        this.vx *= 0.98;
        this.vy *= 0.98;

        // Subtle ambient wobble
        this.phase += 0.005;
        const wobbleX = Math.sin(this.phase) * 0.05 * this.z;
        const wobbleY = Math.cos(this.phase) * 0.05 * this.z;

        this.x += this.vx + wobbleX;
        this.y += this.vy + wobbleY;

        // Wrap around gracefully
        const margin = 50;
        if (this.x < -margin) this.x = canvasWidth + margin;
        if (this.x > canvasWidth + margin) this.x = -margin;
        if (this.y < -margin) this.y = canvasHeight + margin;
        if (this.y > canvasHeight + margin) this.y = -margin;
      }

      draw(context: CanvasRenderingContext2D, mx: number, my: number, width: number, height: number, isDark: boolean) {
        // Soft opacity fade near edges
        const edgeDistX = Math.min(this.x, width - this.x);
        const edgeDistY = Math.min(this.y, height - this.y);
        const edgeFade = Math.min(1, Math.max(0, Math.min(edgeDistX, edgeDistY) / 100));

        // Neon pulse on hover proximity
        let pulseGlow = 0;
        if (this.distToMouse < 200) {
          pulseGlow = (200 - this.distToMouse) / 200;
        }

        const baseAlpha = isDark ? 0.3 : 0.6;
        const alpha = (baseAlpha + this.z * 0.4 + pulseGlow * 0.3) * edgeFade;

        context.globalAlpha = alpha;
        context.fillStyle = this.color;
        
        if (pulseGlow > 0 && this.isPrimary) {
          context.shadowBlur = 10 + pulseGlow * 15;
          context.shadowColor = 'rgba(0, 255, 157, 1)';
        } else {
          context.shadowBlur = 0; // Massive performance gain
        }
        
        context.beginPath();
        context.arc(this.x, this.y, this.size * (1 + pulseGlow * 0.5), 0, Math.PI * 2);
        context.fill();
        
        context.shadowBlur = 0;
        context.globalAlpha = 1;
      }
    }

    let particles: Particle[] = [];

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      // Limit DPR to 1.5 to prevent massive lag on Retina screens
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      
      particles = [];
      const densityAdjustedCount = Math.floor((width * height) / 18000) * (particleCount / 100);
      const finalCount = Math.min(densityAdjustedCount, 120);

      for (let i = 0; i < finalCount; i++) {
        particles.push(new Particle(width, height));
      }
    };

    const animate = () => {
      if (!running) return;
      const currentTheme = resolvedTheme || theme;
      const isDark = currentTheme === 'dark';

      // Use basic clearRect to prevent extremely heavy canvas composite blending
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mouse.x, mouse.y, width, height);
      }

      // Draw connections
      const maxConnectionDist = 120;
      const maxConnectionDistSq = maxConnectionDist * maxConnectionDist;
      for (let i = 0; i < particles.length; i++) {
        let p1 = particles[i];
        if (p1.distToMouse > 350) continue; // Skip to optimize performance

        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          if (p2.distToMouse > 350) continue;
          
          let dx = p1.x - p2.x;
          let dy = p1.y - p2.y;
          let distSq = dx * dx + dy * dy;
          
          if (distSq < maxConnectionDistSq) {
            const dist = Math.sqrt(distSq);
            const opacity = (1 - dist / maxConnectionDist) * (isDark ? 0.3 : 0.6);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 157, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].draw(ctx, mouse.x, mouse.y, width, height, isDark);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      init();
    };

    const handleVisibilityChange = () => {
      running = document.visibilityState === 'visible';
      if (running) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount, theme, resolvedTheme, mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-2] w-full h-full"
      style={{
        background: (resolvedTheme || theme) === 'dark' ? '#050505' : 'transparent',
      }}
    />
  );
}
