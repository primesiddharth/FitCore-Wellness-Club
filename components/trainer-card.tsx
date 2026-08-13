import Image from 'next/image';
import { LucideIcon } from 'lucide-react';

interface TrainerCardProps {
  name: string;
  specialization: string;
  bio?: string;
  experience?: string;
  image: string;
  certifications?: string[];
  icon?: LucideIcon;
}

export default function TrainerCard({
  name,
  specialization,
  bio,
  experience,
  image,
  certifications,
}: TrainerCardProps) {
  return (
    <div className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900 transition-all hover:-translate-y-1.5 hover:border-volt-500/50 hover:shadow-2xl hover:shadow-volt-500/10">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={image}
          alt={`${name} — ${specialization}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />

        {/* Always-on name + specialization */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-display text-lg font-bold text-white">{name}</h3>
          <p className="text-sm font-semibold text-volt-500">{specialization}</p>

          {/* Expanded details on hover */}
          {bio && (
            <div className="mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-48 group-hover:opacity-100">
              <p className="text-xs leading-relaxed text-white/70">{bio}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {experience && (
                  <span className="rounded-full bg-volt-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-volt-500">
                    {experience}
                  </span>
                )}
                {certifications?.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/70"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
