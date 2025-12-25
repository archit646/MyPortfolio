import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVis(true)
        io.disconnect()
      }
    }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 will-change-transform ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
    >
      {children}
    </div>
  )
}

export default function Projects() {
  return (
    <div className="relative max-w-6xl mx-auto px-4">
      <div className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-sky-300 blur-3xl opacity-30" />
      <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-emerald-300 blur-3xl opacity-30" />
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">Projects</h2>
        <p className="mt-2 text-sm text-gray-200">Click any card to open the live app.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 100}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
