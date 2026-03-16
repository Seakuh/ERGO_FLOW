import { Menu } from 'lucide-react'
import { useUIStore } from '../../store/uiStore'

export default function TopBar() {
  const { toggleSidebar } = useUIStore()

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <h1 className="text-xl font-bold text-accent-primary">ErgoFlow</h1>
      <button
        onClick={toggleSidebar}
        className="p-2 hover:bg-bg-primary rounded-card transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>
    </div>
  )
}
