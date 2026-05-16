export function Footer() {
  return (
    <footer className="mt-8 border-t py-8 transition-colors duration-300" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-[9px] font-mono tracking-tighter uppercase relative z-10 text-center md:text-left" style={{ color: 'var(--text-muted)' }}>
        <p>LOCATION: INDIA</p>
        <p className="max-w-[260px] sm:max-w-none leading-relaxed md:text-center">Focused on scalable systems, open source, and modern web engineering.</p>
        <p>&copy; {new Date().getFullYear()} KUNAL PAREEK</p>
      </div>
    </footer>
  );
}
