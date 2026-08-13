import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  title?: string;
  highlight?: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
  image?: string;
}

export default function CtaBanner({
  title = 'Ready to start your',
  highlight = 'fitness journey?',
  description = 'Join 2000+ members who transformed their lives at FitCore. Your first trial is on us — no pressure, no commitment, just results.',
  buttonLabel = 'Book a Free Trial',
  href = '/contact',
  image,
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-volt-500">
      {image && (
        <>
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-volt-500/80" />
        </>
      )}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="reveal font-display text-3xl font-extrabold uppercase tracking-tight text-ink-950 sm:text-4xl lg:text-5xl">
          {title} <span className="underline decoration-ink-950/30 underline-offset-4">{highlight}</span>
        </h2>
        <p className="reveal mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-950/80 sm:text-lg">
          {description}
        </p>
        <Link
          href={href}
          className="reveal mt-8 inline-flex items-center gap-2 rounded-lg bg-ink-950 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-2xl shadow-ink-950/30 transition-all hover:scale-105 hover:bg-ink-900"
        >
          {buttonLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
