import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../utils/data'
import MagneticButton from './MagneticButton'

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 24) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? 'color-mix(in srgb, var(--bg) 82%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'background 0.4s ease, border-color 0.4s ease',
      }}
    >
      <div className="container-page flex items-center justify-between py-5">
        <a href="#home" className="font-display text-lg tracking-tight" data-cursor="hover">
          Arsalan<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        <nav className="hidden md:flex items-center gap-9 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-muted)' }}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="relative group" data-cursor="hover">
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-px group-hover:w-full transition-all duration-300" style={{ background: 'var(--accent)' }} />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle dark mode"
            onClick={onToggleTheme}
            data-cursor="hover"
            className="w-10 h-10 rounded-full flex items-center justify-center border"
            style={{ borderColor: 'var(--line)' }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <MagneticButton
            as="a"
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-widest"
            style={{ background: 'var(--fg)', color: 'var(--bg)' }}
          >
            Start a project
          </MagneticButton>
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            data-cursor="hover"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
          style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}
        >
          <div className="container-page py-6 flex flex-col gap-5 font-mono text-sm uppercase tracking-widest">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
