import { useState } from 'react'
import { createPortal } from 'react-dom'

export default function Header() {
  const avatarUrl = import.meta.env.VITE_AVATAR_URL || ''
  const [open, setOpen] = useState(false)
  const [showAvatar, setShowAvatar] = useState(false)
  const avatarSrc = avatarUrl || 'archit-photo.jpg'
  const params = new URLSearchParams(window.location.search)
  const paramPhoto = params.get('photo') || ''
  const modalPhotoSrc = paramPhoto || import.meta.env.VITE_HERO_PHOTO_URL || avatarSrc
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 no-underline focus:outline-none focus-visible:outline-none">
            <img
              src={avatarSrc}
              alt="Avatar"
              className="h-9 w-9 rounded-full object-cover ring-2 ring-sky-200 hover:ring-sky-300 transition cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                setShowAvatar(true)
              }}
            />
          <span className="text-base font-semibold">Archit Kumar</span>
        </a>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open ? 'true' : 'false'}
          className="md:hidden p-2 rounded-full hover:bg-sky-50 text-gray-700 transition flex items-center justify-center"
          onClick={() => setOpen(v => !v)}
        >
          <span className="relative inline-block w-6 h-6">
            <span className={`${open ? 'opacity-0' : 'opacity-100'} absolute left-0 top-[4px] block w-6 h-[3px] bg-sky-700 transition-opacity`}></span>
            <span className={`${open ? 'rotate-45 top-[9px]' : 'top-[9px]'} absolute left-0 block w-6 h-[3px] bg-sky-700 transition-transform`}></span>
            <span className={`${open ? '-rotate-45 top-[9px]' : 'top-[14px]'} absolute left-0 block w-6 h-[3px] bg-sky-700 transition-transform`}></span>
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
      {showAvatar &&
        createPortal(
          <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-2xl flex items-center justify-center" onClick={() => setShowAvatar(false)}>
            <img
              src={modalPhotoSrc}
              alt="Profile"
              className="max-w-[92vw] max-h-[88vh] object-contain rounded-2xl ring-1 ring-sky-200 shadow-2xl hover:shadow-[0_8px_40px_rgb(56,189,248,0.35)] transition"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body
        )
      }
    </header>
  )
}
