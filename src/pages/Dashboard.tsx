import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp } from 'lucide-react'
import PageContainer from '../components/layout/PageContainer'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import DifficultyBadge from '../components/shared/DifficultyBadge'
import { useExerciseStore } from '../store/exerciseStore'

export default function Dashboard() {
  const { exercises, completedExerciseIds } = useExerciseStore()
  const featuredExercises = exercises.slice(0, 3)
  const recentCompleted = completedExerciseIds.slice(-3).reverse()

  return (
    <PageContainer>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Good morning.{' '}
          <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
            Let's move.
          </span>
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mb-6">
          Desk work builds posture problems. Break the cycle with guided exercises and ergonomic knowledge.
        </p>
        <div className="flex gap-4">
          <Link to="/exercises">
            <Button>Start Moving</Button>
          </Link>
          <Link to="/wiki">
            <Button variant="secondary">Learn More</Button>
          </Link>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-text-primary">Featured Exercises</h2>
          <Link to="/exercises" className="text-accent-primary hover:underline text-sm font-medium">
            View All
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredExercises.map((exercise) => (
            <Link key={exercise.id} to={`/exercises/${exercise.id}`}>
              <Card className="h-full hover:shadow-card-hover transition-shadow">
                {/* Thumbnail placeholder */}
                <div className="w-full aspect-video bg-gradient-to-br from-accent-primary to-accent-secondary rounded-card mb-4 flex items-center justify-center text-white">
                  <img
                    src={`https://i.ytimg.com/vi/${exercise.youtubeId}/hqdefault.jpg`}
                    alt={exercise.name}
                    className="w-full h-full object-cover rounded-card"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none'
                    }}
                  />
                </div>
                <h3 className="font-bold text-lg text-text-primary mb-2">{exercise.name}</h3>
                <p className="text-sm text-text-secondary mb-4 line-clamp-2">{exercise.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <DifficultyBadge difficulty={exercise.difficulty} />
                  <span className="text-xs text-text-secondary">{exercise.durationMinutes} min</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity Section */}
      {recentCompleted.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-accent-secondary" />
            Recent Activity
          </h2>
          <Card>
            <div className="space-y-3">
              {recentCompleted.map((exerciseId) => {
                const exercise = exercises.find((e) => e.id === exerciseId)
                return exercise ? (
                  <Link
                    key={exerciseId}
                    to={`/exercises/${exerciseId}`}
                    className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-card transition-colors"
                  >
                    <span className="text-text-primary font-medium">{exercise.name}</span>
                    <ArrowRight className="w-5 h-5 text-accent-primary" />
                  </Link>
                ) : null
              })}
            </div>
          </Card>
        </div>
      )}

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <div className="text-center">
            <p className="text-3xl font-bold text-accent-primary">{exercises.length}</p>
            <p className="text-text-secondary text-sm mt-2">Total Exercises</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-3xl font-bold text-accent-secondary">{completedExerciseIds.length}</p>
            <p className="text-text-secondary text-sm mt-2">Completed</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-3xl font-bold text-accent-primary">5</p>
            <p className="text-text-secondary text-sm mt-2">Wiki Articles</p>
          </div>
        </Card>
      </div>
    </PageContainer>
  )
}
