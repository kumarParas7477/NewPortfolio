import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks, profile } from '../constants';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-[rgba(251,251,253,0.8)] backdrop-blur-xl backdrop-saturate-150 border-b border-black/[0.06]' : 'bg-transparent'
      }`}
    >
      <nav className="wrap flex h-12 items-center justify-between text-[12px] text-ink/80">
        <a href="#top" className="text-[15px] font-semibold tracking-apple text-ink" onClick={() => setOpen(false)}>
          Paras<span className="text-ink-faint">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="transition-colors hover:text-ink">
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resume}
          download
          className="hidden rounded-full bg-accent px-3 py-1 text-[12px] text-white transition-colors hover:bg-accent-hover md:inline-flex"
        >
          Get resume
        </a>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative -mr-2 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className={`absolute h-px w-4 bg-ink transition-transform duration-300 ${open ? 'rotate-45' : '-translate-y-[4px]'}`} />
          <span className={`absolute h-px w-4 bg-ink transition-transform duration-300 ${open ? '-rotate-45' : 'translate-y-[4px]'}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100dvh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden bg-[rgba(251,251,253,0.97)] md:hidden"
          >
            <ul className="wrap space-y-3 pt-6">
              {[...navLinks, { id: 'resume-download', title: 'Get resume' }].map((link, i) => (
                <motion.li key={link.id} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i + 0.1 }}>
                  <a
                    href={link.id === 'resume-download' ? profile.resume : `#${link.id}`}
                    download={link.id === 'resume-download' || undefined}
                    onClick={() => setOpen(false)}
                    className="block text-[28px] font-semibold tracking-apple text-ink"
                  >
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
