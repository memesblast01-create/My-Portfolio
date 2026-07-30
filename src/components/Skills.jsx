import { motion } from 'framer-motion'
import { SKILLS } from '../utils/data'
import { accentFor } from '../utils/palette'

const SIZES = [1, 1.35, 0.9, 1.15, 1, 1.25, 0.95, 1.1, 1, 1.3, 0.95]

function Bubble({ skill, index }) {
  const size = SIZES[index % SIZES.length]
  const accent = accentFor(index)
  return (
    <motion.div
      data-cursor="hover"
      initial={{ opacity: 0, scale: 0.7, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block"
    >
      <motion.span
        whileHover={{ scale: 1.08, y: -4 }}
        animate={{ y: [0, -7, 0] }}
        transition={{ y: { duration: 3 + (index % 4) * 0.4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.15 } }}
        className="inline-flex items-center rounded-full font-mono uppercase tracking-widest"
        style={{
          background: accent.bg,
          color: accent.fg,
          padding: `${0.6 * size}rem ${1.3 * size}rem`,
          fontSize: `${0.68 * size}rem`,
        }}
      >
        {skill}
      </motion.span>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section className="py-28 md:py-36" style={{ background: 'var(--surface)' }}>
      <div className="container-page">
        <div className="max-w-lg mb-16">
          <span className="eyebrow">Skills</span>
          <h2 className="font-display font-medium text-[clamp(2rem,4vw,3.2rem)] mt-4 leading-[1.05]">
            Tools & disciplines.
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-5">
          {SKILLS.map((skill, i) => (
            <Bubble key={skill} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
