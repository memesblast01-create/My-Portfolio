import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '../utils/data'

export default function Process() {
  return (
    <section id="process" className="py-28 md:py-40" style={{ background: 'var(--surface)' }}>
      <div className="container-page">
        <span className="eyebrow">Process</span>
        <h2 className="font-display text-4xl md:text-6xl mt-4 mb-20 leading-[1.02]">How a project moves.</h2>

        <div className="relative">
          <div
            className="hidden md:block absolute left-0 right-0 top-6 h-px"
            style={{ background: 'var(--line)' }}
          />
          <motion.div
            className="hidden md:block absolute left-0 top-6 h-px origin-left"
            style={{ background: 'var(--accent)' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="grid md:grid-cols-6 gap-10 md:gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div
                  className="hidden md:flex w-3 h-3 rounded-full mb-6 relative z-10"
                  style={{ background: 'var(--accent)' }}
                />
                <div className="font-mono text-xs mb-3" style={{ color: 'var(--fg-muted)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display text-lg mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
