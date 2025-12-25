import { useEffect, useRef, useState } from 'react'

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

export default function Experience() {
  const roles = [
    {
      title: 'Full Stack Development Intern',
      company: 'DUCAT Institute',
      location: 'Noida',
      period: 'Feb 2024 — Oct 2024',
      points: [
        'Worked on real-time projects using Python, Django, and MySQL',
        'Built and tested REST APIs; integrated basic frontend',
      ],
    },
  ]

  return (
    <div className="relative max-w-6xl mx-auto px-4">
      <div className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-emerald-300 blur-3xl opacity-30" />
      <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-teal-300 blur-3xl opacity-30" />
      <h2 className="text-3xl font-bold tracking-tight mb-8 bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">Experience</h2>
      <div className="space-y-6">
        {roles.map((r, i) => (
          <Reveal key={r.title} delay={i * 120}>
          <div className="bg-white backdrop-blur-sm border border-sky-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:ring-1 hover:ring-sky-200 hover:border-sky-300 transition hover:-translate-y-0.5 text-gray-900">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-lg font-semibold text-gray-900">{r.title}</div>
                <div className="text-sm text-gray-600">{r.company} • {r.location}</div>
              </div>
              <div className="text-sm text-gray-500">{r.period}</div>
            </div>
            <ul className="mt-4 space-y-2">
              {r.points.map((p) => (
                <li key={p} className="text-sm text-gray-700">• {p}</li>
              ))}
            </ul>
          </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
