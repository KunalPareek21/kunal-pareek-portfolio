import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/logo.png"
        alt="Kunal Pareek Logo"
        width={200}
        height={106}
        className="object-contain h-full w-auto"
        priority
      />
    </div>
  );
}
