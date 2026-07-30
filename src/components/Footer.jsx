import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { DribbbleIcon, InstagramIcon, LinkedinIcon } from './SocialIcons'
import { NAV_LINKS } from '../utils/data'

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t" style={{ borderColor: 'var(--line)' }}>
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 pb-14">
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-5xl md:text-7xl tracking-tight"
            data-cursor="hover"
          >
            Arsalan<span style={{ color: 'var(--accent)' }}>.</span>
          </motion.a>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-muted)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-8 border-t" style={{ borderColor: 'var(--line)' }}>
          <span className="text-xs" style={{ color: 'var(--fg-muted)' }}>
            &copy; {new Date().getFullYear()} Arsalan. All rights reserved.
          </span>

          <div className="flex items-center gap-5" style={{ color: 'var(--fg-muted)' }}>
            <a href="#" aria-label="Instagram" data-cursor="hover"><InstagramIcon size={16} /></a>
            <a href="#" aria-label="Dribbble" data-cursor="hover"><DribbbleIcon size={16} /></a>
            <a href="#" aria-label="LinkedIn" data-cursor="hover"><LinkedinIcon size={16} /></a>
          </div>

          <a
            href="#home"
            data-cursor="hover"
            aria-label="Back to top"
            className="w-11 h-11 rounded-full border flex items-center justify-center"
            style={{ borderColor: 'var(--line)' }}
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
