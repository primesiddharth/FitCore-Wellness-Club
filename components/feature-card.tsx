import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="reveal group relative rounded-2xl border border-white/10 bg-ink-900/60 p-6 transition-all hover:-translate-y-1 hover:border-volt-500/50 hover:shadow-xl hover:shadow-volt-500/5">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-volt-500/10 text-volt-500 transition-transform group-hover:scale-110">
        <Icon className="h-6 w-6" strokeWidth={2} />
      </div>
      <h3 className="mt-5 font-display text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{description}</p>
    </div>
  );
}
