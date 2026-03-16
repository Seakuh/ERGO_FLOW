import { Link } from 'react-router-dom'
import { BookmarkIcon } from 'lucide-react'
import PageContainer from '../components/layout/PageContainer'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'
import { useWikiStore } from '../store/wikiStore'
import { WikiCategory } from '../types/common'

const categories: { value: WikiCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'anatomy', label: 'Anatomy' },
  { value: 'ergonomics', label: 'Ergonomics' },
  { value: 'conditions', label: 'Conditions' },
  { value: 'habits', label: 'Habits' },
  { value: 'equipment', label: 'Equipment' },
]

export default function Wiki() {
  const { articles, searchQuery, setSearchQuery, activeCategory, setActiveCategory, bookmarkedSlugs, toggleBookmark } =
    useWikiStore()

  const filteredArticles = articles.filter((article) => {
    if (activeCategory !== 'all' && article.category !== activeCategory) return false
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      return (
        article.title.toLowerCase().includes(q) ||
        article.subtitle.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q))
      )
    }
    return true
  })

  return (
    <PageContainer>
      <h1 className="text-4xl font-bold text-text-primary mb-2">Knowledge Base</h1>
      <p className="text-lg text-text-secondary mb-8">
        Learn about ergonomics, anatomy, and posture correction.
      </p>

      {/* Search */}
      <Card className="mb-8">
        <div className="space-y-4">
          <Input
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div>
            <label className="block text-sm font-medium text-text-primary mb-3">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-3 py-1 rounded-pill text-sm font-medium transition-all ${
                    activeCategory === cat.value
                      ? 'bg-accent-primary text-white'
                      : 'bg-gray-100 text-text-primary hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Results */}
      <div>
        <p className="text-text-secondary text-sm mb-6">
          {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
        </p>

        {filteredArticles.length === 0 ? (
          <Card className="text-center py-12">
            <p className="text-text-secondary">No articles found. Try adjusting your filters.</p>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => {
              const isBookmarked = bookmarkedSlugs.includes(article.slug)
              return (
                <Link key={article.slug} to={`/wiki/${article.slug}`}>
                  <Card className="h-full group">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="primary">{article.category}</Badge>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          toggleBookmark(article.slug)
                        }}
                        className={`p-2 rounded-pill transition-colors ${
                          isBookmarked
                            ? 'bg-accent-secondary text-white'
                            : 'bg-gray-100 text-text-secondary hover:bg-accent-secondary hover:text-white'
                        }`}
                      >
                        <BookmarkIcon className="w-4 h-4" fill="currentColor" />
                      </button>
                    </div>

                    <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-text-secondary mb-4 line-clamp-2">{article.subtitle}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-xs text-text-secondary">{article.readingTimeMinutes} min read</span>
                      <div className="flex gap-1 flex-wrap justify-end">
                        {article.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="inline-flex px-2 py-1 text-xs rounded-full bg-gray-100 text-text-secondary">
                            {tag}
                          </span>
                        ))}
                        {article.tags.length > 2 && (
                          <span className="inline-flex px-2 py-1 text-xs rounded-full bg-gray-100 text-text-secondary">
                            +{article.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </PageContainer>
  )
}
