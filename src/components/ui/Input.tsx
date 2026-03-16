import { ChangeEvent } from 'react'

interface InputProps {
  placeholder?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  type?: string
  className?: string
}

export default function Input({
  placeholder,
  value,
  onChange,
  type = 'text',
  className = '',
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 rounded-card bg-bg-secondary border border-gray-200 text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all ${className}`}
    />
  )
}
