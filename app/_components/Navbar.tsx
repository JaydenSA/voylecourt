"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full bg-black/20 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-2 md:py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image src="/Logo.png" alt="Voyle Court" width={600} height={600} className="h-14 w-14 md:h-20 md:w-20 object-contain invert" />
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm md:text-base text-white/90">
          <a href="#" className="transition-colors hover:text-white focus:outline-none focus-visible:text-white">Parking Form</a>
          <a href="#" className="transition-colors hover:text-white focus:outline-none focus-visible:text-white">Rules & Regulations</a>
        </nav>
        <button
          aria-label="Open menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-black/30 text-white/90 hover:bg-black/40 focus-visible:ring-2 focus-visible:ring-white/40"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/30">
          <div className="mx-auto max-w-7xl px-6 py-3 flex flex-col gap-2 text-white/90">
            <a href="#" className="py-2 transition-colors hover:text-white">Parking Application Form</a>
            <a href="#" className="py-2 transition-colors hover:text-white">Conduct Rules</a>
          </div>
        </div>
      )}
    </header>
  );
}