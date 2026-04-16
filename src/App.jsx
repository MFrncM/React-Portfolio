import { useEffect } from 'react'
import { useTheme } from './hooks/useTheme'
import { useScrollReveal } from './hooks/useScrollReveal'

import Navbar     from './components/Navbar/Navbar'
import Hero       from './components/Hero/Hero'
import About      from './components/About/About'
import Skills     from './components/Skills/Skills'
import Projects   from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Contact    from './components/Contact/Contact'
import Footer     from './components/Footer/Footer'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  // Activate scroll reveal — runs after every render so
  // newly mounted elements get observed too
  useScrollReveal()

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
