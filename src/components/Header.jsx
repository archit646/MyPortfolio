import { useState } from 'react'

export default function Header() {
  const avatarUrl = import.meta.env.VITE_AVATAR_URL || ''
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 no-underline focus:outline-none focus-visible:outline-none">
          
            <img src='archit-photo.jpg' alt="Avatar" className="h-9 w-9 rounded-full object-cover ring-2 ring-sky-200 hover:ring-sky-300 transition" />
          
          <span className="text-base font-semibold">Archit Kumar</span>
        </a>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open ? 'true' : 'false'}
          className="md:hidden p-2 rounded-full hover:bg-sky-50 text-gray-700 transition"
          onClick={() => setOpen(v => !v)}
        >
          <span className="relative inline-block w-6 h-6">
            <span className={`${open ? 'opacity-0' : 'opacity-100'} absolute left-0 top-[3px] block w-6 h-[2px] bg-gray-700 transition-opacity`}></span>
            <span className={`${open ? 'rotate-45 top-[8px]' : 'top-[8px]'} absolute left-0 block w-6 h-[2px] bg-gray-700 transition-transform`}></span>
            <span className={`${open ? '-rotate-45 top-[8px]' : 'top-[13px]'} absolute left-0 block w-6 h-[2px] bg-gray-700 transition-transform`}></span>
          </span>
        </button>
        <nav className="hidden md:flex items-center gap-2">
          <a href="#hero" className="px-3 py-1.5 rounded-full hover:bg-sky-50 text-sm font-medium text-gray-700 transition no-underline focus:outline-none focus-visible:outline-none">Home</a>
          <a href="#projects" className="px-3 py-1.5 rounded-full hover:bg-sky-50 text-sm font-medium text-gray-700 transition no-underline focus:outline-none focus-visible:outline-none">Projects</a>
          <a href="#experience" className="px-3 py-1.5 rounded-full hover:bg-sky-50 text-sm font-medium text-gray-700 transition no-underline focus:outline-none focus-visible:outline-none">Experience</a>
          <a href="#education" className="px-3 py-1.5 rounded-full hover:bg-sky-50 text-sm font-medium text-gray-700 transition no-underline focus:outline-none focus-visible:outline-none">Education</a>
          <a href="#skills" className="px-3 py-1.5 rounded-full hover:bg-sky-50 text-sm font-medium text-gray-700 transition no-underline focus:outline-none focus-visible:outline-none">Skills</a>
          <a href="#contact" className="px-3 py-1.5 rounded-full hover:bg-sky-50 text-sm font-medium text-gray-700 transition no-underline focus:outline-none focus-visible:outline-none">Contact</a>
        </nav>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white/70 backdrop-blur-md shadow-lg ring-1 ring-sky-100">
          <div className="max-w-6xl mx-auto px-4 py-3 grid grid-cols-1 gap-2">
            <a href="#hero" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-sky-50 text-sm font-medium text-gray-700">Home</a>
            <a href="#projects" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-sky-50 text-sm font-medium text-gray-700">Projects</a>
            <a href="#experience" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-sky-50 text-sm font-medium text-gray-700">Experience</a>
            <a href="#education" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-sky-50 text-sm font-medium text-gray-700">Education</a>
            <a href="#skills" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-sky-50 text-sm font-medium text-gray-700">Skills</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-sky-50 text-sm font-medium text-gray-700">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
