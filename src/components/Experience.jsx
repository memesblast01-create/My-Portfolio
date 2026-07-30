import { motion } from 'framer-motion'
import { EXPERIENCE } from '../utils/data'

export default function Experience() {
  return (
    <section className="py-28 md:py-40">
      <div className="container-page">
        <span className="eyebrow">Experience</span>
        <h2 className="font-display text-4xl md:text-6xl mt-4 mb-20 leading-[1.02]">Where it&rsquo;s taken me.</h2>

        <div className="relative max-w-3xl">
          <div className="absolute left-[7px] md:left-[7px] top-2 bottom-2 w-px" style={{ background: 'var(--line)' }} />
          <motion.div
            className="absolute left-[7px] top-2 w-px origin-top"
            style={{ background: 'var(--accent)' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="flex flex-col gap-14">
            {EXPERIENCE.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2" style={{ borderColor: 'var(--accent)', background: 'var(--bg)' }} />
                <div className="eyebrow mb-2">{item.year}</div>
                <h3 className="font-display text-2xl mb-2">{item.title}</h3>
                <div className="text-sm mb-3" style={{ color: 'var(--accent)' }}>{item.org}</div>
                <p className="text-sm leading-relaxed max-w-lg" style={{ color: 'var(--fg-muted)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
