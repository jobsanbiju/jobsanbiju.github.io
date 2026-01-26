import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import bgVideo from '../../../videos/visual_storyteller.mov';
import HalationText from './HalationText';

export function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* softer overlay above video but below camera layers/content */}
        <div style={{ zIndex: 5 }} className="absolute inset-0 bg-black/30 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="relative inline-block w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 text-5xl md:text-7xl text-white mb-6 font-hero tracking-[0.08em]"
          >
            <HalationText glowColor="rgba(255,60,60,1)" blurAmount="12px" opacity={0.68}>
              Job San Biju
            </HalationText>
          </motion.h1>
        </div>

        <div className="relative inline-block w-full max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-20 text-xl md:text-2xl text-white/80 mb-8"
          >
            <HalationText glowColor="rgba(255,80,70,0.98)" blurAmount="12px" opacity={0.62}>
              <span className="block text-[0.95rem] md:text-[1.1rem] uppercase tracking-[0.45em] text-white/75 whitespace-nowrap">
                CINEMATOGRAPHER · FILMMAKER · COLORIST
              </span>
              <span className="mt-3 block text-sm md:text-base text-white/85">
                Visual storytelling shaped through light, motion, and tone.
              </span>
            </HalationText>
          </motion.p>
        </div>

        <div className="relative inline-block">
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => {
              const element = document.getElementById('work');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="relative z-20 border border-white/40 bg-white/10 text-white px-8 py-4 rounded-full hover:border-white/70 hover:bg-white/15 transition-all inline-flex items-center gap-2 group"
          >
            <Play className="size-5 group-hover:scale-110 transition-transform" />
            <HalationText glowColor="rgba(255,80,70,0.95)" blurAmount="8px" opacity={0.55}>
              View My Work
            </HalationText>
          </motion.button>
        </div>

      </div>
      {/* Scroll Indicator (section-level so X/Y positioning matches previous layout) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2 halation-halo scroll-indicator-glow"
        >
          <HalationText glowColor="rgba(255,80,70,0.9)" blurAmount="8px" opacity={0.5}>
            <span className="w-1 h-2 bg-white/50 rounded-full block" />
          </HalationText>
        </motion.div>
      </motion.div>
    </section>
  );
}
