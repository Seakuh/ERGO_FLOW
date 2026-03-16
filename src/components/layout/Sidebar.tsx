import { Link, useLocation } from 'react-router-dom'
import { Home, Dumbbell, BookOpen } from 'lucide-react'

const navItems = [
  { label: 'Dashboard', icon: Home, path: '/dashboard' },
  { label: 'Exercises', icon: Dumbbell, path: '/exercises' },
  { label: 'Wiki', icon: BookOpen, path: '/wiki' },
]

export default function Sidebar() {
  const { pathname } = useLocation()

  return (
    <div className="flex flex-col h-full p-6 overflow-y-auto">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
          ErgoFlow
        </h1>
        <p className="text-sm text-text-secondary mt-1">Posture & Movement</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.path || (item.path === '/dashboard' && pathname === '/')
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-card transition-all ${
                isActive
                  ? 'bg-accent-primary text-white shadow-card'
                  : 'text-text-primary hover:bg-bg-primary'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="text-xs text-text-secondary text-center py-4 border-t border-gray-200 mt-auto">
        <p>Move better.</p>
        <p>Feel better.</p>
      </div>
    </div>
  )
}
