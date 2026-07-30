import { motion } from 'framer-motion'

// Character-by-character heading reveal
export function CharReveal({ text, className = '', delay = 0 }) {
  const chars = text.split('')
  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      {chars.map((c, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="inline-block"
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.028,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: 'inline-block' }}
        >
          {c === ' ' ? '\u00A0' : c}
        </motion.span>
      ))}
    </span>
  )
}

// Line-by-line reveal for paragraphs / groups of lines
export function LineReveal({ lines, className = '', delay = 0, stagger = 0.09, style }) {
  return (
    <div className={className} style={style}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.p
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
          >
            {line}
          </motion.p>
        </div>
      ))}
    </div>
  )
}
