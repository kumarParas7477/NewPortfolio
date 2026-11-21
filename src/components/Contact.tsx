import { motion } from 'framer-motion';
import { profile } from '../constants';

const ease = [0.25, 0.1, 0.25, 1] as const;

const Chevron = () => (
  <svg viewBox="0 0 12 12" className="h-[0.7em] w-[0.7em]" aria-hidden="true">
    <path d="M4 2l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Contact = () => (
  <section id="contact" className="bg-black py-24 text-white sm:py-32">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease }}
      className="wrap text-center"
    >
      <h2 className="text-[44px] font-semibold leading-[1.05] tracking-tightest sm:text-[72px]">Contact.</h2>
      <p className="subhead mx-auto mt-5 max-w-[540px] text-white/65">
        Email is the fastest way to reach me. I’m open to senior software engineering roles.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
        <a href={`mailto:${profile.email}`} className="btn-primary">
          Email me
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link-dark">
          LinkedIn <Chevron />
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link-dark">
          GitHub <Chevron />
        </a>
      </div>

      <p className="mt-8 text-[15px] text-white/45">{profile.email}</p>
    </motion.div>

    <div className="wrap mt-24 flex flex-col gap-2 border-t border-night-line pt-5 text-[12px] text-white/40 sm:flex-row sm:justify-between">
      <p>Copyright © {new Date().getFullYear()} Paras Kumar</p>
      <p>{profile.location}</p>
    </div>
  </section>
);

export default Contact;
