import { Difficulty } from '../../types/common'
import Badge from '../ui/Badge'

interface DifficultyBadgeProps {
  difficulty: Difficulty
}

export default function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  const variants = {
    beginner: 'success',
    intermediate: 'warning',
    advanced: 'danger',
  } as const

  const labels = {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
  }

  return <Badge variant={variants[difficulty] as any}>{labels[difficulty]}</Badge>
}
