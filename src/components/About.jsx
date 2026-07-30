import { motion } from 'framer-motion'
import { LineReveal } from './RevealText'
import AnimatedCounter from './AnimatedCounter'
import portrait from '../assets/images/portrait-cutout.webp'

const STATS = [
  { value: 7, suffix: '', label: 'Years experience' },
  { value: 120, suffix: '+', label: 'Projects completed' },
  { value: 46, suffix: '', label: 'Happy clients' },
]

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="container-page grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden order-2 md:order-1"
        >
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(165deg, var(--stone) 0%, var(--surface) 55%, var(--accent-2) 150%)' }}
          />
          <img
            src={portrait}
            alt="Arsalan at work"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[102%] w-auto max-w-none object-contain object-bottom grayscale"
          />
          <div className="absolute inset-0" style={{ background: 'color-mix(in srgb, var(--charcoal) 12%, transparent)' }} />
        </motion.div>

        <div className="order-1 md:order-2">
          <span className="eyebrow">About</span>
          <h2 className="font-display font-medium text-[clamp(2rem,4vw,3.2rem)] mt-4 leading-[1.05]">
            A quiet, editorial approach<br /> to visual identity.
          </h2>

          <LineReveal
            className="mt-8 space-y-4 max-w-lg text-base md:text-lg"
            lines={[
              "I started in print — small-run zines and packaging for local shops — before moving into full identity systems.",
              "Every project starts the same way: understand the category, then design the smallest system that could possibly work.",
              "I care less about trends and more about whether the work still looks right in five years.",
            ]}
          />

          <div className="mt-14 grid grid-cols-3 gap-6 border-t pt-8" style={{ borderColor: 'var(--line)' }}>
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl" style={{ color: 'var(--accent)' }}>
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 font-mono text-[0.65rem] uppercase tracking-widest" style={{ color: 'var(--fg-muted)' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
