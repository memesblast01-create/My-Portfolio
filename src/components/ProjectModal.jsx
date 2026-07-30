import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end md:items-center justify-center p-0 md:p-8"
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
            className="relative w-full md:max-w-3xl max-h-[88vh] overflow-y-auto rounded-t-[2rem] md:rounded-[2rem] p-8 md:p-12"
            style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}
          >
            <button
              onClick={onClose}
              aria-label="Close case study"
              data-cursor="hover"
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center border"
              style={{ borderColor: 'var(--line)' }}
            >
              <X size={16} />
            </button>

            <div className="eyebrow mb-4">{project.category} — {project.year}</div>
            <h3 className="font-display text-3xl md:text-5xl mb-8 leading-tight">{project.title}</h3>

            <div
              className="w-full aspect-[16/9] rounded-2xl mb-10 flex items-center justify-center"
              style={{ background: 'color-mix(in srgb, var(--accent) 18%, var(--bg))' }}
            >
              <span className="font-display text-4xl opacity-30">{project.title.slice(0, 2).toUpperCase()}</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--fg-muted)' }}>Design process</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>{project.process}</p>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--fg-muted)' }}>Challenge</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>{project.challenge}</p>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--fg-muted)' }}>Solution</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>{project.solution}</p>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--fg-muted)' }}>Software used</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>{project.software}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
