import Link from 'next/link';
import { Dumbbell, Phone, Mail, MapPin, Clock, Instagram, Facebook, Heart } from 'lucide-react';
import { site, navLinks, programs } from '@/lib/site-data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink-950 border-t border-white/10">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-volt-500 via-volt-400 to-volt-600" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-volt-500 text-ink-950">
                <Dumbbell className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-xl font-extrabold uppercase tracking-tight text-white">
                Fit<span className="text-volt-500">Core</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
              {site.tagline} A premium fitness and wellness community in the heart of Kolkata —
              built to help you become your strongest self.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Follow FitCore on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors hover:border-volt-500 hover:text-volt-500"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Follow FitCore on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors hover:border-volt-500 hover:text-volt-500"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-volt-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Programs
            </h3>
            <ul className="mt-4 space-y-2.5">
              {programs.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <Link
                    href="/programs"
                    className="text-sm text-white/60 transition-colors hover:text-volt-500"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-volt-500" />
                <span>{site.address}</span>
              </li>
              <li>
                <a href={site.phoneHref} className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-volt-500">
                  <Phone className="h-4 w-4 shrink-0 text-volt-500" />
                  <span>{site.phone}</span>
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-volt-500">
                  <Mail className="h-4 w-4 shrink-0 text-volt-500" />
                  <span>{site.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-volt-500" />
                <span>
                  {site.hours}
                  <br />
                  {site.hoursSunday}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 text-center">
        <p className="text-sm text-white/50">
          &copy; {year} {site.name}. All rights reserved.
        </p>
        <p className="mt-1.5 text-xs text-white/30">
          Made with <Heart className="inline h-3 w-3 fill-volt-500 text-volt-500" aria-label="love" /> by Creyotech
        </p>
      </div>
    </footer>
  );
}
