'use client';

import React, { useEffect, useRef } from 'react';

const PARTICLE_COLORS = ['#3b82f6', '#a855f7', '#ec4899', '#06b6d4', '#fb923c'];

interface ParticleFieldBackgroundProps {
  particleCount?: number;
  interactionStrength?: number;
  colors?: string[];
  baseSpeed?: number;
}

export function ParticleFieldBackground({
  particleCount = 220,
  interactionStrength = 120,
  colors = PARTICLE_COLORS,
  baseSpeed = 0.35,
}: ParticleFieldBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
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
      baseX: number;
      baseY: number;
      size: number;
      color: string;
      density: number;
      vx: number;
      vy: number;
      phase: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = (Math.random() - 0.5) * canvasWidth * 1.5 + canvasWidth / 2;
        this.y = (Math.random() - 0.5) * canvasHeight * 1.5 + canvasHeight / 2;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.density = (Math.random() * 30) + 1;
        this.vx = 0;
        this.vy = 0;
        this.phase = Math.random() * Math.PI * 2;
      }

      update(mx: number, my: number) {
        let dx = mx - this.x;
        let dy = my - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance === 0) distance = 0.001;
        
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        
        const maxDistance = interactionStrength;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < maxDistance) {
          // Repel from mouse
          this.vx -= directionX * 0.2;
          this.vy -= directionY * 0.2;
        } else {
          // Slowly return to base position
          if (this.x !== this.baseX) {
            let dxBase = this.x - this.baseX;
            this.vx -= dxBase * 0.005;
          }
          if (this.y !== this.baseY) {
            let dyBase = this.y - this.baseY;
            this.vy -= dyBase * 0.005;
          }
        }

        // Apply friction
        this.vx *= 0.92;
        this.vy *= 0.92;

        // Subtle ambient movement
        this.phase += 0.01 * baseSpeed;
        const ambientX = Math.sin(this.phase) * 0.3 * baseSpeed;
        const ambientY = Math.cos(this.phase) * 0.3 * baseSpeed;

        this.x += this.vx + ambientX;
        this.y += this.vy + ambientY;
      }

      draw(context: CanvasRenderingContext2D) {
        context.globalAlpha = 0.7;
        context.fillStyle = this.color;
        
        // Add subtle glow
        context.shadowBlur = 5;
        context.shadowColor = this.color;
        
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
        
        // Reset glow for next drawing
        context.shadowBlur = 0;
        context.globalAlpha = 1;
      }
    }

    let particles: Particle[] = [];

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';

      particles = [];
      const densityAdjustedCount = Math.floor((width * height) / 18000) * (particleCount / 100);
      const finalCount = Math.min(densityAdjustedCount, 420);

      for (let i = 0; i < finalCount; i++) {
        particles.push(new Particle(width, height));
      }
    };

    const animate = () => {
      if (!running) return;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mouse.x, mouse.y);
        particles[i].draw(ctx);
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
  }, [particleCount, interactionStrength, colors, baseSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1]"
    />
  );
}
