function NavLink({ href, children }) {
  return (
    <a href={href} className="text-sm font-medium text-gray-700 hover:text-sky-600">
      {children}
    </a>
  )
}

export default function Header() {
  const avatarUrl = import.meta.env.VITE_AVATAR_URL || ''
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 no-underline focus:outline-none focus-visible:outline-none">
          
            <img src='archit-photo.jpg' alt="Avatar" className="h-9 w-9 rounded-full object-cover ring-2 ring-sky-200 hover:ring-sky-300 transition" />
          
          <span className="text-base font-semibold">Archit Kumar</span>
        </a>
        <nav className="flex items-center gap-2">
          <a href="#hero" className="px-3 py-1.5 rounded-full hover:bg-sky-50 text-sm font-medium text-gray-700 transition no-underline focus:outline-none focus-visible:outline-none">Home</a>
          <a href="#projects" className="px-3 py-1.5 rounded-full hover:bg-sky-50 text-sm font-medium text-gray-700 transition no-underline focus:outline-none focus-visible:outline-none">Projects</a>
          <a href="#experience" className="px-3 py-1.5 rounded-full hover:bg-sky-50 text-sm font-medium text-gray-700 transition no-underline focus:outline-none focus-visible:outline-none">Experience</a>
          <a href="#education" className="px-3 py-1.5 rounded-full hover:bg-sky-50 text-sm font-medium text-gray-700 transition no-underline focus:outline-none focus-visible:outline-none">Education</a>
          <a href="#skills" className="px-3 py-1.5 rounded-full hover:bg-sky-50 text-sm font-medium text-gray-700 transition no-underline focus:outline-none focus-visible:outline-none">Skills</a>
          <a href="#contact" className="px-3 py-1.5 rounded-full hover:bg-sky-50 text-sm font-medium text-gray-700 transition no-underline focus:outline-none focus-visible:outline-none">Contact</a>
        </nav>
      </div>
    </header>
  )
}
