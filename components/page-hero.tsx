import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface PageHeroProps {
  title: string;
  highlight?: string;
  crumb: string;
  image: string;
  subtitle?: string;
}

export default function PageHero({ title, highlight, crumb, image, subtitle }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[52vh] items-center overflow-hidden pt-28 pb-16">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink-950/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="reveal flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/60">
          <Link href="/" className="transition-colors hover:text-volt-500">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-volt-500">{crumb}</span>
        </nav>

        <h1 className="reveal mt-4 font-display text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title} {highlight && <span className="text-volt-500">{highlight}</span>}
        </h1>
        {subtitle && (
          <p className="reveal mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
