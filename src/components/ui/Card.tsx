import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`card p-6 ${onClick ? 'cursor-pointer hover:shadow-card-hover' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
