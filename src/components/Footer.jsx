export default function Footer() {
  const email = import.meta.env.VITE_EMAIL || 'architk471@gmail.com'
  const github = import.meta.env.VITE_GITHUB || 'https://github.com/archit646'
  const linkedin = import.meta.env.VITE_LINKEDIN || 'https://www.linkedin.com/in/archit-kumar-725939328/'
  const location = import.meta.env.VITE_LOCATION || 'Muzaffarnagar, UP, India'
  const role = import.meta.env.VITE_ROLE || 'Full Stack Developer'
  return (
    <footer className="border-t bg-white/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">Archit Kumar</div>
          <div className="mt-1 text-sm text-gray-700">{role}</div>
          <div className="mt-1 text-sm text-gray-500">{location}</div>
        </div>
        <div>
          <div className="text-sm text-gray-600 mb-3">Connect</div>
          <div className="flex flex-wrap gap-2">
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-sky-600 text-white text-sm hover:bg-sky-700"
            >
              Email
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full border text-sm hover:bg-gray-50"
            >
              GitHub
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full border text-sm hover:bg-gray-50"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Tech Stack</div>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 rounded-full bg-sky-50 text-sky-800">React</span>
            <span className="text-xs px-2 py-1 rounded-full bg-sky-50 text-sky-800">Tailwind CSS</span>
            <span className="text-xs px-2 py-1 rounded-full bg-sky-50 text-sky-800">Python</span>
            <span className="text-xs px-2 py-1 rounded-full bg-sky-50 text-sky-800">Django</span>
            <span className="text-xs px-2 py-1 rounded-full bg-sky-50 text-sky-800">MySQL</span>
          </div>
          <div className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} Archit Kumar</div>
        </div>
      </div>
    </footer>
  )
}
