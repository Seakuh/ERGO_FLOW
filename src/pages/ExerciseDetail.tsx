import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react'
import PageContainer from '../components/layout/PageContainer'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import DifficultyBadge from '../components/shared/DifficultyBadge'
import MuscleTag from '../components/shared/MuscleTag'
import { useExerciseStore } from '../store/exerciseStore'
import { useUIStore } from '../store/uiStore'

export default function ExerciseDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { exercises, completedExerciseIds, markComplete } = useExerciseStore()
  const { addToast } = useUIStore()

  const exercise = exercises.find((e) => e.id === id)
  const isCompleted = completedExerciseIds.includes(id || '')
  const relatedExercises = exercise
    ? exercises.filter((e) => exercise.relatedExerciseIds.includes(e.id)).slice(0, 3)
    : []

  if (!exercise) {
    return (
      <PageContainer>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Exercise not found</h1>
          <Link to="/exercises">
            <Button>Back to Exercises</Button>
          </Link>
        </div>
      </PageContainer>
    )
  }

  const handleMarkComplete = () => {
    markComplete(exercise.id)
    addToast(`Great job! ${exercise.name} marked as complete.`, 'success')
  }

  return (
    <PageContainer>
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-accent-primary hover:underline mb-6 font-medium"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h1 className="text-4xl font-bold text-text-primary mb-2">{exercise.name}</h1>
            <p className="text-lg text-text-secondary">{exercise.shortDescription}</p>
          </div>
          {isCompleted && (
            <Badge variant="success" className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Completed
            </Badge>
          )}
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <DifficultyBadge difficulty={exercise.difficulty} />
          <Badge variant="secondary">{exercise.durationMinutes} minutes</Badge>
          {exercise.equipment.length > 0 && (
            <Badge variant="secondary">{exercise.equipment.join(', ')}</Badge>
          )}
        </div>

        <Button
          variant={isCompleted ? 'secondary' : 'primary'}
          onClick={handleMarkComplete}
          disabled={isCompleted}
        >
          {isCompleted ? '✓ Completed' : 'Mark as Complete'}
        </Button>
      </div>

      {/* YouTube Player */}
      <Card className="mb-8 p-0 overflow-hidden">
        <div className="relative w-full overflow-hidden rounded-card bg-black" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${exercise.youtubeId}?rel=0&modestbranding=1`}
            title={exercise.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Card>

      {/* Description */}
      <Card className="mb-8">
        <p className="text-text-primary leading-relaxed">{exercise.description}</p>
      </Card>

      {/* Main content grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Coaching cues (left - 2 cols) */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-text-primary mb-6">How to Perform</h2>
          <Card>
            <ol className="space-y-4">
              {exercise.cues.map((cue) => (
                <li key={cue.order} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-primary text-white font-bold text-sm">
                      {cue.order}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-text-primary">{cue.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Card>
        </div>

        {/* Exercise meta (right - 1 col) */}
        <div className="space-y-6">
          {/* Sets & Reps */}
          <Card>
            <h3 className="font-bold text-text-primary mb-4">Sets & Reps</h3>
            <div className="space-y-2 text-sm">
              {exercise.sets.reps && <p className="text-text-secondary"><span className="font-medium">Reps:</span> {exercise.sets.reps}</p>}
              {exercise.sets.sets && <p className="text-text-secondary"><span className="font-medium">Sets:</span> {exercise.sets.sets}</p>}
              {exercise.sets.holdSeconds && <p className="text-text-secondary"><span className="font-medium">Hold:</span> {exercise.sets.holdSeconds}s</p>}
              {exercise.sets.rounds && <p className="text-text-secondary"><span className="font-medium">Rounds:</span> {exercise.sets.rounds}</p>}
              {exercise.sets.restSeconds && <p className="text-text-secondary"><span className="font-medium">Rest:</span> {exercise.sets.restSeconds}s</p>}
            </div>
          </Card>

          {/* Muscles */}
          <Card>
            <h3 className="font-bold text-text-primary mb-4">Muscles Worked</h3>
            <div className="space-y-3">
              {exercise.muscles.primary.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-text-secondary uppercase mb-2">Primary</p>
                  <div className="flex flex-wrap gap-2">
                    {exercise.muscles.primary.map((muscle) => (
                      <MuscleTag key={muscle} muscle={muscle} />
                    ))}
                  </div>
                </div>
              )}
              {exercise.muscles.secondary.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-text-secondary uppercase mb-2">Secondary</p>
                  <div className="flex flex-wrap gap-2">
                    {exercise.muscles.secondary.map((muscle) => (
                      <MuscleTag key={muscle} muscle={muscle} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>

      {/* Benefits & Contraindications */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-accent-secondary" />
            Benefits
          </h2>
          <Card>
            <ul className="space-y-3">
              {exercise.benefits.map((benefit, idx) => (
                <li key={idx} className="flex gap-3 text-text-primary">
                  <span className="text-accent-secondary font-bold">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-red-500" />
            Contraindications
          </h2>
          <Card>
            <ul className="space-y-3">
              {exercise.contraindications.map((contra, idx) => (
                <li key={idx} className="flex gap-3 text-text-primary">
                  <span className="text-red-500 font-bold">⚠</span>
                  <span>{contra}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      {/* Related Exercises */}
      {relatedExercises.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-6">Related Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedExercises.map((relatedEx) => (
              <Link key={relatedEx.id} to={`/exercises/${relatedEx.id}`}>
                <Card className="h-full">
                  <h3 className="font-bold text-lg text-text-primary mb-2">{relatedEx.name}</h3>
                  <p className="text-sm text-text-secondary mb-4">{relatedEx.shortDescription}</p>
                  <DifficultyBadge difficulty={relatedEx.difficulty} />
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </PageContainer>
  )
}
