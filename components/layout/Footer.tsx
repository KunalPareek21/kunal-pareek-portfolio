export function Footer() {
  return (
    <footer className="mt-8 border-t border-[#1F1F1F] py-8 px-8 md:px-12 lg:px-16">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-[#6b7280] font-mono tracking-tighter uppercase relative z-10">
        <p>LOCATION: INDIA</p>
        <p className="text-center md:text-right hidden sm:block">BUILT WITH NEXT.JS & TYPESCRIPT || DEPLOYED ON VERCEL</p>
        <p>&copy; {new Date().getFullYear()} KUNAL PAREEK</p>
      </div>
    </footer>
  );
}
