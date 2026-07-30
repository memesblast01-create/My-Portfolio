import { motion } from 'framer-motion'
import { SERVICES } from '../utils/data'

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-40">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="eyebrow">Services</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.02]">What I design.</h2>
          </div>
          <p className="max-w-sm text-sm md:text-base" style={{ color: 'var(--fg-muted)' }}>
            A focused set of disciplines, each treated with the same level of care from first sketch to final file.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: '1200px' }}>
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              data-cursor="hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotateX: -6, rotateY: 6, y: -6, scale: 1.02 }}
              className="relative p-7 rounded-3xl border group overflow-hidden"
              style={{ borderColor: 'var(--line)', background: 'var(--surface)', transformStyle: 'preserve-3d' }}
            >
              <div
                className="absolute -right-10 -top-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'var(--accent)' }}
              />
              <div className="font-mono text-xs mb-8" style={{ color: 'var(--fg-muted)' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display text-xl mb-3">{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
