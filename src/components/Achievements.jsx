import { motion } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'
import { ACHIEVEMENTS } from '../utils/data'

export default function Achievements() {
  return (
    <section className="py-24 md:py-32" style={{ background: 'var(--fg)', color: 'var(--bg)' }}>
      <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-10">
        {ACHIEVEMENTS.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="text-center md:text-left"
          >
            <div className="font-display text-4xl md:text-5xl">
              <AnimatedCounter value={a.value} suffix={a.suffix} />
            </div>
            <div className="mt-3 font-mono text-xs uppercase tracking-widest opacity-60">{a.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
