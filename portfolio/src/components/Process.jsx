import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '../utils/data'

export default function Process() {
  return (
    <section id="process" className="py-28 md:py-36">
      <div className="container-page">
        <div className="max-w-lg mb-16">
          <span className="eyebrow">Process</span>
          <h2 className="font-display font-medium text-[clamp(2rem,4vw,3.2rem)] mt-4 leading-[1.05]">
            How a project runs.
          </h2>
        </div>

        <div className="relative">
          <div
            className="hidden md:block absolute top-[27px] left-0 right-0 h-px"
            style={{ background: 'var(--line)' }}
          />
          <motion.div
            className="hidden md:block absolute top-[27px] left-0 h-px origin-left"
            style={{ background: 'var(--accent)' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="grid md:grid-cols-6 gap-8 md:gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="relative z-10 w-3.5 h-3.5 rounded-full mb-6"
                  style={{ background: 'var(--accent)', boxShadow: '0 0 0 5px var(--bg)' }}
                />
                <div className="font-mono text-xs mb-2" style={{ color: 'var(--fg-muted)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display text-lg mb-1.5">{step.title}</h3>
                <p className="text-sm" style={{ color: 'var(--fg-muted)' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
