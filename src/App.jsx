import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'
import { useSmoothScroll } from './hooks/useSmoothScroll'

export default function App() {
  const [loading, setLoading] = useState(true)
  const { theme, toggle } = useTheme()
  useSmoothScroll()

  return (
    <>
      <div className="grain" />
      <CustomCursor />
      <Loader onDone={() => setLoading(false)} />
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggle} />

      <AnimatePresence>
        {!loading && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Hero />
            <About />
            <Services />
            <Projects />
            <Skills />
            <Process />
            <Testimonials />
            <Experience />
            <Achievements />
            <Gallery />
            <Contact />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}
