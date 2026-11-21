import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../constants';

const ease = [0.25, 0.1, 0.25, 1] as const;

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  // Slow zoom-out as the photo scrolls through, like Apple's product shots.
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section id="about" className="bg-paper py-20 sm:py-28">
      <div className="wrap grid items-center gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
        <motion.figure
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease }}
        >
          <div className="overflow-hidden rounded-5xl bg-paper-gray">
            <picture>
              <source srcSet="/photos/berlin.webp" type="image/webp" />
              <motion.img
                style={{ scale }}
                src="/photos/berlin.jpg"
                alt="Paras crossing a street in front of the Alte Nationalgalerie in Berlin"
                width={1200}
                height={1600}
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="mt-3 text-[13px] text-ink-faint">Museum Island, Berlin. December 2024.</figcaption>
        </motion.figure>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
        >
          <h2 className="headline">Hi, I’m Paras.</h2>
          <p className="subhead mt-6 text-ink-muted">
            I live in {profile.location.split(',')[0]} and work at ServiceNow. Most evenings I’m building something of my
            own.
          </p>
          <p className="subhead mt-4 text-ink-muted">When I’m not at a keyboard, I’m usually travelling somewhere new.</p>        </motion.div>
      </div>
    </section>
  );
};

export default About;
