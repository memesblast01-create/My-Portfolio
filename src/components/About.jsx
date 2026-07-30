import { motion } from 'framer-motion'
import { LineReveal } from './RevealText'
import AnimatedCounter from './AnimatedCounter'
import portrait from '../assets/portrait.jpg'

const STATS = [
  { value: 7, suffix: '+', label: 'Years of experience' },
  { value: 120, suffix: '+', label: 'Projects completed' },
  { value: 40, suffix: '+', label: 'Happy clients' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40" style={{ background: 'var(--surface)' }}>
      <div className="container-page grid md:grid-cols-12 gap-14 md:gap-10 items-start">
        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="sticky top-32"
          >
            <div className="relative rounded-[1.75rem] overflow-hidden border" style={{ borderColor: 'var(--line)' }}>
              <img src={portrait} alt="Arsalan at work" className="w-full h-[420px] object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10">
              {STATS.map((s) => (
                <div key={s.label}>
                  <AnimatedCounter value={s.value} suffix={s.suffix} className="font-display text-3xl md:text-4xl" />
                  <div className="eyebrow mt-2 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-7">
          <span className="eyebrow">About</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 mb-10 leading-[1.02]">
            Design that earns<br /> its restraint.
          </h2>

          <LineReveal
            className="space-y-5 text-lg md:text-xl leading-relaxed max-w-xl"
            style={{ color: 'var(--fg-muted)' }}
            lines={[
              'I started in print, learning what a design looks like once ink meets paper and every choice becomes permanent.',
              'That discipline still shapes how I work today: fewer decisions, made deliberately, over more decisions made quickly.',
              'Now I split my time between brand identity, packaging, and the occasional motion system, working with studios and independent founders who care as much about the craft as the outcome.',
            ]}
          />

          <div className="mt-14 grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl mb-3">Career journey</h3>
              <p style={{ color: 'var(--fg-muted)' }} className="text-sm leading-relaxed">
                From an in-house print studio to leading identity work at Studio Norrland, now independent and
                selective about the clients I take on.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl mb-3">Creative philosophy</h3>
              <p style={{ color: 'var(--fg-muted)' }} className="text-sm leading-relaxed">
                Systems before decoration. A brand should still work in one color, printed badly, at three inches wide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
