import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { GALLERY, GALLERY_CATEGORIES } from '../utils/data'

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const items = filter === 'All' ? GALLERY : GALLERY.filter((g) => g.category === filter)

  return (
    <section className="py-28 md:py-40" style={{ background: 'var(--surface)' }}>
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow">Gallery</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.02]">Detail shots.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                data-cursor="hover"
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

        <motion.div layout className="columns-2 md:columns-3 gap-5 [column-fill:balance]">
          <AnimatePresence>
            {items.map((item, i) => (
              <motion.button
                layout
                key={item.id}
                onClick={() => setLightbox(item)}
                data-cursor="hover"
                data-cursor-text="Open"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mb-5 w-full break-inside-avoid rounded-2xl overflow-hidden border block text-left group"
                style={{ borderColor: 'var(--line)' }}
              >
                <div
                  className="w-full flex items-end p-5 transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{
                    aspectRatio: i % 3 === 0 ? '3/4' : '4/5',
                    background: `linear-gradient(160deg, color-mix(in srgb, var(--accent) ${18 + (i % 4) * 6}%, var(--bg)), var(--bg))`,
                  }}
                >
                  <div>
                    <div className="font-display text-sm">{item.title}</div>
                    <div className="eyebrow mt-1">{item.category}</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[85] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <div className="absolute inset-0" style={{ background: 'color-mix(in srgb, var(--charcoal) 82%, transparent)' }} />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-xl w-full rounded-2xl overflow-hidden"
              style={{ background: 'var(--surface)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[4/5] flex items-center justify-center" style={{ background: 'color-mix(in srgb, var(--accent) 20%, var(--bg))' }}>
                <span className="font-display text-3xl opacity-40">{lightbox.title}</span>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: 'var(--bg)' }}
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
