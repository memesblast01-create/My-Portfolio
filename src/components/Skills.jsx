import { motion } from 'framer-motion'
import { SKILLS } from '../utils/data'

const sizes = ['text-base py-3 px-6', 'text-lg py-4 px-7', 'text-sm py-2.5 px-5']
const floatDur = [7, 8.5, 6.2, 9, 7.6, 8.1, 6.8, 9.4, 7.2, 8.8, 6.5]

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-40">
      <div className="container-page">
        <span className="eyebrow">Skills</span>
        <h2 className="font-display text-4xl md:text-6xl mt-4 mb-16 leading-[1.02]">Tools of the trade.</h2>

        <div className="flex flex-wrap gap-4 md:gap-5 justify-center">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.08 }}
              data-cursor="hover"
              className={`rounded-full border font-mono tracking-wide ${sizes[i % sizes.length]}`}
              style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}
            >
              <motion.span
                className="inline-block"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: floatDur[i % floatDur.length], repeat: Infinity, ease: 'easeInOut' }}
              >
                {skill}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
