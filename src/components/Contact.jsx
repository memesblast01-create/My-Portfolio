import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import MagneticButton from './MagneticButton'
import { CharReveal } from './RevealText'

const fields = [
  { name: 'name', label: 'Your name', type: 'text' },
  { name: 'email', label: 'Email address', type: 'email' },
  { name: 'budget', label: 'Project budget', type: 'text' },
]

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', budget: '', message: '' })
  const [focused, setFocused] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 md:py-40">
      <div className="container-page grid md:grid-cols-12 gap-14 md:gap-10">
        <div className="md:col-span-5">
          <span className="eyebrow">Contact</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 mb-8 leading-[1.02]">
            <CharReveal text="Let's work" />
            <br />
            <CharReveal text="together." />
          </h2>
          <p className="max-w-sm mb-10 text-base" style={{ color: 'var(--fg-muted)' }}>
            Currently taking on a small number of new projects for late 2026. Tell me about yours.
          </p>

          <div className="space-y-5">
            <a href="mailto:hello@arsalandesign.co" className="flex items-center gap-3 group" data-cursor="hover">
              <span className="w-10 h-10 rounded-full border flex items-center justify-center" style={{ borderColor: 'var(--line)' }}>
                <Mail size={15} />
              </span>
              <span className="text-sm">hello@arsalandesign.co</span>
            </a>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full border flex items-center justify-center" style={{ borderColor: 'var(--line)' }}>
                <MapPin size={15} />
              </span>
              <span className="text-sm">Dubai, UAE — working worldwide</span>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: 'var(--accent)' }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--accent)' }} />
            </span>
            <span className="eyebrow">Currently available</span>
          </div>
        </div>

        <div className="md:col-span-7">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-full flex flex-col justify-center rounded-3xl border p-12 text-center"
              style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}
            >
              <h3 className="font-display text-2xl mb-3">Message sent.</h3>
              <p className="text-sm" style={{ color: 'var(--fg-muted)' }}>Thanks for reaching out — I&rsquo;ll reply within two business days.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-3xl border p-8 md:p-12" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                {fields.map((f) => (
                  <div key={f.name} className="relative">
                    <input
                      type={f.type}
                      required
                      value={values[f.name]}
                      onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                      onFocus={() => setFocused(f.name)}
                      onBlur={() => setFocused('')}
                      className={`w-full bg-transparent border-b py-3 outline-none text-base ${f.name === 'budget' ? 'sm:col-span-2' : ''}`}
                      style={{ borderColor: focused === f.name ? 'var(--accent)' : 'var(--line)' }}
                    />
                    <motion.label
                      initial={false}
                      animate={{
                        y: values[f.name] || focused === f.name ? -22 : 0,
                        scale: values[f.name] || focused === f.name ? 0.82 : 1,
                        color: focused === f.name ? 'var(--accent)' : 'var(--fg-muted)',
                      }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute left-0 top-3 origin-left pointer-events-none font-mono text-xs uppercase tracking-widest"
                    >
                      {f.label}
                    </motion.label>
                  </div>
                ))}
              </div>

              <div className="relative mb-10">
                <textarea
                  required
                  rows={3}
                  value={values.message}
                  onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  className="w-full bg-transparent border-b py-3 outline-none resize-none text-base"
                  style={{ borderColor: focused === 'message' ? 'var(--accent)' : 'var(--line)' }}
                />
                <motion.label
                  initial={false}
                  animate={{
                    y: values.message || focused === 'message' ? -22 : 0,
                    scale: values.message || focused === 'message' ? 0.82 : 1,
                    color: focused === 'message' ? 'var(--accent)' : 'var(--fg-muted)',
                  }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute left-0 top-3 origin-left pointer-events-none font-mono text-xs uppercase tracking-widest"
                >
                  Project details
                </motion.label>
              </div>

              <MagneticButton
                type="submit"
                data-cursor-text="Send"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest"
                style={{ background: 'var(--fg)', color: 'var(--bg)' }}
              >
                Send message <ArrowUpRight size={14} />
              </MagneticButton>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
