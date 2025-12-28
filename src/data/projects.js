export const projects = [
  {
    id: 'blog',
    title: 'Blog Website',
    description:
      'Full-stack blog with authentication, posts, comments, search, and filters.',
    tech: ['Django', 'DRF', 'React', 'Tailwind'],
    liveUrl: import.meta.env.VITE_BLOG_LIVE_URL || 'https://archit-blog.netlify.app/',
    githubUrl: import.meta.env.VITE_BLOG_REPO_URL || '',
  },
  {
    id: 'chat',
    title: 'Real-Time Chat Application',
    description:
      'Channels + WebSockets chat app with rooms, live messaging, and history.',
    tech: ['Django Channels', 'WebSockets', 'React'],
    liveUrl: import.meta.env.VITE_CHAT_LIVE_URL || 'https://chat010.netlify.app/',
    githubUrl: import.meta.env.VITE_CHAT_REPO_URL || '',
  },
  {
    id: 'resume',
    title: 'AI Resume Analyzer',
    description: 'Resume upload and AI-based analysis powered by Gemini LLM.',
    tech: ['DRF', 'React', 'Gemini LLM'],
    liveUrl: import.meta.env.VITE_RESUME_LIVE_URL || '',
    githubUrl: import.meta.env.VITE_RESUME_REPO_URL || '',
  },
]
