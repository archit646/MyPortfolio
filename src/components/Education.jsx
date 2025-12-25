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

export default function Education() {
  const schools = [
    { degree: 'MCA in Computer Science', school: 'FIT College, Meerut, UP', period: 'Ongoing' },
    { degree: 'BCA in Computer Science', school: 'DAV College, Muzaffarnagar, UP', period: 'Graduated: 2023' },
    { degree: '12th (UP Board)', school: 'Sarvodya Inter College, Muzaffarnagar', period: 'March 2020' },
    { degree: '10th (UP Board)', school: 'Sanatan Dharma Inter College, Muzaffarnagar', period: 'March 2017' },
  ]

  return (
    <div className="relative max-w-6xl mx-auto px-4">
      <div className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-indigo-300 blur-3xl opacity-30" />
      <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-violet-300 blur-3xl opacity-30" />
      <h2 className="text-3xl font-bold tracking-tight mb-8 bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {schools.map((s, i) => (
          <Reveal key={s.degree} delay={i * 120}>
          <div className="bg-white backdrop-blur-sm border border-sky-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:ring-1 hover:ring-sky-200 hover:border-sky-300 transition hover:-translate-y-0.5 text-gray-900">
            <div className="text-lg font-semibold text-gray-900">{s.degree}</div>
            <div className="text-sm text-gray-600">{s.school}</div>
            <div className="text-sm text-gray-500 mt-1">{s.period}</div>
          </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
