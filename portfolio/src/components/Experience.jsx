import { motion } from 'framer-motion'
import { EXPERIENCE } from '../utils/data'

export default function Experience() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-page">
        <div className="max-w-lg mb-16">
          <span className="eyebrow">Experience</span>
          <h2 className="font-display font-medium text-[clamp(2rem,4vw,3.2rem)] mt-4 leading-[1.05]">
            The path so far.
          </h2>
        </div>

        <div className="relative max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px" style={{ background: 'var(--line)' }} />
          <motion.div
            className="absolute left-[7px] top-2 w-px origin-top"
            style={{ background: 'var(--accent)' }}
            initial={{ scaleY: 0, height: '100%' }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="space-y-14">
            {EXPERIENCE.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-10"
              >
                <span
                  className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full"
                  style={{ background: 'var(--bg)', border: '2px solid var(--accent)' }}
                />
                <div className="font-mono text-xs uppercase tracking-widest mb-1.5" style={{ color: 'var(--accent)' }}>
                  {item.year}
                </div>
                <h3 className="font-display text-xl">{item.title}</h3>
                <div className="text-sm mt-1" style={{ color: 'var(--fg-muted)' }}>{item.org}</div>
                <p className="mt-2 max-w-md text-sm" style={{ color: 'var(--fg-muted)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
