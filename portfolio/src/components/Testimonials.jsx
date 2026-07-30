import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '../utils/data'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 5200)
    return () => clearInterval(t)
  }, [paused])

  const t = TESTIMONIALS[index]

  return (
    <section className="py-28 md:py-36" style={{ background: 'var(--surface)' }}>
      <div className="container-page">
        <div className="max-w-lg mb-16">
          <span className="eyebrow">Testimonials</span>
          <h2 className="font-display font-medium text-[clamp(2rem,4vw,3.2rem)] mt-4 leading-[1.05]">
            Clients say the work speaks for itself.
          </h2>
        </div>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative max-w-2xl mx-auto p-10 md:p-14 rounded-3xl border overflow-hidden"
          style={{
            borderColor: 'var(--line)',
            background: 'color-mix(in srgb, var(--bg) 60%, transparent)',
            backdropFilter: 'blur(18px)',
            boxShadow: '0 20px 60px -30px rgba(0,0,0,0.25)',
          }}
        >
          <Quote size={30} style={{ color: 'var(--accent)' }} />
          <AnimatePresence mode="wait">
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6"
            >
              <p className="font-display text-xl md:text-2xl leading-snug">"{t.quote}"</p>
              <div className="mt-8 flex items-center gap-4">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="w-11 h-11 rounded-full flex items-center justify-center font-display text-sm"
                  style={{ background: 'var(--accent)', color: 'var(--bg)' }}
                >
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </motion.div>
                <div>
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-muted)' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex gap-2">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.name}
                aria-label={`Show testimonial ${i + 1}`}
                data-cursor="hover"
                onClick={() => setIndex(i)}
                className="h-1 rounded-full transition-all duration-300"
                style={{
                  width: i === index ? '28px' : '10px',
                  background: i === index ? 'var(--accent)' : 'var(--line)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
