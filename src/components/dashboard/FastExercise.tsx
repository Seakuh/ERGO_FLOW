import { Link } from 'react-router-dom'
import { Play, Clock } from 'lucide-react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import DifficultyBadge from '../shared/DifficultyBadge'
import { Exercise } from '../../types/exercise'

interface FastExerciseProps {
  exercise: Exercise
}

export default function FastExercise({ exercise }: FastExerciseProps) {
  return (
    <Link to={`/exercises/${exercise.id}`}>
      <Card className="overflow-hidden hover:shadow-card-hover transition-shadow h-full">
        {/* Thumbnail */}
        <div className="relative w-full aspect-video bg-gradient-to-br from-accent-primary to-accent-secondary rounded-card mb-4 overflow-hidden flex items-center justify-center">
          <img
            src={`https://i.ytimg.com/vi/${exercise.youtubeId}/hqdefault.jpg`}
            alt={exercise.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all">
            <Play className="w-12 h-12 text-white opacity-70" fill="currentColor" />
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-bold text-lg text-text-primary flex-1">{exercise.name}</h3>
          </div>

          <p className="text-sm text-text-secondary mb-4 line-clamp-2">{exercise.shortDescription}</p>

          {/* Meta */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2 text-xs text-text-secondary">
              <Clock className="w-4 h-4" />
              <span>{exercise.durationMinutes} min</span>
            </div>
            <DifficultyBadge difficulty={exercise.difficulty} />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="text-xs text-accent-primary font-medium flex items-center gap-1">
            <Play className="w-3 h-3" />
            Start Exercise
          </div>
        </div>
      </Card>
    </Link>
  )
}
