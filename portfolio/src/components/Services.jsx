import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { SERVICES } from '../utils/data'
import { accentFor } from '../utils/palette'

function ServiceCard({ index, title, desc }) {
  const ref = useRef(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 150, damping: 16 })
  const sry = useSpring(ry, { stiffness: 150, damping: 16 })
  const accent = accentFor(index)

  function onMove(e) {
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    ry.set(px * 12)
    rx.set(-py * 12)
  }
  function onLeave() { rx.set(0); ry.set(0) }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 800 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      data-cursor="hover"
      className="group relative p-7 rounded-2xl border overflow-hidden"
      style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}
    >
      <div
        className="pointer-events-none absolute -inset-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
        style={{ background: `radial-gradient(circle at 50% 0%, ${accent.bgDark}, transparent 70%)` }}
      />
      <span
        className="inline-flex items-center justify-center w-9 h-9 rounded-full font-mono text-xs"
        style={{ background: accent.bg, color: accent.fg }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="font-display text-xl mt-4 mb-2.5">{title}</h3>
      <p className="text-sm" style={{ color: 'var(--fg-muted)' }}>{desc}</p>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36" style={{ background: 'var(--surface)' }}>
      <div className="container-page">
        <div className="max-w-lg mb-16">
          <span className="eyebrow">Services</span>
          <h2 className="font-display font-medium text-[clamp(2rem,4vw,3.2rem)] mt-4 leading-[1.05]">
            Where I can help.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} index={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
