import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import MagneticButton from './MagneticButton'

function FloatField({ label, type = 'text', name, textarea, value, onChange, error }) {
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          value={value}
          onChange={onChange}
          placeholder=" "
          className="peer w-full bg-transparent border-b pt-6 pb-2 outline-none resize-none"
          style={{ borderColor: error ? '#c05a4a' : 'var(--line)' }}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder=" "
          className="peer w-full bg-transparent border-b pt-6 pb-2 outline-none"
          style={{ borderColor: error ? '#c05a4a' : 'var(--line)' }}
        />
      )}
      <label
        htmlFor={name}
        className="absolute left-0 top-6 font-mono text-xs uppercase tracking-widest transition-all duration-200 pointer-events-none
          peer-focus:top-0 peer-focus:text-[0.65rem] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.65rem]"
        style={{ color: error ? '#c05a4a' : 'var(--fg-muted)' }}
      >
        {label}
      </label>
      {error && <span className="block mt-1 text-xs" style={{ color: '#c05a4a' }}>{error}</span>}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  function update(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email.'
    if (!form.message.trim()) next.message = 'Tell me a little about the project.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="container-page grid md:grid-cols-2 gap-16">
        <div>
          <span className="eyebrow">Contact</span>
          <h2 className="font-display font-medium text-[clamp(2rem,4vw,3.4rem)] mt-4 leading-[1.05]">
            Let's design<br /> something worth keeping.
          </h2>
          <p className="mt-6 max-w-sm" style={{ color: 'var(--fg-muted)' }}>
            Currently taking on a limited number of new projects for late 2026.
          </p>

          <div className="mt-10 space-y-4 font-mono text-sm">
            <a href="mailto:hello@arsalanportfolio.live" data-cursor="hover" className="flex items-center gap-3">
              <Mail size={15} /> hello@arsalanportfolio.live
            </a>
            <div className="flex items-center gap-3" style={{ color: 'var(--fg-muted)' }}>
              <MapPin size={15} /> Dubai, UAE
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full" style={{ background: '#6f9c6f' }} />
            <span className="eyebrow">Available for new projects</span>
          </div>
        </div>

        <div>
          {status === 'sent' ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 rounded-2xl border"
              style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}
            >
              <h3 className="font-display text-2xl mb-2">Message sent.</h3>
              <p style={{ color: 'var(--fg-muted)' }}>Thanks for reaching out — I'll reply within a couple of days.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-8">
              <FloatField label="Your name" name="name" value={form.name} onChange={update} error={errors.name} />
              <FloatField label="Email address" name="email" type="email" value={form.email} onChange={update} error={errors.email} />
              <FloatField label="Project details" name="message" textarea value={form.message} onChange={update} error={errors.message} />

              <MagneticButton
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-mono text-xs uppercase tracking-widest"
                style={{ background: 'var(--fg)', color: 'var(--bg)', opacity: status === 'sending' ? 0.6 : 1 }}
              >
                {status === 'sending' ? 'Sending…' : 'Send message'} <ArrowUpRight size={14} />
              </MagneticButton>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
