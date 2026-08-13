import { Dumbbell, Users, Activity, BadgeCheck, Flame, Apple, Check, ArrowRight, Clock } from 'lucide-react';
import PageHero from '@/components/page-hero';
import SectionHeading from '@/components/section-heading';
import CtaBanner from '@/components/cta-banner';
import { programs, schedule, images } from '@/lib/site-data';

const iconMap = {
  Dumbbell,
  Users,
  Flower2: Activity,
  UserCheck: BadgeCheck,
  Flame,
  Salad: Apple,
} as const;

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        crumb="Programs"
        title="Find Your"
        highlight="Path"
        subtitle="Six signature programmes, 40+ weekly classes, and coaching that scales to every body and every ambition."
        image={programs[0].image}
      />

      {/* Programs grid with detail */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          {programs.map((p, i) => {
            const Icon = iconMap[p.icon];
            const reversed = i % 2 === 1;
            return (
              <div
                key={p.id}
                className="reveal grid items-center gap-8 rounded-3xl border border-white/10 bg-ink-900/50 p-6 lg:grid-cols-2 lg:p-8"
              >
                {/* Image */}
                <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${reversed ? 'lg:order-2' : ''}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                </div>

                {/* Content */}
                <div className={reversed ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-volt-500 text-ink-950">
                      <Icon className="h-5 w-5" strokeWidth={2.5} />
                    </span>
                    <span className="rounded-full bg-volt-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-volt-500">
                      {p.intensity}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-white/40">
                      <Clock className="h-3.5 w-3.5" />
                      {p.duration}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold uppercase text-white sm:text-3xl">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/60">{p.description}</p>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {p.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-white/75">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-volt-500/15 text-volt-500">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-2 rounded-lg border border-volt-500/40 px-5 py-3 text-sm font-bold uppercase tracking-wide text-volt-500 transition-all hover:bg-volt-500 hover:text-ink-950"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Weekly schedule */}
      <section className="bg-ink-900/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Weekly Timetable"
            title="Sample class"
            highlight="schedule"
            description="A typical week at FitCore. Classes run six days a week — book your spot through the member app or at the front desk."
          />

          <div className="reveal mt-12 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-ink-900">
                  <th className="px-4 py-4 text-left font-display text-xs font-bold uppercase tracking-wider text-white/50">Time</th>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                    <th key={d} className="px-4 py-4 text-center font-display text-xs font-bold uppercase tracking-wider text-volt-500">
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => (
                  <tr key={row.time} className={i % 2 === 0 ? 'bg-ink-950/40' : 'bg-ink-900/30'}>
                    <td className="px-4 py-4 font-bold text-white/80">{row.time}</td>
                    {[row.mon, row.tue, row.wed, row.thu, row.fri, row.sat].map((cls, j) => (
                      <td key={j} className="px-4 py-4 text-center">
                        <span className="rounded-lg bg-volt-500/10 px-3 py-1.5 text-xs font-semibold text-volt-500">
                          {cls}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="reveal mt-6 text-center text-sm text-white/40">
            Schedule is indicative and updated monthly. Sunday open for personal training & yoga only.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Not sure where to"
        highlight="start?"
        description="Book a free consultation with one of our coaches. We will assess your goals, experience and schedule and recommend the perfect programme for you."
        buttonLabel="Book a Free Consultation"
        image={images.ctaBanner}
      />
    </>
  );
}
