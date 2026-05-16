import Link from 'next/link';
import { Home, TerminalSquare } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center z-10 relative">
      <div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border"
        style={{ backgroundColor: 'var(--card-secondary)', borderColor: 'var(--border)' }}
      >
        <TerminalSquare className="w-8 h-8 text-emerald-500" />
      </div>
      
      <h1 
        className="text-6xl md:text-8xl font-black tracking-tighter mb-4 font-mono"
        style={{ color: 'var(--text-primary)' }}
      >
        404
      </h1>
      
      <h2 
        className="text-sm md:text-base font-bold tracking-widest uppercase mb-4"
        style={{ color: 'var(--text-primary)' }}
      >
        Route Not Found
      </h2>
      
      <p 
        className="text-[13px] md:text-sm max-w-md mx-auto leading-relaxed mb-10"
        style={{ color: 'var(--text-secondary)' }}
      >
        The requested endpoint doesn&apos;t exist in the current architecture. It may have been moved, deleted, or never existed in the first place.
      </p>
      
      <Link 
        href="/"
        className="flex items-center justify-center gap-2 text-[11px] uppercase tracking-widest font-bold px-8 py-4 rounded-lg transition-all border hover:opacity-90 hover:scale-[1.02]"
        style={{ backgroundColor: 'var(--text-primary)', borderColor: 'var(--text-primary)', color: 'var(--background)' }}
      >
        <Home className="w-4 h-4" />
        Return to Home
      </Link>
    </div>
  );
}
