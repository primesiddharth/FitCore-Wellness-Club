import { Check, Minus } from 'lucide-react';
import PageHero from '@/components/page-hero';
import SectionHeading from '@/components/section-heading';
import PricingCard from '@/components/pricing-card';
import FaqList from '@/components/faq-list';
import CtaBanner from '@/components/cta-banner';
import { pricingPlans, images } from '@/lib/site-data';

const comparisonRows = [
  { label: 'Gym floor & cardio access', basic: true, premium: true, elite: true },
  { label: 'Locker & shower facilities', basic: true, premium: true, elite: true },
  { label: 'Fitness assessment', basic: 'Quarterly', premium: 'Monthly', elite: 'Bi-weekly' },
  { label: 'Group classes per week', basic: '2', premium: 'Unlimited', elite: 'Unlimited' },
  { label: 'Personal training sessions', basic: '—', premium: '2 / month', elite: '8 / month' },
  { label: 'Customised training programme', basic: false, premium: true, elite: true },
  { label: 'Nutrition coaching', basic: false, premium: 'Starter guide', elite: '1-on-1 coaching' },
  { label: 'Priority class booking', basic: false, premium: false, elite: true },
  { label: 'Recovery suite (sauna & ice bath)', basic: false, premium: false, elite: true },
  { label: 'Guest passes', basic: false, premium: '1 / month', elite: 'Unlimited' },
] as const;

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-volt-500 text-ink-950">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
    );
  if (value === false)
    return (
      <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-white/30">
        <Minus className="h-3.5 w-3.5" />
      </span>
    );
  return <span className="text-sm font-semibold text-white/80">{value}</span>;
}

export default function MembershipPage() {
  return (
    <>
      <PageHero
        crumb="Membership"
        title="Choose Your"
        highlight="Plan"
        subtitle="No lock-in, no tricks. Three flexible plans designed to match your goals, your schedule and your budget."
        image={images.ctaBanner}
      />

      {/* Pricing cards */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Membership Plans"
            title="Invest in"
            highlight="yourself"
            description="Every plan includes full gym access, locker facilities and a fitness assessment. Upgrade, downgrade or cancel anytime."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-center">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
          <p className="reveal mt-8 text-center text-xs text-white/40">
            Prices are [PLACEHOLDER] and exclusive of taxes. Annual plans save up to 20%.
          </p>
        </div>
      </section>

      {/* What's included — comparison */}
      <section className="bg-ink-900/40 py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Compare Plans"
            title="What's"
            highlight="included"
            description="A side-by-side look at exactly what each membership unlocks."
          />

          <div className="reveal mt-12 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="bg-ink-900">
                  <th className="px-5 py-4 text-left font-display text-xs font-bold uppercase tracking-wider text-white/50">Feature</th>
                  <th className="px-5 py-4 text-center font-display text-sm font-bold uppercase text-white/70">Basic</th>
                  <th className="px-5 py-4 text-center font-display text-sm font-bold uppercase text-volt-500">Premium</th>
                  <th className="px-5 py-4 text-center font-display text-sm font-bold uppercase text-white/70">Elite</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-ink-950/40' : 'bg-ink-900/30'}>
                    <td className="px-5 py-4 text-sm font-medium text-white/80">{row.label}</td>
                    <td className="px-5 py-4 text-center"><Cell value={row.basic} /></td>
                    <td className="px-5 py-4 text-center bg-volt-500/[0.03]"><Cell value={row.premium} /></td>
                    <td className="px-5 py-4 text-center"><Cell value={row.elite} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Questions"
            title="Membership"
            highlight="FAQ"
            description="Everything you need to know before joining. Still have a question? Just give us a call."
          />
          <div className="mt-10">
            <FaqList />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Still deciding?"
        highlight="Try us free."
        description="Your first day is on us — tour the club, take a class and meet a coach before you decide on a plan."
        buttonLabel="Claim Your Free Trial"
      />
    </>
  );
}
