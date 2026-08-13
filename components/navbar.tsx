'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Dumbbell } from 'lucide-react';
import { navLinks, site } from '@/lib/site-data';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-ink-950/90 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="FitCore Wellness Club home">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-volt-500 text-ink-950 shadow-lg shadow-volt-500/30 group-hover:scale-110 transition-transform">
            <Dumbbell className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-extrabold uppercase tracking-tight text-white">
            Fit<span className="text-volt-500">Core</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'relative text-sm font-semibold uppercase tracking-wide transition-colors',
                  isActive(link.href) ? 'text-volt-500' : 'text-white/80 hover:text-white'
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-1.5 left-0 h-0.5 bg-volt-500 transition-all duration-300',
                    isActive(link.href) ? 'w-full' : 'w-0'
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right: phone + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-volt-500 transition-colors"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <Link
            href="/membership"
            className="rounded-lg bg-volt-500 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-ink-950 shadow-lg shadow-volt-500/30 transition-all hover:bg-volt-400 hover:scale-105"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 bg-ink-950/95 backdrop-blur-md border-t border-white/10',
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <ul className="px-4 sm:px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'block rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide transition-colors',
                  isActive(link.href)
                    ? 'bg-volt-500/10 text-volt-500'
                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 flex flex-col gap-3 px-4">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-sm font-semibold text-white/90"
            >
              <Phone className="h-4 w-4 text-volt-500" />
              {site.phone}
            </a>
            <Link
              href="/membership"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-volt-500 px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-ink-950"
            >
              Join Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
