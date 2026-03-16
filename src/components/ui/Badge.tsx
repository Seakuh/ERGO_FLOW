import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  className?: string
}

export default function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
  const variantClasses = {
    primary: 'bg-accent-primary text-white',
    secondary: 'bg-accent-secondary text-white',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    danger: 'bg-red-100 text-red-700',
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-pill text-sm font-medium ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  )
}
