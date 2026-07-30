import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import { DribbbleIcon, InstagramIcon, LinkedinIcon } from './SocialIcons'
import { CharReveal } from './RevealText'
import MagneticButton from './MagneticButton'
import portrait from '../assets/portrait.jpg'

export default function Hero() {
  const sectionRef = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springX = useSpring(mx, { stiffness: 60, damping: 20 })
  const springY = useSpring(my, { stiffness: 60, damping: 20 })
  const imgX = useTransform(springX, [-0.5, 0.5], [-14, 14])
  const imgY = useTransform(springY, [-0.5, 0.5], [-10, 10])
  const glowX = useTransform(springX, [-0.5, 0.5], [-30, 30])
  const glowY = useTransform(springY, [-0.5, 0.5], [-30, 30])

  function handleMouseMove(e) {
    const rect = sectionRef.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      {/* Floating abstract geometry */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full blur-3xl"
        style={{ background: 'color-mix(in srgb, var(--accent) 22%, transparent)' }}
        animate={{ y: [0, 24, 0], x: [0, 12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full blur-3xl"
        style={{ background: 'color-mix(in srgb, var(--accent-2) 18%, transparent)' }}
        animate={{ y: [0, -20, 0], x: [0, -14, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.svg
        aria-hidden
        className="absolute top-1/3 left-[8%] hidden md:block"
        width="54" height="54" viewBox="0 0 54 54"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <rect x="1" y="1" width="52" height="52" rx="10" fill="none" stroke="var(--accent)" strokeOpacity="0.4" />
      </motion.svg>

      <div className="container-page grid md:grid-cols-12 gap-10 md:gap-6 items-center relative z-10">
        <div className="md:col-span-7 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.7 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: 'var(--accent)' }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--accent)' }} />
            </span>
            <span className="eyebrow">Available for select projects — Q4 2026</span>
          </motion.div>

          <h1 className="font-display leading-[0.95] text-[13vw] md:text-[5.4vw] tracking-tight">
            <CharReveal text="Graphic" delay={2.3} />
            <br />
            <CharReveal text="Design," delay={2.55} />
            <br />
            <span style={{ color: 'var(--accent)' }}><CharReveal text="Refined." delay={2.8} /></span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-md text-base md:text-lg"
            style={{ color: 'var(--fg-muted)' }}
          >
            I&rsquo;m Arsalan, a graphic designer building brand identities, packaging, and
            motion systems for studios and independent brands worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as="a"
              href="#projects"
              data-cursor-text="Explore"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-mono text-xs uppercase tracking-widest"
              style={{ background: 'var(--fg)', color: 'var(--bg)' }}
            >
              View Work <ArrowDownRight size={14} />
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#contact"
              data-cursor-text="Say hi"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-mono text-xs uppercase tracking-widest border"
              style={{ borderColor: 'var(--line)' }}
            >
              Get in Touch
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.8, duration: 1 }}
            className="mt-14 flex items-center gap-5"
            style={{ color: 'var(--fg-muted)' }}
          >
            <span className="eyebrow">Follow</span>
            <a href="#" aria-label="Instagram" data-cursor="hover"><InstagramIcon size={16} /></a>
            <a href="#" aria-label="Dribbble" data-cursor="hover"><DribbbleIcon size={16} /></a>
            <a href="#" aria-label="LinkedIn" data-cursor="hover"><LinkedinIcon size={16} /></a>
          </motion.div>
        </div>

        <div className="md:col-span-5 order-1 md:order-2 relative">
          <motion.div
            style={{ x: imgX, y: imgY }}
            className="relative mx-auto max-w-[340px] md:max-w-none"
          >
            <motion.div
              aria-hidden
              className="absolute -inset-6 rounded-[2.5rem] blur-2xl"
              style={{ x: glowX, y: glowY, background: 'color-mix(in srgb, var(--accent) 28%, transparent)' }}
            />
            <motion.div
              initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              transition={{ duration: 1.4, delay: 1.9, ease: [0.85, 0, 0.15, 1] }}
              className="relative rounded-[2rem] overflow-hidden border"
              style={{ borderColor: 'var(--line)', boxShadow: '0 40px 80px -30px rgba(0,0,0,0.35)' }}
            >
              <img
                src={portrait}
                alt="Arsalan, graphic designer, portrait"
                className="w-full h-[440px] md:h-[560px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, color-mix(in srgb, var(--charcoal) 55%, transparent), transparent 45%)' }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.8 }}
              className="absolute -left-6 bottom-8 md:-left-10 px-5 py-4 rounded-2xl backdrop-blur-xl border"
              style={{ background: 'color-mix(in srgb, var(--surface) 78%, transparent)', borderColor: 'var(--line)' }}
            >
              <div className="font-display text-2xl">7+</div>
              <div className="eyebrow mt-1">Years crafting brands</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        style={{ color: 'var(--fg-muted)' }}
      >
        <span className="eyebrow">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10"
          style={{ background: 'var(--fg-muted)' }}
        />
      </motion.div>
    </section>
  )
}
