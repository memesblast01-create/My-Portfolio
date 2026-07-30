import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '../utils/data'
import ProjectModal from './ProjectModal'

function projectAccent(i) {
  const accents = ['var(--accent)', 'var(--accent-2)', 'var(--accent)', 'var(--accent-2)']
  return accents[i % accents.length]
}

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="py-28 md:py-40">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <span className="eyebrow">Selected Work</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.02]">Featured projects.</h2>
          </div>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {PROJECTS.map((project, i) => (
            <motion.button
              key={project.id}
              onClick={() => setActive(project)}
              data-cursor="hover"
              data-cursor-text="View"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`text-left grid md:grid-cols-12 gap-6 md:gap-10 items-center group ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
            >
              <div className="md:col-span-7 [direction:ltr] relative overflow-hidden rounded-[1.75rem] border" style={{ borderColor: 'var(--line)' }}>
                <div
                  className="w-full aspect-[4/3] flex items-center justify-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, ${projectAccent(i)} 30%, var(--surface)), var(--surface))`,
                  }}
                >
                  <span className="font-display text-5xl md:text-7xl opacity-30">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'color-mix(in srgb, var(--charcoal) 35%, transparent)' }}>
                  <span className="flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs uppercase tracking-widest" style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
                    View case study <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>

              <div className="md:col-span-5 [direction:ltr]">
                <div className="eyebrow mb-4">{project.category} — {project.year}</div>
                <h3 className="font-display text-3xl md:text-4xl mb-4 leading-tight">{project.title}</h3>
                <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: 'var(--fg-muted)' }}>
                  {project.description}
                </p>
                <div className="mt-6 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-muted)' }}>
                  {project.software}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
