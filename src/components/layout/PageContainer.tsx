import { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
  className?: string
}

export default function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <div className={`max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12 ${className}`}>
      {children}
    </div>
  )
}
