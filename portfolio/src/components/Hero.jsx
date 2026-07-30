import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { CharReveal } from './RevealText'
import MagneticButton from './MagneticButton'
import { GithubIcon, InstagramIcon, LinkedinIcon } from './SocialIcons'
import portrait from '../assets/images/portrait-cutout.webp'

export default function Hero() {
  const sectionRef = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springX = useSpring(mx, { stiffness: 60, damping: 18 })
  const springY = useSpring(my, { stiffness: 60, damping: 18 })

  const imgX = useTransform(springX, [-0.5, 0.5], [-18, 18])
  const imgY = useTransform(springY, [-0.5, 0.5], [-14, 14])
  const shapeX = useTransform(springX, [-0.5, 0.5], [24, -24])
  const shapeY = useTransform(springY, [-0.5, 0.5], [16, -16])

  useEffect(() => {
    function onMove(e) {
      const rect = sectionRef.current?.getBoundingClientRect()
      if (!rect) return
      mx.set((e.clientX - rect.left) / rect.width - 0.5)
      my.set((e.clientY - rect.top) / rect.height - 0.5)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            background: 'radial-gradient(60% 50% at 78% 24%, color-mix(in srgb, var(--accent) 16%, transparent), transparent)',
          }}
        />
        <motion.div
          style={{ x: shapeX, y: shapeY }}
          className="absolute top-[14%] right-[8%] w-40 h-40 md:w-64 md:h-64 rounded-full border"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-full h-full rounded-full" style={{ border: '1px solid var(--line)' }} />
        </motion.div>
        <motion.div
          style={{ x: useTransform(shapeX, (v) => v * -0.6), y: useTransform(shapeY, (v) => v * -0.6) }}
          className="absolute bottom-[10%] left-[6%] w-24 h-24 md:w-40 md:h-40 rotate-45"
          animate={{ rotate: [45, 90, 45] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-full h-full" style={{ border: '1px solid var(--line)' }} />
        </motion.div>
      </div>

      <div className="container-page grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="flex items-center gap-3 mb-7"
          >
            <span className="w-2 h-2 rounded-full" style={{ background: '#6f9c6f' }} />
            <span className="eyebrow">Available for new projects</span>
          </motion.div>

          <h1 className="font-display font-medium leading-[0.98] text-[clamp(2.6rem,7vw,5.4rem)]">
            <div className="overflow-hidden"><CharReveal text="Design that" delay={0.3} /></div>
            <div className="overflow-hidden">
              <CharReveal text="says " delay={0.7} />
              <span style={{ color: 'var(--accent)' }}><CharReveal text="something." delay={0.95} /></span>
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.7 }}
            className="mt-7 max-w-md text-base md:text-lg"
            style={{ color: 'var(--fg-muted)' }}
          >
            I'm Arsalan — a graphic designer working in brand identity, packaging,
            and motion. Quiet, considered design for people who care how things look.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <MagneticButton
              as="a"
              href="#projects"
              data-cursor-text="View"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-mono text-xs uppercase tracking-widest"
              style={{ background: 'var(--fg)', color: 'var(--bg)' }}
            >
              View work <ArrowUpRight size={14} />
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#contact"
              data-cursor-text="Open"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-mono text-xs uppercase tracking-widest border"
              style={{ borderColor: 'var(--line)' }}
            >
              Get in touch
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.7 }}
            className="mt-12 flex items-center gap-5"
            style={{ color: 'var(--fg-muted)' }}
          >
            {[InstagramIcon, LinkedinIcon, GithubIcon].map((Icon, i) => (
              <a key={i} href="#" data-cursor="hover" aria-label="Social link" className="hover:opacity-70 transition-opacity">
                <Icon style={{ fontSize: 17 }} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0 }}
          animate={{ clipPath: 'inset(0% 0 0 0)', opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[360px] md:max-w-none"
        >
          <motion.div
            style={{ x: imgX, y: imgY }}
            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden"
          >
            <div
              className="absolute -inset-4 -z-10 rounded-[2.5rem] blur-2xl opacity-40"
              style={{ background: 'linear-gradient(140deg, var(--accent), var(--accent-2))' }}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(155deg, var(--accent-2) 0%, var(--surface) 55%, var(--accent) 130%)' }}
            />
            <div
              className="absolute inset-0 opacity-[0.5]"
              style={{ background: 'radial-gradient(120% 90% at 30% 0%, color-mix(in srgb, var(--bg) 35%, transparent), transparent 60%)' }}
            />
            <img
              src={portrait}
              alt="Portrait of Arsalan"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[104%] w-auto max-w-none object-contain object-bottom"
              style={{ filter: 'saturate(0.96) contrast(1.02)' }}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, transparent 62%, color-mix(in srgb, var(--charcoal) 45%, transparent))' }}
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-widest text-white/85">
              <span>Est. Dubai</span>
              <span>Graphic Designer</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        data-cursor="hover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3 }}
        className="mx-auto mt-14 flex flex-col items-center gap-2 font-mono text-[0.65rem] uppercase tracking-widest"
        style={{ color: 'var(--fg-muted)' }}
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  )
}
