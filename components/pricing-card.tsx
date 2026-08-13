import Link from 'next/link';
import { Check, Star } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export default function PricingCard({
  name,
  price,
  period,
  tagline,
  features,
  cta,
  popular,
}: PricingCardProps) {
  return (
    <div
      className={`reveal relative flex flex-col rounded-2xl border p-8 transition-all hover:-translate-y-1 ${
        popular
          ? 'border-volt-500 bg-gradient-to-b from-volt-500/10 to-ink-900 shadow-2xl shadow-volt-500/20 lg:scale-105'
          : 'border-white/10 bg-ink-900/60 hover:border-volt-500/40'
      }`}
    >
      {popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-volt-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink-950 shadow-lg">
          <Star className="h-3 w-3 fill-ink-950" />
          Most Popular
        </span>
      )}

      <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">{name}</h3>
      <p className="mt-2 text-sm text-white/50">{tagline}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-display text-4xl font-extrabold text-white">{price}</span>
        <span className="text-sm font-medium text-white/40">{period}</span>
      </div>

      <ul className="mt-6 flex-1 space-y-3.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-white/75">
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                popular ? 'bg-volt-500 text-ink-950' : 'bg-volt-500/15 text-volt-500'
              }`}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={`mt-8 block rounded-lg px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide transition-all ${
          popular
            ? 'bg-volt-500 text-ink-950 hover:bg-volt-400 hover:scale-[1.02] shadow-lg shadow-volt-500/30'
            : 'border border-white/20 text-white hover:border-volt-500 hover:bg-volt-500 hover:text-ink-950'
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}
