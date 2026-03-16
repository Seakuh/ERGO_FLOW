import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import PageContainer from '../components/layout/PageContainer'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import DifficultyBadge from '../components/shared/DifficultyBadge'
import LocationBadge from '../components/shared/LocationBadge'
import BodyPartTag from '../components/shared/BodyPartTag'
import { useExerciseStore } from '../store/exerciseStore'
import { useFilteredExercises } from '../hooks/useFilteredExercises'
import { ExerciseCategory, Location, BodyPart } from '../types/common'

const categories: { value: ExerciseCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'mobility', label: 'Mobility' },
  { value: 'strengthening', label: 'Strengthening' },
  { value: 'stretching', label: 'Stretching' },
  { value: 'posture_reset', label: 'Posture Reset' },
]

const difficulties: { value: 'all' | 'beginner' | 'intermediate' | 'advanced'; label: string }[] = [
  { value: 'all', label: 'All Levels' },
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
]

const locations: { value: Location | 'all'; label: string }[] = [
  { value: 'all', label: 'Any Location' },
  { value: 'homeOffice', label: 'Home Office' },
  { value: 'coffee', label: 'Coffee Shop' },
  { value: 'gym', label: 'Gym' },
  { value: 'anywhere', label: 'Anywhere' },
]

const bodyParts: { value: BodyPart | 'all'; label: string }[] = [
  { value: 'all', label: 'All Body Parts' },
  { value: 'neck', label: 'Neck' },
  { value: 'shoulders', label: 'Shoulders' },
  { value: 'upperBack', label: 'Upper Back' },
  { value: 'midBack', label: 'Mid Back' },
  { value: 'lowerBack', label: 'Lower Back' },
  { value: 'chest', label: 'Chest' },
  { value: 'arms', label: 'Arms' },
  { value: 'forearms', label: 'Forearms' },
  { value: 'wrists', label: 'Wrists' },
  { value: 'core', label: 'Core' },
  { value: 'hips', label: 'Hips' },
  { value: 'legs', label: 'Legs' },
  { value: 'fullBody', label: 'Full Body' },
]

export default function Exercises() {
  const { filters, setFilter, resetFilters } = useExerciseStore()
  const filteredExercises = useFilteredExercises()

  const hasActiveFilters =
    filters.category !== 'all' ||
    filters.difficulty !== 'all' ||
    filters.location !== 'all' ||
    filters.bodyPart !== 'all' ||
    filters.search !== ''

  return (
    <PageContainer>
      <h1 className="text-4xl font-bold text-text-primary mb-8">Exercises Library</h1>

      {/* Filters */}
      <Card className="mb-8">
        <div className="space-y-6">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Search</label>
            <Input
              placeholder="Search exercises by name or tags..."
              value={filters.search}
              onChange={(e) => setFilter('search', e.target.value)}
            />
          </div>

          {/* Location Filter */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-3">📍 Location</label>
            <div className="flex flex-wrap gap-2">
              {locations.map((loc) => (
                <button
                  key={loc.value}
                  onClick={() => setFilter('location', loc.value)}
                  className={`px-3 py-1 rounded-pill text-sm font-medium transition-all ${
                    filters.location === loc.value
                      ? 'bg-accent-primary text-white'
                      : 'bg-gray-100 text-text-primary hover:bg-gray-200'
                  }`}
                >
                  {loc.label}
                </button>
              ))}
            </div>
          </div>

          {/* Body Part Filter */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-3">💪 Body Part Target</label>
            <select
              value={filters.bodyPart}
              onChange={(e) => setFilter('bodyPart', e.target.value as any)}
              className="w-full md:w-full px-4 py-2 rounded-card bg-bg-primary border border-gray-200 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
            >
              {bodyParts.map((bp) => (
                <option key={bp.value} value={bp.value}>
                  {bp.label}
                </option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-3">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setFilter('category', cat.value)}
                  className={`px-3 py-1 rounded-pill text-sm font-medium transition-all ${
                    filters.category === cat.value
                      ? 'bg-accent-primary text-white'
                      : 'bg-gray-100 text-text-primary hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-3">Difficulty</label>
            <select
              value={filters.difficulty}
              onChange={(e) => setFilter('difficulty', e.target.value as any)}
              className="w-full md:w-64 px-4 py-2 rounded-card bg-bg-primary border border-gray-200 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
            >
              {difficulties.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>

          {/* Reset Filters */}
          {hasActiveFilters && (
            <Button variant="secondary" size="sm" onClick={resetFilters}>
              <X className="w-4 h-4 mr-2 inline" />
              Clear All Filters
            </Button>
          )}
        </div>
      </Card>

      {/* Results */}
      <div>
        <p className="text-text-secondary text-sm mb-6">
          {filteredExercises.length} exercise{filteredExercises.length !== 1 ? 's' : ''} found
        </p>
        {filteredExercises.length === 0 ? (
          <Card className="text-center py-12">
            <p className="text-text-secondary">No exercises found. Try adjusting your filters.</p>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExercises.map((exercise) => (
              <Link key={exercise.id} to={`/exercises/${exercise.id}`}>
                <Card className="h-full overflow-hidden hover:shadow-card-hover transition-shadow flex flex-col">
                  {/* Thumbnail */}
                  <div className="w-full aspect-video bg-gray-200 rounded-card mb-4 overflow-hidden flex items-center justify-center">
                    <img
                      src={`https://i.ytimg.com/vi/${exercise.youtubeId}/hqdefault.jpg`}
                      alt={exercise.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none'
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="font-bold text-lg text-text-primary mb-2 line-clamp-1">{exercise.name}</h3>
                    <p className="text-sm text-text-secondary mb-3 line-clamp-2 flex-1">{exercise.shortDescription}</p>

                    {/* Location & Body Part Tags */}
                    <div className="mb-3 space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {exercise.location.map((loc) => (
                          <LocationBadge key={loc} location={loc} />
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {exercise.bodyPart.slice(0, 2).map((part) => (
                          <BodyPartTag key={part} part={part} />
                        ))}
                        {exercise.bodyPart.length > 2 && (
                          <span className="text-xs text-text-secondary">+{exercise.bodyPart.length - 2}</span>
                        )}
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-gray-100">
                      <div className="flex gap-2">
                        <DifficultyBadge difficulty={exercise.difficulty} />
                        <Badge variant="secondary" className="text-xs">
                          {exercise.durationMinutes} min
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </PageContainer>
  )
}
