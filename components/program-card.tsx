import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ProgramCardProps {
  name: string;
  description: string;
  image: string;
  icon: LucideIcon;
  intensity: string;
  duration: string;
  href?: string;
}

export default function ProgramCard({
  name,
  description,
  image,
  icon: Icon,
  intensity,
  duration,
  href = '/programs',
}: ProgramCardProps) {
  return (
    <Link
      href={href}
      className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900 transition-all hover:-translate-y-1.5 hover:border-volt-500/50 hover:shadow-2xl hover:shadow-volt-500/10"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
        <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-volt-500 text-ink-950 shadow-lg">
          <Icon className="h-5 w-5" strokeWidth={2.5} />
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <span className="rounded-full bg-ink-950/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
            {intensity}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-volt-500">
          {name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{description}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
            {duration}
          </span>
          <span className="flex items-center gap-1.5 text-sm font-bold text-volt-500">
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
