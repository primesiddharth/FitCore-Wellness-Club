import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  suffix?: string;
  label: string;
}

export default function StatCard({ icon: Icon, value, suffix, label }: StatCardProps) {
  return (
    <div className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60 p-6 text-center transition-all hover:border-volt-500/50 hover:bg-ink-900">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-volt-500/10 text-volt-500 transition-colors group-hover:bg-volt-500 group-hover:text-ink-950">
        <Icon className="h-6 w-6" strokeWidth={2.5} />
      </div>
      <div className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
        {value}
        <span className="text-volt-500">{suffix}</span>
      </div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/50">
        {label}
      </div>
    </div>
  );
}
