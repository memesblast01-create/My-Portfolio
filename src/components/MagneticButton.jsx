import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({ children, className = '', as = 'button', strength = 24, ...props }) {
  const ref = useRef(null)

  function handleMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.setProperty('--mx', `${(x / rect.width) * strength}px`)
    el.style.setProperty('--my', `${(y / rect.height) * strength}px`)
  }

  function handleLeave() {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--mx', '0px')
    el.style.setProperty('--my', '0px')
  }

  const Comp = motion[as] ?? motion.button

  return (
    <Comp
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`magnetic-btn ${className}`}
      style={{
        transform: 'translate(var(--mx, 0px), var(--my, 0px))',
        transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      data-cursor="hover"
      {...props}
    >
      {children}
    </Comp>
  )
}
