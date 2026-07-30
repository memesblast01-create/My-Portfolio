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

  const current = TESTIMONIALS[index]

  return (
    <section className="py-28 md:py-40" style={{ background: 'var(--surface)' }}>
      <div className="container-page">
        <span className="eyebrow block text-center">Testimonials</span>
        <h2 className="font-display text-4xl md:text-6xl mt-4 mb-16 text-center leading-[1.02]">What clients say.</h2>

        <div
          className="max-w-2xl mx-auto relative rounded-[2rem] p-10 md:p-14 border backdrop-blur-xl text-center"
          style={{
            borderColor: 'var(--line)',
            background: 'color-mix(in srgb, var(--bg) 55%, transparent)',
            boxShadow: '0 30px 60px -30px rgba(0,0,0,0.25)',
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="mx-auto mb-6 opacity-40" size={28} />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-xl md:text-2xl leading-snug mb-8">&ldquo;{current.quote}&rdquo;</p>
              <div className="flex items-center justify-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-display text-sm"
                  style={{ background: 'color-mix(in srgb, var(--accent) 30%, var(--surface))' }}
                >
                  {current.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div className="text-left">
                  <div className="font-medium text-sm">{current.name}</div>
                  <div className="eyebrow">{current.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-2 mt-10">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                aria-label={`Show testimonial from ${t.name}`}
                onClick={() => setIndex(i)}
                data-cursor="hover"
                className="h-1.5 rounded-full transition-all duration-300"
                style={{ width: i === index ? '28px' : '8px', background: i === index ? 'var(--accent)' : 'var(--line)' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
