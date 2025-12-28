export default function Hero() {
  const params = new URLSearchParams(window.location.search)
  const paramPhoto = params.get('photo') || ''
  const photoUrl = paramPhoto || import.meta.env.VITE_HERO_PHOTO_URL || 'archit-photo.jpg'
  return (
    <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
      <div className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-sky-200 blur-3xl opacity-50" />
      <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-emerald-200 blur-3xl opacity-50" />
      <div className="relative">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
          Archit Kumar
        </h1>
        <p className="mt-2 text-sm text-sky-200 font-semibold">Full Stack Developer</p>
        <p className="mt-3 text-gray-200 text-lg">
          Building real-world apps with Python, Django, React, WebSockets, and AI.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#projects" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-600 to-emerald-600 text-white font-medium shadow hover:shadow-lg hover:brightness-110 hover:scale-[1.02] transition">
            View Projects
          </a>
          <a
            href="#" download='Resume.pdf'
            className="px-5 py-2.5 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 hover:border-white/40 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="hidden md:block">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt="Profile"
            className="h-auto w-[70%] max-w-full mx-auto object-cover rounded-2xl ring-1 ring-sky-200 shadow hover:shadow-xl hover:scale-[1.02] transition"
          />
        ) : (
          <div className="h-56 rounded-2xl bg-gradient-to-br from-sky-100 to-emerald-100 shadow-inner" />
        )}
      </div>
    </div>
  )
}
