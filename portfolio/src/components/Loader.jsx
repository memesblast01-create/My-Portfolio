import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [exit, setExit] = useState(false)

  useEffect(() => {
    let raf
    const start = performance.now()
    const total = 1900

    function tick(now) {
      const elapsed = now - start
      const pct = Math.min(100, Math.round((elapsed / total) * 100))
      setProgress(pct)
      if (pct < 100) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setExit(true), 250)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    if (exit) {
      const t = setTimeout(onDone, 850)
      return () => clearTimeout(t)
    }
  }, [exit, onDone])

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center"
          style={{ background: 'var(--bg)' }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="grain" />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-8"
          >
            <div className="font-display text-3xl md:text-4xl tracking-tight" style={{ color: 'var(--fg)' }}>
              Arsalan<span style={{ color: 'var(--accent)' }}>.</span>
            </div>

            <div className="w-56 md:w-72 h-px" style={{ background: 'var(--line)' }}>
              <motion.div
                className="h-px"
                style={{ background: 'var(--accent)', width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            <div className="eyebrow tabular-nums">{String(progress).padStart(2, '0')}%</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
