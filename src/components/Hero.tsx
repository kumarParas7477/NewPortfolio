import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { highlights, profile } from '../constants';

const ease = [0.25, 0.1, 0.25, 1] as const;

const Chevron = () => (
  <svg viewBox="0 0 12 12" className="h-[0.7em] w-[0.7em]" aria-hidden="true">
    <path d="M4 2l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <section id="top" ref={ref} className="relative overflow-hidden bg-paper pt-24 pb-12 sm:pt-36 sm:pb-24">
        <motion.div style={{ scale, opacity }} className="wrap text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="eyebrow text-ink-muted"
          >
            {profile.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className="mt-2 text-[44px] font-semibold leading-[1.02] tracking-tightest sm:text-[88px] md:text-[112px]"
          >
            Paras Kumar.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="subhead mx-auto mt-4 max-w-[640px] sm:mt-6 text-ink-muted"
          >
            I’ve spent seven years on the parts of products that have to hold up under load, like JioHotstar’s ads
            during IPL and the shared libraries MakeMyTrip’s apps are built on. These days I’m at ServiceNow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="mt-7 flex flex-wrap sm:mt-9 items-center justify-center gap-x-6 gap-y-4"
          >
            <a href="#projects" className="btn-primary">
              Projects
            </a>
            <a href="#specs" className="link">
              Resume <Chevron />
            </a>
          </motion.div>
        </motion.div>

        {/* Soft colour wash, like a product glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[62%] -z-0 h-[420px] w-[900px] max-w-[160vw] -translate-x-1/2 rounded-full opacity-[0.18] blur-[100px]"
          style={{ background: 'conic-gradient(from 90deg, #0090f7, #ba62fc, #f2416b, #f55600, #0090f7)' }}
        />
      </section>

      {/* Highlights bento */}
      <section aria-label="Highlights" className="bg-paper-gray py-14 sm:py-28">
        <div className="wrap">
          <h2 className="headline">Numbers.</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5">
            {highlights.map((h, i) => (
              <motion.div
                key={h.value}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease }}
                className={
                  h.tone === 'dark'
                    ? 'tile-dark flex min-h-[150px] flex-col justify-between sm:min-h-[260px]'
                    : h.tone === 'gradient'
                      ? 'tile flex min-h-[150px] flex-col justify-between bg-gradient-to-br from-[#fdf1f4] via-white to-[#eef4ff] sm:min-h-[260px]'
                      : 'tile flex min-h-[150px] flex-col justify-between sm:min-h-[260px]'
                }
              >
                <p className={`text-[13px] font-semibold sm:text-[17px] ${h.tone === 'dark' ? 'text-white/60' : 'text-ink-muted'}`}>{h.unit}</p>
                <div>
                  <p
                    className={`text-[40px] font-semibold leading-none tracking-tightest sm:text-[96px] ${
                      h.tone === 'gradient' ? 'text-gradient' : ''
                    }`}
                  >
                    {h.value}
                  </p>
                  <p className={`mt-2 max-w-[320px] text-[13px] leading-snug sm:mt-3 sm:text-[17px] ${h.tone === 'dark' ? 'text-white/80' : 'text-ink-soft'}`}>
                    {h.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
