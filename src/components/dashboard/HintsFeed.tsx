import { Link } from 'react-router-dom'
import { Lightbulb, AlertCircle, CheckCircle, Clock, Zap } from 'lucide-react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import { Hint, hints } from '../../data/hints'
import { Exercise } from '../../types/exercise'

interface HintsFeedProps {
  exercises: Exercise[]
}

const iconMap = {
  lightbulb: Lightbulb,
  alert: AlertCircle,
  checkCircle: CheckCircle,
  clock: Clock,
  zap: Zap,
}

const categoryColors = {
  ergonomics: 'primary',
  exercise: 'secondary',
  breathing: 'success',
  posture: 'warning',
  habit: 'info',
} as const

export default function HintsFeed({ exercises }: HintsFeedProps) {
  // Show top 4 hints, prioritize high-priority items
  const displayHints = [...hints]
    .sort((a, b) => {
      const priorityOrder = { high: 0, medium: 1, low: 2 }
      return priorityOrder[a.priority] - priorityOrder[b.priority]
    })
    .slice(0, 4)

  return (
    <div>
      <h2 className="text-2xl font-bold text-text-primary mb-6">Daily Tips</h2>
      <div className="space-y-4">
        {displayHints.map((hint) => {
          const Icon = iconMap[hint.icon]
          const relatedExercise = hint.relatedExerciseId
            ? exercises.find((e) => e.id === hint.relatedExerciseId)
            : null

          return (
            <Card key={hint.id} className="hover:shadow-card-hover transition-shadow">
              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-primary bg-opacity-10">
                    <Icon className="w-5 h-5 text-accent-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-text-primary">{hint.title}</h3>
                    {hint.priority === 'high' && (
                      <Badge variant="danger" className="flex-shrink-0 text-xs">
                        Important
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-text-secondary mb-3">{hint.description}</p>

                  {/* Related exercise link */}
                  {relatedExercise && (
                    <Link
                      to={`/exercises/${relatedExercise.id}`}
                      className="inline-flex items-center gap-2 text-xs text-accent-primary hover:underline font-medium"
                    >
                      <Zap className="w-3 h-3" />
                      Try: {relatedExercise.name}
                    </Link>
                  )}
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* View all tips link */}
      <Link
        to="/exercises"
        className="inline-flex items-center gap-2 mt-6 text-accent-primary hover:underline font-medium text-sm"
      >
        <Lightbulb className="w-4 h-4" />
        Browse all {hints.length} tips
      </Link>
    </div>
  )
}
