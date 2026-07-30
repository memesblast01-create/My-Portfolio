import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '../utils/data'
import ProjectModal from './ProjectModal'

function ProjectRow({ project, index, onOpen }) {
  const reversed = index % 2 === 1
  return (
    <motion.button
      onClick={() => onOpen(project)}
      data-cursor="hover"
      data-cursor-text="Explore"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group grid md:grid-cols-2 gap-8 md:gap-16 items-center text-left w-full py-14 border-b ${reversed ? 'md:[&>*:first-child]:order-2' : ''}`}
      style={{ borderColor: 'var(--line)' }}
    >
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ background: `linear-gradient(135deg, var(--accent-2), var(--surface) 60%, var(--accent))` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-2xl text-white/90">{project.title}</span>
        </div>
      </div>

      <div>
        <span className="eyebrow">{project.category} — {project.year}</span>
        <h3 className="font-display text-2xl md:text-3xl mt-4 flex items-center gap-3">
          {project.title}
          <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" style={{ color: 'var(--accent)' }} />
        </h3>
        <p className="mt-4 max-w-md" style={{ color: 'var(--fg-muted)' }}>{project.description}</p>
        <span className="mt-6 inline-block font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--fg-muted)' }}>
          {project.software}
        </span>
      </div>
    </motion.button>
  )
}

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="py-28 md:py-36">
      <div className="container-page">
        <div className="max-w-lg mb-6">
          <span className="eyebrow">Featured Work</span>
          <h2 className="font-display font-medium text-[clamp(2rem,4vw,3.2rem)] mt-4 leading-[1.05]">
            Selected projects.
          </h2>
        </div>

        <div>
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
