import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBrand, setShowBrand] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBrand(entry.intersectionRatio < 0.6);
      },
      { root: null, threshold: [0, 0.6, 1] }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg py-3' : 'bg-black/40 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between md:flex-col md:gap-2 md:justify-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <span
            className={`text-white text-2xl md:text-4xl font-hero tracking-[0.08em] transition-opacity duration-300 ${
              showBrand ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            Job San Biju
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <button
            onClick={() => scrollToSection('work')}
            className="text-white/80 hover:text-white transition-colors text-[0.7rem] uppercase tracking-[0.4em] font-display"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-white/80 hover:text-white transition-colors text-[0.7rem] uppercase tracking-[0.4em] font-display"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white/80 hover:text-white transition-colors text-[0.7rem] uppercase tracking-[0.4em] font-display"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
        >
          {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/85 backdrop-blur-lg mt-4 py-4 border-t border-white/10">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('work')} className="text-white/85 hover:text-white transition-colors text-left">
              Work
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white/85 hover:text-white transition-colors text-left">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white/85 hover:text-white transition-colors text-left">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
