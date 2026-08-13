import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { RevealOnScroll } from '@/components/reveal-on-scroll';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
