import { motion } from 'motion/react';
import aboutImg from '../../../images/about.JPG';
import HalationText from './HalationText';

export function About() {
  return (
    <section id="about" className="relative min-h-[85vh] overflow-hidden section-fade">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutImg})` }}
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 px-4 py-24 md:py-28">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6 font-display tracking-[0.2em] uppercase">
              <HalationText glowColor="rgba(255,60,60,1)" blurAmount="14px" opacity={0.65}>
                Meet Job
              </HalationText>
            </h2>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6">
              I'm Job San Biju, a filmmaker and cinematographer focused on capturing honest moments
              with a cinematic edge. I care about texture, pacing, and the quiet details that make
              a story feel real.
            </p>
            <p className="text-white/75 text-base md:text-lg leading-relaxed">
              From documentaries and commercials to music videos and narrative work, my goal is
              always the same: make each frame feel intentional and emotionally grounded.
            </p>
            <div className="mt-10 flex justify-center gap-6 text-white/70 text-xs uppercase tracking-[0.45em] font-display">
              <span>Documentary</span>
              <span>Commercial</span>
              <span>Narrative</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
