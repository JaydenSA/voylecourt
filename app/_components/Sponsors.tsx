import Image from "next/image";

export default function Sponsors() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <div className="mx-auto max-w-7xl px-6 flex items-end justify-between gap-4">
        <div className="pointer-events-auto max-w-[42vw] sm:max-w-[22vw] text-center">
          <div className="mb-2 sm:mb-2">
            <span className="inline-flex items-center rounded-full bg-black/40 border border-white/10 px-3 py-1 text-[10px] sm:text-xs uppercase tracking-wider text-white/80 backdrop-blur ring-1 ring-white/10">Website brought to you by</span>
          </div>
          <SponsorLogo src="/designtheorylogo.png" alt="Sponsor Left" />
        </div>
        <div className="pointer-events-auto max-w-[42vw] sm:max-w-[22vw] text-center">
          <div className="mb-2 sm:mb-2">
            <span className="inline-flex items-center rounded-full bg-black/40 border border-white/10 px-3 py-1 text-[10px] sm:text-xs uppercase tracking-wider text-white/80 backdrop-blur ring-1 ring-white/10">Hosting brought to you by</span>
          </div>
          <SponsorLogo src="/sclogo.png" alt="Sponsor Right" size="lg" />
        </div>
      </div>
    </div>
  );
}

function SponsorLogo({ src, alt, size = "md" }: { src: string; alt: string; size?: "md" | "lg" }) {
  const sizeClasses = {
    md: "h-10 sm:h-12",
    lg: "h-10 sm:h-14"
  };
  
  return (
    <div className="shadow-lg backdrop-blur inline-block transition-transform hover:-translate-y-0.5">
      <Image src={src} alt={alt} width={220} height={64} className={`${sizeClasses[size]} w-auto object-contain invert`} />
    </div>
  );
}
