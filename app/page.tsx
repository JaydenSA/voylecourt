import { Button } from '@/components/ui/button'
import React from 'react'

export default function Home() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-42 text-center text-foreground">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight">Welcome to Voyle Court</h1>
      <p className="mt-8 text-base sm:text-3xl text-foreground/80">Frequently accessed documents for owners/residents.</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild className="px-6 transition-transform hover:-translate-y-0.5">
          <a href="/Voyle Court Parking Application Form.pdf" download="Voyle Court Parking Application Form.pdf">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
              <path d="M12 3v12" strokeLinecap="round" />
              <path d="m7 10 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 21h14" strokeLinecap="round" />
            </svg>
            Parking Application Form
          </a>
        </Button>
        <Button asChild className="px-6 transition-transform hover:-translate-y-0.5">
          <a href="/Voyle Court Conduct Rules.pdf" download="Voyle Court Conduct Rules.pdf">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
              <path d="M12 3v12" strokeLinecap="round" />
              <path d="m7 10 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 21h14" strokeLinecap="round" />
            </svg>
            Conduct Rules
          </a>
        </Button>
      </div>
    </section>
  );
}
