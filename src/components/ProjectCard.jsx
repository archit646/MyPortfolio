export default function ProjectCard({ project }) {
  const onOpenLive = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer')
    } else {
      alert('Live URL missing. Please provide the deployed link.')
    }
  }

  const onOpenRepo = (e) => {
    e.stopPropagation()
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer')
    } else {
      alert('Repository URL missing. Please provide the GitHub link.')
    }
  }

  return (
    <div className="rounded-2xl p-[1px] bg-gradient-to-br from-sky-300 to-emerald-300 hover:from-sky-400 hover:to-emerald-400 transition">
      <div
        className="group bg-white backdrop-blur-sm border border-sky-100 rounded-2xl shadow-sm hover:shadow-md hover:border-sky-300 hover:ring-1 hover:ring-sky-200 transition cursor-pointer flex flex-col hover:-translate-y-0.5 text-gray-900"
        onClick={onOpenLive}
      >
      <div className="p-6 flex-1">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-700">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-sky-50 text-sky-800">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 pb-6 pt-0 flex gap-2">
        <button className="px-3 py-1.5 rounded-full bg-sky-600 text-white text-sm hover:bg-sky-700" onClick={onOpenLive}>
          Live Demo
        </button>
        <button
          className="px-3 py-1.5 rounded-full border text-sm hover:bg-gray-50"
          onClick={onOpenRepo}
        >
          GitHub Repo
        </button>
      </div>
      </div>
    </div>
  )
}
