import Image from 'next/image';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export default function TestimonialCard({ name, role, quote, image }: TestimonialCardProps) {
  return (
    <figure className="reveal relative flex h-full flex-col rounded-2xl border border-white/10 bg-ink-900/60 p-6 transition-all hover:border-volt-500/40 hover:bg-ink-900">
      <Quote className="h-8 w-8 text-volt-500/30" fill="currentColor" />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/80">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
        <div className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-volt-500/30">
          <Image src={image} alt={name} fill sizes="44px" className="object-cover" />
        </div>
        <div>
          <div className="font-display text-sm font-bold text-white">{name}</div>
          <div className="text-xs text-white/50">{role}</div>
        </div>
      </figcaption>
    </figure>
  );
}
