import Image from "next/image";

interface BrandLogoProps {
  name: string;
  /** Path under /public. */
  src: string;
  className?: string;
}

export default function BrandLogo({ name, src, className = "" }: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image src={src} alt="" width={24} height={24} className="h-6 w-6 object-contain" />
      <span className="font-brand font-bold tracking-tight">{name}</span>
    </span>
  );
}
