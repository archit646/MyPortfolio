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

export default function Skills() {
  const blocks = [
    {
      title: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      items: ['Python', 'Django', 'Django REST Framework', 'MySQL'],
    },
    {
      title: 'Real-Time',
      items: ['Django Channels', 'WebSockets'],
    },
    {
      title: 'AI / LLM',
      items: ['Gemini', 'Prompt Engineering'],
    },
    {
      title: 'Tools & Deployment',
      items: ['GitHub', 'Netlify', 'Render', 'Vercel'],
    },
  ]

  return (
    <div className="relative max-w-6xl mx-auto px-4">
      <div className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-amber-300 blur-3xl opacity-30" />
      <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-orange-300 blur-3xl opacity-30" />
      <h2 className="text-3xl font-bold tracking-tight mb-8 bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blocks.map((b, i) => (
          <Reveal key={b.title} delay={i * 120}>
          <div className="bg-white backdrop-blur-sm border border-sky-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-sky-300 hover:ring-1 hover:ring-sky-200 transition text-gray-900">
            <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {b.items.map((i) => (
                <li key={i} className="text-sm text-sky-800 bg-sky-50 px-3 py-1 rounded-full">{i}</li>
              ))}
            </ul>
          </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
