import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'

export default function App() {
  useEffect(() => {
    location.hash = '#hero'
  }, [])
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full">
        <section id="hero" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
          <Hero />
        </section>
        <div className="border-t border-white/20" />
        <section id="projects" className="py-20 bg-gradient-to-b from-sky-900 to-sky-800 text-white overflow-hidden">
          <Projects />
        </section>
        <div className="border-t border-white/20" />
        <section id="experience" className="py-20 bg-gradient-to-b from-emerald-900 to-emerald-800 text-white overflow-hidden">
          <Experience />
        </section>
        <div className="border-t border-white/20" />
        <section id="education" className="py-20 bg-gradient-to-b from-indigo-900 to-indigo-800 text-white overflow-hidden">
          <Education />
        </section>
        <div className="border-t border-white/20" />
        <section id="skills" className="py-20 bg-gradient-to-b from-amber-900 to-amber-800 text-white overflow-hidden">
          <Skills />
        </section>
        <div className="border-t border-white/20" />
        <section id="contact" className="py-20 bg-gradient-to-b from-rose-900 to-rose-800 text-white overflow-hidden">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
