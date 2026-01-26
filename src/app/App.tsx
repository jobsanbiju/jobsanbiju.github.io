import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { FilmShowcase } from '@/app/components/FilmShowcase';
import { About } from '@/app/components/About';
import { Contact } from '@/app/components/Contact';

export default function App() {
  return (
    <div className="min-h-screen site-bg">
      <Navigation />
      <Hero />
      <FilmShowcase />
      <About />
      <Contact />
    </div>
  );
}
