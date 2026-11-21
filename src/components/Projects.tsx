import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { featuredProject as fp, projects } from '../constants';

const ease = [0.25, 0.1, 0.25, 1] as const;

const Chevron = () => (
  <svg viewBox="0 0 12 12" className="h-[0.7em] w-[0.7em]" aria-hidden="true">
    <path d="M4 2l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// A tiny nod to Grinlyy itself: tap the box, it unwraps.
const UnwrapBox = () => {
  const [opened, setOpened] = useState(false);
  const burst = fp.glyphs.map((g, i) => {
    const angle = (i / fp.glyphs.length) * Math.PI * 2 - Math.PI / 2;
    return { g, x: Math.cos(angle) * 120, y: Math.sin(angle) * 105 };
  });

  return (
    <button
      type="button"
      onClick={() => setOpened((v) => !v)}
      aria-label={opened ? 'Wrap the gift again' : 'Unwrap the gift'}
      className="group relative mx-auto flex h-[300px] w-full max-w-[340px] items-center justify-center rounded-4xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
    >
      <AnimatePresence>
        {opened &&
          burst.map(({ g, x, y }, i) => (
            <motion.span
              key={g}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.2 }}
              animate={{ opacity: 1, x, y, scale: 1, rotate: (i % 2 ? 1 : -1) * 14 }}
              exit={{ opacity: 0, x: 0, y: 0, scale: 0.2 }}
              transition={{ type: 'spring', stiffness: 260, damping: 16, delay: i * 0.03 }}
              className="pointer-events-none absolute text-[36px]"
            >
              {g}
            </motion.span>
          ))}
      </AnimatePresence>

      <motion.span
        animate={opened ? { scale: 0.9, rotate: 0 } : { scale: 1, rotate: [0, -6, 6, -4, 0] }}
        transition={opened ? { duration: 0.3 } : { duration: 0.8, repeat: Infinity, repeatDelay: 2.4 }}
        className="relative z-10 text-[110px] leading-none drop-shadow-[0_20px_40px_rgba(255,80,120,0.35)]"
      >
        {opened ? '💌' : '🎁'}
      </motion.span>

      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[13px] text-white/50 transition-colors group-hover:text-white/80">
        {opened ? 'Tap to wrap it back' : 'Tap to unwrap'}
      </span>
    </button>
  );
};

const Projects = () => (
  <section id="projects">
    {/* Featured: Grinlyy */}
    <div className="bg-black py-20 text-white sm:py-28">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease }}
          className="text-center"
        >
          <p className="eyebrow text-[#ff9f6b]">{fp.kicker}</p>
          <h2 className="mt-2 text-[64px] font-semibold leading-none tracking-tightest sm:text-[96px]">{fp.name}</h2>
          <p className="mt-4 text-[28px] font-semibold leading-tight tracking-apple sm:text-[40px]">
            <span className="text-gradient-warm">{fp.tagline}</span>
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <a href={fp.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Send a gift
            </a>
            <a href={fp.live} target="_blank" rel="noopener noreferrer" className="link-dark">
              Visit grinlyy.com <Chevron />
            </a>
          </div>
        </motion.div>

        <div className="mt-14 grid items-center gap-5 md:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="relative overflow-hidden rounded-5xl bg-gradient-to-br from-[#2a1020] via-[#1a0f1f] to-[#101428] p-6"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-60 blur-3xl"
              style={{ background: 'radial-gradient(circle at 50% 55%, rgba(255,90,120,0.45), transparent 55%)' }}
            />
            <UnwrapBox />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="tile-dark"
          >
            <p className="text-[19px] leading-relaxed text-white/80">{fp.description}</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {fp.stack.map((t) => (
                <li key={t} className="rounded-full border border-night-line px-3 py-1 text-[13px] text-white/75">
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>

    {/* More projects */}
    <div className="bg-paper-gray py-20 sm:py-28">
      <div className="wrap">
        <h2 className="headline">Other projects.</h2>
        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease }}
              whileHover={{ y: -4 }}
              className="tile flex flex-col shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            >
              <span className="text-[56px] leading-none">{p.glyph}</span>
              <p className="mt-6 text-[14px] font-semibold text-ink-muted">{p.kicker}</p>
              <h3 className="mt-1 text-[32px] font-semibold leading-tight tracking-apple">{p.name}</h3>
              <p className="mt-4 flex-1 text-[17px] leading-relaxed text-ink-muted">{p.description}</p>
              <p className="mt-6 text-[13px] text-ink-faint">{p.stack.join(' · ')}</p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="link">
                  Live site <Chevron />
                </a>
                {p.source && (
                  <a href={p.source} target="_blank" rel="noopener noreferrer" className="link">
                    Source <Chevron />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
