// A small rotating accent palette (muted gold, slate blue, forest green, burnt orange)
// used across cards, bubbles, and badges so the site isn't monochrome.
export const ACCENTS = [
  { name: 'gold', fg: '#8a6636', bg: '#f1e3cd', bgDark: 'rgba(211,166,103,0.16)' },
  { name: 'slate', fg: '#3d5064', bg: '#dfe6ec', bgDark: 'rgba(127,149,168,0.18)' },
  { name: 'forest', fg: '#3f5b41', bg: '#dfe8dd', bgDark: 'rgba(122,163,124,0.16)' },
  { name: 'rust', fg: '#93502c', bg: '#f2dfc9', bgDark: 'rgba(198,120,74,0.18)' },
]

export function accentFor(index) {
  return ACCENTS[index % ACCENTS.length]
}
