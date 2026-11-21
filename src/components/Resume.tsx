import { motion } from 'framer-motion';
import { profile, specs } from '../constants';

const ease = [0.25, 0.1, 0.25, 1] as const;

// The resume, laid out like a tech-specs page.
const Resume = () => (
  <section id="specs" className="bg-paper-gray py-20 sm:py-28">
    <div className="wrap">
      <div className="flex flex-col gap-6 border-b border-paper-line pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="headline">Tech Specs.</h2>
          <p className="mt-3 text-[17px] text-ink-muted">
            Paras Kumar · {profile.role} · {profile.location}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a href={profile.resume} download className="btn-primary">
            Download PDF
          </a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            View
          </a>
        </div>
      </div>

      <dl className="divide-y divide-paper-line">
        {specs.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.05, ease }}
            className="grid gap-2 py-7 sm:grid-cols-[200px_1fr] sm:gap-8"
          >
            <dt className="text-[21px] font-semibold tracking-apple">{s.label}</dt>
            <dd>
              <p className="text-[24px] font-semibold tracking-apple">{s.value}</p>
              <p className="mt-1 text-[17px] text-ink-muted">{s.detail}</p>
            </dd>
          </motion.div>
        ))}
      </dl>
    </div>
  </section>
);

export default Resume;
