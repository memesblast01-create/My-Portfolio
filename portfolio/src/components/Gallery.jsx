import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { GALLERY, GALLERY_CATEGORIES } from '../utils/data'

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const items = useMemo(
    () => (filter === 'All' ? GALLERY : GALLERY.filter((g) => g.category === filter)),
    [filter]
  )

  return (
    <section className="py-28 md:py-36" style={{ background: 'var(--surface)' }}>
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-14">
          <div className="max-w-lg">
            <span className="eyebrow">Gallery</span>
            <h2 className="font-display font-medium text-[clamp(2rem,4vw,3.2rem)] mt-4 leading-[1.05]">
              A closer look.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                data-cursor="hover"
                onClick={() => setFilter(cat)}
                className="px-4 py-2 rounded-full font-mono text-xs uppercase tracking-widest border transition-colors duration-300"
                style={{
                  borderColor: 'var(--line)',
                  background: filter === cat ? 'var(--fg)' : 'transparent',
                  color: filter === cat ? 'var(--bg)' : 'var(--fg)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="columns-2 md:columns-3 gap-5 space-y-5">
          <AnimatePresence>
            {items.map((item) => (
              <motion.button
                layout
                key={item.id}
                data-cursor="hover"
                data-cursor-text="Drag"
                onClick={() => setLightbox(item)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative block w-full rounded-xl overflow-hidden break-inside-avoid"
                style={{ aspectRatio: item.id % 3 === 0 ? '3/4' : '4/5' }}
              >
                <div
                  className="w-full h-full"
                  style={{ background: `linear-gradient(${140 + item.id * 20}deg, var(--accent-2), var(--surface) 55%, var(--accent))` }}
                />
                <div className="absolute inset-0 flex items-end p-4" style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.45))' }}>
                  <span className="text-white text-sm font-display">{item.title}</span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <div className="absolute inset-0" style={{ background: 'color-mix(in srgb, var(--charcoal) 78%, transparent)' }} />
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-2xl aspect-[4/5] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full" style={{ background: `linear-gradient(140deg, var(--accent-2), var(--accent))` }} />
              <div className="absolute bottom-6 left-6 text-white font-display text-xl">{lightbox.title}</div>
              <button
                onClick={() => setLightbox(null)}
                data-cursor="hover"
                className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center bg-white/15 text-white backdrop-blur"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
