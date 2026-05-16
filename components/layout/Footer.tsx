export function Footer() {
  return (
    <footer className="mt-8 border-t py-8 px-8 md:px-12 lg:px-16 transition-colors duration-300" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-mono tracking-tighter uppercase relative z-10" style={{ color: 'var(--text-muted)' }}>
        <p>LOCATION: INDIA</p>
        <p className="text-center md:text-right hidden sm:block">Focused on scalable systems, open source, and modern web engineering.</p>
        <p>&copy; {new Date().getFullYear()} KUNAL PAREEK</p>
      </div>
    </footer>
  );
}
