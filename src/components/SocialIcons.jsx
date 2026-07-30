// Lightweight inline glyphs (lucide-react no longer ships brand/social icons)
export function InstagramIcon({ size = 16, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function DribbbleIcon({ size = 16, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M4 9.5c4 1.4 9.6 1.2 14.5-1.4M2.6 14.7c5.6-1 11.7.2 15.6 4.7M9.2 3.2c3 4 4.6 9.6 4.1 16.8" />
    </svg>
  )
}

export function LinkedinIcon({ size = 16, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10" x2="7.5" y2="17" />
      <circle cx="7.5" cy="6.8" r="1" fill="currentColor" stroke="none" />
      <path d="M11.5 17v-4.2c0-1.5 1-2.3 2.2-2.3 1.1 0 2 .8 2 2.3V17" />
    </svg>
  )
}
