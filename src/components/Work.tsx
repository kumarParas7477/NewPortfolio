import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { lineup, testimonials } from '../constants';

const ease = [0.25, 0.1, 0.25, 1] as const;

const Work = () => {
  const [activeId, setActiveId] = useState(lineup[0].id);
  const active = lineup.find((m) => m.id === activeId) ?? lineup[0];

  return (
    <section id="lineup" className="bg-paper py-14 sm:py-28">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="text-center"
        >
          <h2 className="headline">Experience.</h2>
          <p className="subhead mx-auto mt-4 max-w-[560px] text-ink-muted">Pick a job to see what I worked on.</p>
        </motion.div>

        {/* Model picker */}
        <div className="mt-7 flex justify-center sm:mt-10">
          <div role="tablist" aria-label="Career models" className="flex max-w-full gap-1 overflow-x-auto rounded-full bg-paper-gray p-1">
            {lineup.map((m) => (
              <button
                key={m.id}
                role="tab"
                aria-selected={m.id === activeId}
                onClick={() => setActiveId(m.id)}
                className={`relative shrink-0 rounded-full px-3.5 py-1.5 text-[13px] sm:px-5 sm:py-2 sm:text-[14px] transition-colors sm:px-5 ${
                  m.id === activeId ? 'text-ink' : 'text-ink-muted hover:text-ink'
                }`}
              >
                {m.id === activeId && (
                  <motion.span
                    layoutId="model-pill"
                    className="absolute inset-0 rounded-full bg-white shadow-[0_1px_6px_rgba(0,0,0,0.12)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="relative">{m.model}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected model */}
        <div className="mt-6 overflow-hidden rounded-[24px] bg-paper-gray sm:mt-8 sm:rounded-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              role="tabpanel"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease }}
              className="grid gap-6 p-5 sm:gap-8 sm:p-12 md:grid-cols-[0.9fr_1.1fr] md:gap-12"
            >
              <div>
                <div className={`h-12 w-12 rounded-[14px] bg-gradient-to-br sm:h-20 sm:w-20 sm:rounded-[22px] ${active.color} shadow-lg`} aria-hidden="true" />
                <div className="mt-4 flex items-center gap-3 sm:mt-6">
                  {active.isNew && <span className="text-[14px] font-semibold text-[#bf4800]">New</span>}
                  <span className="text-[14px] text-ink-faint">{active.year}</span>
                </div>
                <h3 className="mt-1 text-[32px] font-semibold leading-none tracking-tightest sm:text-[56px]">
                  Paras <span className={`bg-gradient-to-r ${active.color} bg-clip-text text-transparent`}>{active.model}</span>
                </h3>
                <p className="mt-2 text-[17px] font-semibold leading-snug tracking-apple text-ink-soft sm:mt-3 sm:text-[21px]">{active.company}</p>

                <dl className="mt-6 space-y-3 border-t border-paper-line pt-5 text-[14px] sm:mt-8 sm:space-y-4 sm:pt-6 sm:text-[15px]">
                  {[
                                        ['Role', active.title],
                    ['Shipped', `${active.date} · ${active.place}`],
                    ['Focus', active.chip],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-4">
                      <dt className="w-20 shrink-0 text-ink-faint">{k}</dt>
                      <dd className="font-medium text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <p className="text-[14px] font-semibold uppercase tracking-wider text-ink-faint">What I did</p>
                <ul className="mt-3 space-y-3 sm:mt-4 sm:space-y-4">
                  {active.points.map((pt, i) => (
                    <motion.li
                      key={pt}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 * i + 0.1, duration: 0.4, ease }}
                      className="flex gap-3 text-[15px] leading-relaxed text-ink-soft sm:text-[17px]"
                    >
                      <span className={`mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br ${active.color}`} />
                      {pt}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Testimonials */}
        <div className="mt-14 sm:mt-28">
          <h2 className="headline text-center">From people I’ve worked with.</h2>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease }}
                className="tile flex flex-col bg-paper-gray"
              >
                <blockquote className="flex-1 text-[15px] leading-relaxed text-ink-soft sm:text-[19px]">“{t.quote}”</blockquote>
                <figcaption className="mt-6">
                  <p className="text-[15px] font-semibold sm:text-[17px]">{t.name}</p>
                  <p className="text-[14px] text-ink-muted">{t.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
