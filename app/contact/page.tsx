import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, LucideIcon } from 'lucide-react';
import PageHero from '@/components/page-hero';
import SectionHeading from '@/components/section-heading';
import ContactForm from '@/components/contact-form';
import { site, images } from '@/lib/site-data';

interface InfoCard {
  icon: LucideIcon;
  title: string;
  lines: string[];
  href?: string;
  hrefLabel?: string;
}

const infoCards: InfoCard[] = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: [site.address, site.addressShort],
    href: 'https://maps.google.com/?q=Park+Street+Kolkata',
    hrefLabel: 'Get directions',
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: [site.phone, 'Mon–Sat, 6 AM – 10 PM'],
    href: site.phoneHref,
    hrefLabel: 'Tap to call',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: [site.email, 'We reply within 24 hours'],
    href: site.emailHref,
    hrefLabel: 'Send an email',
  },
  {
    icon: Clock,
    title: 'Operating Hours',
    lines: [site.hours, site.hoursSunday],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title="Let's"
        highlight="Talk"
        subtitle="Book your free trial, ask a question or just say hello. We respond to every message within 24 hours."
        image={images.contactInterior}
      />

      {/* Info cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className="reveal group rounded-2xl border border-white/10 bg-ink-900/60 p-6 transition-all hover:-translate-y-1 hover:border-volt-500/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-volt-500/10 text-volt-500 transition-transform group-hover:scale-110">
                  <card.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-display text-base font-bold uppercase tracking-wide text-white">
                  {card.title}
                </h3>
                <div className="mt-2 space-y-0.5 text-sm text-white/60">
                  {card.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
                {card.href && (
                  <a
                    href={card.href}
                    className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-volt-500 transition-colors hover:text-volt-400"
                  >
                    {card.hrefLabel} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + image */}
      <section className="bg-ink-900/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: image + supporting copy */}
            <div className="reveal relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[3/4]">
                <Image
                  src={images.contactInterior}
                  alt="FitCore Wellness Club interior"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-display text-2xl font-bold text-white">
                    Drop by for a tour
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    No appointment needed. Walk in any day and a coach will show you around.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <SectionHeading
                eyebrow="Send a Message"
                align="left"
                title="Book your"
                highlight="free trial"
                description="Fill in the form and we will get back within 24 hours to schedule your visit."
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Find Us"
            title="We are on"
            highlight="Park Street"
            description="Centrally located on Park Street Extension, with on-site parking and metro access minutes away."
          />
          <div className="reveal mt-10 overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="FitCore Wellness Club location on Google Maps"
              src="https://www.google.com/maps?q=Park+Street+Extension,+Kolkata,+West+Bengal+700016&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) contrast(0.9)' }}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
