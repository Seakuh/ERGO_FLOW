import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Bookmark } from 'lucide-react'
import PageContainer from '../components/layout/PageContainer'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import { useWikiStore } from '../store/wikiStore'
import {
  forwardHeadPosture,
  thoracicSpineMobility,
  deskSetupGuide,
  upperCrossedSyndrome,
  scapularStability,
} from '../data/wiki/articles'
import { Exercise } from '../types/exercise'
import { useExerciseStore } from '../store/exerciseStore'

const articleRegistry: Record<string, any> = {
  'forward-head-posture': forwardHeadPosture,
  'thoracic-spine-mobility': thoracicSpineMobility,
  'desk-setup-guide': deskSetupGuide,
  'upper-crossed-syndrome': upperCrossedSyndrome,
  'scapular-stability': scapularStability,
}

export default function WikiArticle() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const { bookmarkedSlugs, toggleBookmark } = useWikiStore()
  const { exercises } = useExerciseStore()

  const article = articleRegistry[slug || '']
  const isBookmarked = bookmarkedSlugs.includes(slug || '')

  if (!article) {
    return (
      <PageContainer>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Article not found</h1>
          <Link to="/wiki">
            <button className="inline-flex items-center gap-2 px-6 py-2 bg-accent-primary text-white rounded-pill font-medium hover:shadow-card-hover transition-shadow">
              Back to Wiki
            </button>
          </Link>
        </div>
      </PageContainer>
    )
  }

  const relatedExercises = exercises.filter((e: Exercise) => article.relatedExerciseIds.includes(e.id))

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
            <Badge variant="primary" className="mb-4">
              {article.category}
            </Badge>
            <h1 className="text-4xl font-bold text-text-primary mb-2">{article.title}</h1>
            <p className="text-lg text-text-secondary">{article.subtitle}</p>
          </div>
          <button
            onClick={() => toggleBookmark(article.slug)}
            className={`flex-shrink-0 p-3 rounded-card transition-colors ${
              isBookmarked
                ? 'bg-accent-secondary text-white'
                : 'bg-gray-100 text-text-secondary hover:bg-accent-secondary hover:text-white'
            }`}
          >
            <Bookmark className="w-6 h-6" fill={isBookmarked ? 'currentColor' : 'none'} />
          </button>
        </div>

        <div className="text-sm text-text-secondary flex gap-4">
          <span>{article.readingTimeMinutes} min read</span>
          <span>•</span>
          <span>Updated {new Date(article.updatedAt).toLocaleDateString()}</span>
        </div>
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Main article (left - 3 cols) */}
        <div className="lg:col-span-3">
          {article.sections.map((section: any, idx: number) => (
            <div key={idx} className="mb-12">
              <h2 id={section.id} className="text-2xl font-bold text-text-primary mb-4 scroll-mt-20">
                {section.heading}
              </h2>
              <p className="text-text-primary leading-relaxed whitespace-pre-wrap">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Sidebar (right - 1 col) */}
        <div className="lg:col-span-1">
          {/* Table of Contents */}
          {article.sections.length > 0 && (
            <Card className="mb-6 sticky top-8">
              <h3 className="font-bold text-text-primary mb-4">Contents</h3>
              <ul className="space-y-2 text-sm">
                {article.sections.map((section: any) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-accent-primary hover:underline"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {/* Related articles */}
          {article.relatedSlugs.length > 0 && (
            <Card>
              <h3 className="font-bold text-text-primary mb-4">Related Articles</h3>
              <ul className="space-y-3">
                {article.relatedSlugs.map((relatedSlug: string) => (
                  <li key={relatedSlug}>
                    <Link
                      to={`/wiki/${relatedSlug}`}
                      className="text-accent-primary hover:underline text-sm"
                    >
                      {relatedSlug.replace(/-/g, ' ')}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>
      </div>

      {/* Related Exercises */}
      {relatedExercises.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Related Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedExercises.map((exercise: Exercise) => (
              <Link key={exercise.id} to={`/exercises/${exercise.id}`}>
                <Card>
                  <h3 className="font-bold text-lg text-text-primary mb-2">{exercise.name}</h3>
                  <p className="text-sm text-text-secondary mb-4">{exercise.shortDescription}</p>
                  <Badge variant="secondary" className="text-xs">
                    {exercise.difficulty}
                  </Badge>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </PageContainer>
  )
}
