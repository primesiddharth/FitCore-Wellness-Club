import Image from 'next/image';
import { Target, Eye, HeartHandshake, TrendingUp, Trophy } from 'lucide-react';
import PageHero from '@/components/page-hero';
import SectionHeading from '@/components/section-heading';
import TrainerCard from '@/components/trainer-card';
import CtaBanner from '@/components/cta-banner';
import { images, trainers, values } from '@/lib/site-data';

const valueIcons = { HeartHandshake, Target, TrendingUp, Trophy } as const;

export default function AboutPage() {
  return (
    <>
      {/* Hero + breadcrumb */}
      <PageHero
        crumb="About"
        title="Our"
        highlight="Story"
        subtitle="From a single room of dumbbells to Kolkata's most trusted wellness community — discover the people and principles behind FitCore."
        image={images.aboutStory}
      />

      {/* Our Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={images.aboutStory}
                  alt="Inside the FitCore Wellness Club facility"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 hidden sm:flex flex-col items-center rounded-2xl bg-volt-500 px-6 py-5 text-ink-950 shadow-2xl">
                <span className="font-display text-3xl font-extrabold">2014</span>
                <span className="text-xs font-bold uppercase tracking-wider">Founded</span>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionHeading
                eyebrow="Our Story"
                align="left"
                title="Built by athletes,"
                highlight="for everyone"
              />
              <div className="reveal mt-5 space-y-4 text-base leading-relaxed text-white/65">
                <p>
                  FitCore Wellness Club was founded in [PLACEHOLDER: 2014] by a small group of
                  coaches who were tired of the impersonal, contract-locked gym culture of the
                  city. They started with one room, a handful of dumbbells and a promise: every
                  member would be coached like an athlete, no matter where they were starting from.
                </p>
                <p>
                  Word spread quickly. Within two years we had outgrown our first space and moved
                  into our current Park Street Extension facility — a 12,000 sq. ft. purpose-built
                  floor spanning strength, functional, cardio, yoga and recovery zones. Today we
                  are home to 2000+ members and 25+ certified coaches, yet that original promise
                  has not changed one bit.
                </p>
                <p>
                  What has grown is our community. FitCore is where CEOs train beside students,
                  where first-timers learn to deadlift beside national lifters, and where nobody
                  ever walks in without being greeted by name. That sense of belonging — not the
                  equipment — is what keeps members here for years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-ink-900/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="reveal rounded-2xl border border-white/10 bg-ink-900 p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-volt-500 text-ink-950">
                <Target className="h-7 w-7" strokeWidth={2.5} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold uppercase text-white">Our Mission</h3>
              <p className="mt-3 text-base leading-relaxed text-white/60">
                To make world-class coaching accessible to every person in Kolkata — regardless of
                age, experience or starting point — and to prove that genuine, lasting fitness is
                built through community, consistency and expert guidance, not shortcuts.
              </p>
            </div>
            <div className="reveal rounded-2xl border border-white/10 bg-ink-900 p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-volt-500 text-ink-950">
                <Eye className="h-7 w-7" strokeWidth={2.5} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold uppercase text-white">Our Vision</h3>
              <p className="mt-3 text-base leading-relaxed text-white/60">
                To become Eastern India's most respected wellness destination — a place where
                strength training, mindful movement and nutrition live under one roof, and where
                every member leaves stronger in body, clearer in mind and more connected in spirit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our core"
            highlight="values"
            description="Four principles that shape every session, every interaction and every decision we make."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="reveal group rounded-2xl border border-white/10 bg-ink-900/60 p-6 transition-all hover:-translate-y-1 hover:border-volt-500/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-volt-500/10 text-volt-500 transition-transform group-hover:scale-110">
                  {(() => {
                    const Icon = valueIcons[v.icon as keyof typeof valueIcons];
                    return <Icon className="h-6 w-6" strokeWidth={2} />;
                  })()}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-ink-900/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The People"
            title="Meet the"
            highlight="coaching team"
            description="Certified, experienced and genuinely invested in your progress. Hover any card to read their full profile."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trainers.map((t) => (
              <TrainerCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Take a Look"
            title="Inside the"
            highlight="club"
            description="12,000 sq. ft. of premium training space — strength, functional, cardio, yoga and recovery zones, all under one roof."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {images.gallery.map((src, i) => (
              <div
                key={src}
                className={`reveal group relative overflow-hidden rounded-2xl ${
                  i === 0 ? 'col-span-2 md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`relative ${i === 0 ? 'aspect-square md:aspect-auto md:h-full' : 'aspect-square'}`}>
                  <Image
                    src={src}
                    alt={`FitCore facility view ${i + 1}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ink-950/0 transition-colors group-hover:bg-ink-950/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want to see it"
        highlight="in person?"
        description="Book a free guided tour of the club — try the floor, meet a coach and feel the FitCore energy for yourself."
        buttonLabel="Book a Tour"
      />
    </>
  );
}
