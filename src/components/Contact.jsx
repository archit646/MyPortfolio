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

export default function Contact() {
  const email = import.meta.env.VITE_EMAIL || 'architk471@gmail.com'
  const github = import.meta.env.VITE_GITHUB || 'https://github.com/archit646'
  const linkedin = import.meta.env.VITE_LINKEDIN || 'https://www.linkedin.com/in/archit-kumar-725939328/'
  return (
    <div className="relative max-w-6xl mx-auto px-4">
      <div className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-rose-300 blur-3xl opacity-30" />
      <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-pink-300 blur-3xl opacity-30" />
      <h2 className="text-3xl font-bold tracking-tight mb-8 bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Reveal delay={0}>
        <div className="bg-white backdrop-blur-sm border border-sky-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-sky-300 hover:ring-1 hover:ring-sky-200 transition text-gray-900">
          <div className="text-sm text-gray-600">Email</div>
          <a
            className="mt-1 inline-block text-sky-600 hover:underline"
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {email}
          </a>
        </div>
        </Reveal>
        <Reveal delay={120}>
        <div className="bg-white backdrop-blur-sm border border-sky-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-sky-300 hover:ring-1 hover:ring-sky-200 transition text-gray-900">
          <div className="text-sm text-gray-600">GitHub</div>
          <a
            className="mt-1 inline-block text-sky-600 hover:underline"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {github}
          </a>
        </div>
        </Reveal>
        <Reveal delay={240}>
        <div className="bg-white backdrop-blur-sm border border-sky-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-sky-300 hover:ring-1 hover:ring-sky-200 transition text-gray-900">
          <div className="text-sm text-gray-600">LinkedIn</div>
          <a
            className="mt-1 block w-full truncate text-sky-600 hover:underline"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkedin}
          </a>
        </div>
        </Reveal>
      </div>
    </div>
  )
}
