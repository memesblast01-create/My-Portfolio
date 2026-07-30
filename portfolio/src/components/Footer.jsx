import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { NAV_LINKS } from '../utils/data'
import { GithubIcon, InstagramIcon, LinkedinIcon } from './SocialIcons'

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t" style={{ borderColor: 'var(--line)' }}>
      <div className="container-page">
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-14">
          <div>
            <div className="font-display text-3xl">
              Arsalan<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <p className="mt-3 max-w-xs text-sm" style={{ color: 'var(--fg-muted)' }}>
              Graphic design studio for brand identity, packaging, and motion.
            </p>
          </div>

          <div className="flex gap-16">
            <nav className="flex flex-col gap-3 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-muted)' }}>
              {NAV_LINKS.map((l) => <a key={l.href} href={l.href} data-cursor="hover">{l.label}</a>)}
            </nav>
            <div className="flex flex-col gap-3">
              {[InstagramIcon, LinkedinIcon, GithubIcon].map((Icon, i) => (
                <a key={i} href="#" data-cursor="hover" aria-label="Social link" style={{ color: 'var(--fg-muted)' }}>
                  <Icon style={{ fontSize: 16 }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-8 border-t font-mono text-[0.65rem] uppercase tracking-widest"
          style={{ borderColor: 'var(--line)', color: 'var(--fg-muted)' }}>
          <span>© {new Date().getFullYear()} Arsalan. All rights reserved.</span>
          <motion.a
            href="#home"
            data-cursor="hover"
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border"
            style={{ borderColor: 'var(--line)' }}
          >
            Back to top <ArrowUp size={12} />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
