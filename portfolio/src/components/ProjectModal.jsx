import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end md:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ background: 'color-mix(in srgb, var(--charcoal) 70%, transparent)' }}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full md:max-w-3xl max-h-[88vh] overflow-y-auto rounded-t-3xl md:rounded-3xl p-8 md:p-12"
            style={{ background: 'var(--bg)', border: '1px solid var(--line)' }}
          >
            <button
              onClick={onClose}
              data-cursor="hover"
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center border"
              style={{ borderColor: 'var(--line)' }}
              aria-label="Close case study"
            >
              <X size={16} />
            </button>

            <span className="eyebrow">{project.category} — {project.year}</span>
            <h3 className="font-display text-3xl md:text-4xl mt-3 mb-8">{project.title}</h3>

            <div className="aspect-video rounded-2xl mb-10 overflow-hidden flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, var(--accent-2), var(--accent))' }}>
              <span className="font-display text-white/85 text-lg">{project.title}</span>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 text-sm">
              <div>
                <div className="eyebrow mb-2">Process</div>
                <p style={{ color: 'var(--fg-muted)' }}>{project.process}</p>
              </div>
              <div>
                <div className="eyebrow mb-2">Challenge</div>
                <p style={{ color: 'var(--fg-muted)' }}>{project.challenge}</p>
              </div>
              <div>
                <div className="eyebrow mb-2">Solution</div>
                <p style={{ color: 'var(--fg-muted)' }}>{project.solution}</p>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t flex items-center justify-between font-mono text-xs uppercase tracking-widest"
              style={{ borderColor: 'var(--line)', color: 'var(--fg-muted)' }}>
              <span>{project.software}</span>
              <span>{project.year}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
