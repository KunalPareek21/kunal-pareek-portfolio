'use client';

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Logo({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`relative ${className} w-[200px] h-[106px]`} />
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src="/logo.png"
        alt="Kunal Pareek Logo"
        width={200}
        height={106}
        className={`object-contain h-full w-auto transition-all duration-300 ${resolvedTheme === 'light' ? 'invert' : ''}`}
        priority
      />
    </div>
  );
}
