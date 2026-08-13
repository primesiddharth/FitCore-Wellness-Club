import './globals.css';
import type { Metadata } from 'next';
import { Inter, Archivo } from 'next/font/google';
import SiteShell from '@/components/site-shell';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'FitCore Wellness Club | Transform Your Body. Elevate Your Life.',
  description:
    'FitCore Wellness Club in Kolkata — premium gym, group classes, yoga, personal training and nutrition coaching. Join 2000+ members transforming their lives.',
  keywords: [
    'gym Kolkata',
    'fitness club',
    'personal training',
    'yoga classes',
    'CrossFit',
    'Zumba',
    'wellness center',
    'FitCore',
  ],
  openGraph: {
    title: 'FitCore Wellness Club | Transform Your Body. Elevate Your Life.',
    description:
      'Premium fitness club in Kolkata. Strength, group classes, yoga, personal training and nutrition coaching.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable}`}>
      <body className="bg-ink-950 text-white">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
