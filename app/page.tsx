import Link from 'next/link';
import Image from 'next/image';
import {
  CalendarDays,
  Users,
  Dumbbell,
  Activity,
  BadgeCheck,
  ClipboardList,
  Apple,
  Wallet,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';

import Hero from '@/components/hero';
import SectionHeading from '@/components/section-heading';
import StatCard from '@/components/stat-card';
import FeatureCard from '@/components/feature-card';
import ProgramCard from '@/components/program-card';
import TrainerCard from '@/components/trainer-card';
import TestimonialCard from '@/components/testimonial-card';
import CtaBanner from '@/components/cta-banner';

import {
  site,
  images,
  programs,
  trainers,
  testimonials,
  features,
} from '@/lib/site-data';

// Map feature icon names to lucide components
const featureIcons = {
  BadgeCheck,
  Dumbbell,
  ClipboardList,
  Users,
  Apple,
  Wallet,
} as const;

const statIcons = [CalendarDays, Users, Dumbbell, Activity] as const;

const programIconMap = {
  Dumbbell,
  Users,
  Flower2: Activity,
  UserCheck: BadgeCheck,
  Flame: Activity,
  Salad: Apple,
} as const;

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Stats bar */}
      <section id="stats" className="relative mt-16 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {site.stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                icon={statIcons[i]}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. About preview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={images.aboutPreview}
                  alt="Athlete training inside FitCore Wellness Club"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              {/* floating badge */}
              <div className="absolute -bottom-6 -right-4 hidden sm:flex flex-col items-center rounded-2xl bg-volt-500 px-6 py-5 text-ink-950 shadow-2xl">
                <span className="font-display text-3xl font-extrabold">10+</span>
                <span className="text-xs font-bold uppercase tracking-wider">Years Strong</span>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Who We Are"
                align="left"
                title="More than a gym —"
                highlight="a wellness community"
                description="FitCore Wellness Club was founded on a simple belief: real fitness transforms lives beyond the mirror. For over a decade we have combined elite coaching, premium facilities and genuine community to help every member — from first-timer to seasoned athlete — become their strongest, healthiest self."
              />
              <p className="reveal mt-4 text-base leading-relaxed text-white/60">
                Our trainers do not just count reps. They build relationships, track your
                progress and adapt your programme as you grow. Our members do not just work
                out — they belong. That is the FitCore difference.
              </p>
              <Link
                href="/about"
                className="reveal mt-7 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-volt-500 transition-all hover:gap-3"
              >
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Programs preview */}
      <section className="relative bg-ink-900/40 py-24">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="Programs built for"
            highlight="every goal"
            description="From raw strength to mindful flow, our six signature programmes cover every path to a better you. Explore the full schedule on our Programs page."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p) => (
              <ProgramCard
                key={p.id}
                name={p.name}
                description={p.short}
                image={p.image}
                icon={programIconMap[p.icon]}
                intensity={p.intensity}
                duration={p.duration}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why FitCore"
            title="Six reasons members"
            highlight="never leave"
            description="We obsess over the details that make training effective, enjoyable and sustainable — so you actually look forward to showing up."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <FeatureCard
                key={f.title}
                icon={featureIcons[f.icon]}
                title={f.title}
                description={f.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Trainers preview */}
      <section className="relative bg-ink-900/40 py-24">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Meet The Coaches"
            title="Trainers who"
            highlight="actually care"
            description="Internationally certified, relentlessly supportive. Hover any card to learn more about the people behind your results."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trainers.slice(0, 4).map((t) => (
              <TrainerCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Real Stories"
            title="Members who"
            highlight="transformed their lives"
            description="The best measure of a gym is the people it changes. Here are a few of their stories."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA banner */}
      <CtaBanner />
    </>
  );
}
