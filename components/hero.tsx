import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Phone } from 'lucide-react';
import { images, site } from '@/lib/site-data';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <Image
        src={images.heroWorkout}
        alt="Athlete training in a modern gym"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-24">
        <div className="max-w-3xl">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-volt-500/30 bg-volt-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-volt-500">
            <span className="h-1.5 w-1.5 rounded-full bg-volt-500 animate-pulse" />
            #1 Premium Fitness Club in Kolkata
          </span>

          <h1 className="reveal mt-6 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Transform Your Body.
            <br />
            <span className="text-volt-500">Elevate</span> Your Life.
          </h1>

          <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            FitCore Wellness Club is where Kolkata comes to get stronger — body and mind.
            Expert coaching, world-class equipment and a community that pushes you further.
          </p>

          <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/membership"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-volt-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-ink-950 shadow-2xl shadow-volt-500/30 transition-all hover:scale-105 hover:bg-volt-400"
            >
              Join Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur transition-all hover:border-volt-500 hover:bg-volt-500 hover:text-ink-950"
            >
              Book a Free Trial
            </Link>
          </div>

          {/* Phone inline */}
          <a
            href={site.phoneHref}
            className="reveal mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-volt-500"
          >
            <Phone className="h-4 w-4 text-volt-500" />
            Or call us: {site.phone}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#stats"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 transition-colors hover:text-volt-500"
      >
        <ChevronDown className="h-7 w-7 animate-bounce-soft" />
      </a>
    </section>
  );
}
