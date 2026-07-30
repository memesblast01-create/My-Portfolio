import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [label, setLabel] = useState('')
  const [variant, setVariant] = useState('default')
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isCoarse || reduced) return

    document.documentElement.classList.add('no-cursor')

    const dot = dotRef.current
    const ring = ringRef.current
    let dotX = 0, dotY = 0, ringX = 0, ringY = 0
    let mouseX = 0, mouseY = 0
    let raf

    function onMove(e) {
      mouseX = e.clientX
      mouseY = e.clientY
      setHidden(false)

      const target = e.target.closest('[data-cursor]')
      if (target) {
        setVariant(target.getAttribute('data-cursor') || 'hover')
        setLabel(target.getAttribute('data-cursor-text') || '')
      } else {
        setVariant('default')
        setLabel('')
      }
    }

    function loop() {
      dotX += (mouseX - dotX) * 0.55
      dotY += (mouseY - dotY) * 0.55
      ringX += (mouseX - ringX) * 0.14
      ringY += (mouseY - ringY) * 0.14
      if (dot) dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`
      if (ring) ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }

    function onDown() { ring?.classList.add('cursor-click') }
    function onUp() { ring?.classList.remove('cursor-click') }
    function onLeaveWindow() { setHidden(true) }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('mouseleave', onLeaveWindow)
    raf = requestAnimationFrame(loop)

    return () => {
      document.documentElement.classList.remove('no-cursor')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('mouseleave', onLeaveWindow)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className={`cursor-root ${hidden ? 'opacity-0' : 'opacity-100'}`} aria-hidden="true">
      <div
        ref={dotRef}
        className={`cursor-dot ${variant === 'hover' ? 'cursor-dot--hover' : ''}`}
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${variant === 'hover' ? 'cursor-ring--hover' : ''}`}
      >
        {label && <span className="cursor-label">{label}</span>}
      </div>
    </div>
  )
}
