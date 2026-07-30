import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', duration = 1.8, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString())

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration, ease: [0.22, 1, 0.36, 1] })
      return controls.stop
    }
  }, [inView, value, duration, count])

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}
