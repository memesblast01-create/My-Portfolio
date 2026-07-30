export const NAV_LINKS = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export const SERVICES = [
  { title: 'Brand Identity', desc: 'Naming, systems, and visual language built to hold up across every touchpoint.' },
  { title: 'Logo Design', desc: 'Marks that read clearly at a glance and still reward a second look.' },
  { title: 'Social Media Design', desc: 'Templated, on-brand systems that keep a feed consistent and easy to produce.' },
  { title: 'Packaging Design', desc: 'Structural and print-ready packaging that stands out on a crowded shelf.' },
  { title: 'Print Design', desc: 'Editorial layouts, collateral, and publications built for the page.' },
  { title: 'UI Design', desc: 'Interface systems and design languages for product teams.' },
  { title: 'Motion Graphics', desc: 'Short-form animation for launches, social, and brand storytelling.' },
  { title: 'Creative Direction', desc: 'End-to-end direction across campaigns, from concept to final asset.' },
]

export const PROJECTS = [
  {
    id: 'meridian',
    title: 'Meridian Coffee Roasters',
    category: 'Brand Identity, Packaging',
    year: '2025',
    software: 'Illustrator, InDesign, Photoshop',
    image: 'https://picsum.photos/seed/meridian-coffee/1200/900',
    description: 'A full identity and packaging system for a specialty roaster expanding from one shop to a wholesale line.',
    process: 'Started from the roasting process itself: the palette borrows from raw, city, and full-city roast stages.',
    challenge: 'The bag needed to work in a single Pantone spot for cost, across five origin variants.',
    solution: 'Built a one-color system where origin is communicated through a rotating typographic mark rather than added ink.',
  },
  {
    id: 'lumen',
    title: 'Lumen Studio',
    category: 'Identity, Motion',
    year: '2025',
    software: 'Illustrator, After Effects',
    image: 'https://picsum.photos/seed/lumen-studio/1200/900',
    description: 'Identity and motion system for an architectural lighting studio, built around a single adaptable aperture mark.',
    process: 'The mark opens and closes like an aperture; the same geometry drives every animated transition.',
    challenge: 'A static logo that also needed to feel convincing in motion for reels and site loaders.',
    solution: 'Designed the mark as a motion primitive first, then derived the static lockups from paused animation frames.',
  },
  {
    id: 'northfield',
    title: 'Northfield Provisions',
    category: 'Packaging, Print',
    year: '2024',
    software: 'Illustrator, InDesign',
    image: 'https://picsum.photos/seed/northfield-provisions/1200/900',
    description: 'Packaging and in-store print for a regional grocer private-label line, spanning forty-plus SKUs.',
    process: 'Established a modular grid so new SKUs could be produced in-house without redesigning the system.',
    challenge: 'Forty products needed to feel like one family while staying instantly distinguishable on shelf.',
    solution: 'Fixed typography and layout, with a variable duotone photography treatment per category.',
  },
  {
    id: 'ferro',
    title: 'Ferro Type Foundry',
    category: 'Brand Identity, UI',
    year: '2024',
    software: 'Figma, Illustrator',
    image: 'https://picsum.photos/seed/ferro-foundry/1200/900',
    description: 'Identity and site for an independent type foundry, treating the typefaces as the primary visual material.',
    process: 'Every layout decision was tested against the foundry own display cuts before anything else was drawn.',
    challenge: 'The identity needed to showcase type without competing with the typefaces on sale.',
    solution: 'A near-invisible identity system: one mark, one accent rule, and generous space for the type to lead.',
  },
]

export const SKILLS = [
  'Photoshop', 'Illustrator', 'InDesign', 'Figma', 'After Effects',
  'Lightroom', 'Brand Strategy', 'Typography', 'Illustration', 'Packaging', 'Motion Design',
]

export const PROCESS_STEPS = [
  { title: 'Research', desc: 'Audience, category, and competitive landscape.' },
  { title: 'Concept', desc: 'Divergent directions grounded in one idea.' },
  { title: 'Sketch', desc: 'Fast, low-fidelity exploration on paper.' },
  { title: 'Design', desc: 'The chosen direction, built out in full.' },
  { title: 'Revision', desc: 'Structured feedback, refined execution.' },
  { title: 'Delivery', desc: 'Production-ready files and guidelines.' },
]

export const TESTIMONIALS = [
  { name: 'Sara Whitfield', role: 'Founder, Meridian Coffee', quote: 'The identity gave us a shelf presence we could not have designed ourselves, considered and instantly ours.' },
  { name: 'Daniel Okoye', role: 'Creative Lead, Lumen Studio', quote: 'Every round of feedback was handled with real craft. The motion system still looks distinct a year on.' },
  { name: 'Priya Nathan', role: 'Marketing Director, Northfield', quote: 'Forty SKUs, one clear family. The system just works, and our in-house team can run with it.' },
  { name: 'Tomas Ferreira', role: 'Founder, Ferro Foundry', quote: 'Quiet, precise, and completely on brief. Exactly the kind of restraint a type foundry needed.' },
]

export const EXPERIENCE = [
  { year: '2026', title: 'Independent Creative Direction', org: 'Freelance', desc: 'Brand and packaging systems for hospitality and product clients.' },
  { year: '2023', title: 'Senior Graphic Designer', org: 'Studio Norrland', desc: 'Led identity and packaging work across the studio food and beverage roster.' },
  { year: '2021', title: 'Graphic Designer', org: 'Blackwell and Co.', desc: 'Print and digital design across editorial and campaign work.' },
  { year: '2019', title: 'BA, Visual Communication', org: 'National College of Arts', desc: 'Thesis on modular identity systems for independent retail.' },
]

export const ACHIEVEMENTS = [
  { value: 120, suffix: '+', label: 'Projects completed' },
  { value: 46, suffix: '', label: 'Clients served' },
  { value: 7, suffix: '', label: 'Years of experience' },
  { value: 9, suffix: '', label: 'Design awards' },
]

export const GALLERY_CATEGORIES = ['All', 'Identity', 'Packaging', 'Print', 'Motion']

export const GALLERY = [
  { id: 1, title: 'Aperture Mark Study', category: 'Identity', image: 'https://picsum.photos/seed/gallery-1/700/900' },
  { id: 2, title: 'Roast Stage Packs', category: 'Packaging', image: 'https://picsum.photos/seed/gallery-2/700/560' },
  { id: 3, title: 'Northfield Shelf Set', category: 'Packaging', image: 'https://picsum.photos/seed/gallery-3/700/900' },
  { id: 4, title: 'Ferro Type Specimen', category: 'Print', image: 'https://picsum.photos/seed/gallery-4/700/560' },
  { id: 5, title: 'Lumen Loop', category: 'Motion', image: 'https://picsum.photos/seed/gallery-5/700/900' },
  { id: 6, title: 'Meridian Signage', category: 'Print', image: 'https://picsum.photos/seed/gallery-6/700/560' },
  { id: 7, title: 'Studio Norrland Set', category: 'Identity', image: 'https://picsum.photos/seed/gallery-7/700/900' },
  { id: 8, title: 'Origin Label System', category: 'Packaging', image: 'https://picsum.photos/seed/gallery-8/700/560' },
]
