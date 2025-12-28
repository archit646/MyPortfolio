import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-slate-900 min-h-screen text-slate-200 w-full overflow-x-hidden">
      <App />
    </div>
  </StrictMode>
)
