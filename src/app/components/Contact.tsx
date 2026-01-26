import { motion } from 'motion/react';
import { Instagram, Mail } from 'lucide-react';
import HalationText from './HalationText';

export function Contact() {
  return (
    <section id="contact" className="section-surface section-fade py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            <HalationText glowColor="rgba(255,60,60,1)" blurAmount="16px" opacity={0.85}>
              Let's Create Together
            </HalationText>
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Have a project in mind? I'd love to hear about it. Whether it's a feature film, commercial, music video, or documentary, let's bring your vision to life.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-white/85">
            <a
              href="mailto:jobsanbiju4@gmail.com"
              className="inline-flex items-center gap-3 hover:text-white transition-colors"
            >
              <Mail className="size-5" />
              <span>jobsanbiju4@gmail.com</span>
            </a>
            <a
              href="https://instagram.com/jobsanbiju"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 hover:text-white transition-colors"
            >
              <Instagram className="size-5" />
              <span>@jobsanbiju</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="container mx-auto max-w-7xl mt-20 pt-8 border-t border-white/15 text-center text-white/70"
      >
        <p>© 2026 Job San Biju. All rights reserved.</p>
        <p className="mt-2 text-sm italic font-serif text-white/80">I Love You</p>
      </motion.div>
    </section>
  );
}
