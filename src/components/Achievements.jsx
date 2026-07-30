import { motion } from 'framer-motion'
import { ACHIEVEMENTS } from '../utils/data'
import AnimatedCounter from './AnimatedCounter'

export default function Achievements() {
  return (
    <section className="py-24 md:py-32" style={{ background: 'var(--fg)', color: 'var(--bg)' }}>
      <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-10">
        {ACHIEVEMENTS.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="text-center md:text-left"
          >
            <AnimatedCounter value={item.value} suffix={item.suffix} className="font-display text-4xl md:text-6xl" />
            <div className="font-mono text-xs uppercase tracking-widest mt-3 opacity-60">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
