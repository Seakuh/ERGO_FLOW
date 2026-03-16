import { Outlet } from 'react-router-dom'
import { useScrollToTop } from '../../hooks/useScrollToTop'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import { useUIStore } from '../../store/uiStore'

export default function AppShell() {
  useScrollToTop()
  const { sidebarOpen } = useUIStore()

  return (
    <div className="flex h-screen bg-bg-primary">
      {/* Sidebar - hidden on mobile, visible on desktop */}
      <div className={`hidden md:flex fixed inset-y-0 left-0 w-64 bg-bg-secondary border-r border-gray-200 ${sidebarOpen ? '' : '-translate-x-full'}`}>
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 md:ml-64 flex flex-col overflow-hidden">
        {/* Top bar - mobile only */}
        <div className="md:hidden sticky top-0 z-50 bg-bg-secondary border-b border-gray-200">
          <TopBar />
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
