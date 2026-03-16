# ErgoFlow – Posture Training & Ergonomic Knowledge

**Break the desk work posture cycle.** ErgoFlow is a React-based platform combining guided exercises and ergonomic knowledge to help remote workers and developers maintain healthy posture.

## Features

### 🏃 Exercise Path
- **9 curated exercises** targeting common posture problems (rounded shoulders, forward head, stiff thoracic spine)
- **Real YouTube videos** embedded directly in the app
- **Step-by-step coaching cues** with muscle targeting (primary/secondary)
- **Benefits & contraindications** for informed practice
- **Smart filtering** by category, difficulty, and equipment
- **Mark complete** to track progress on your dashboard

### 📚 Knowledge Base
- **5 in-depth wiki articles** on posture, anatomy, and ergonomic setup
- **Search + category filtering** to find relevant content
- **Cross-linked exercises** — articles show related exercises, exercises link to relevant articles
- **Reading time estimates** for quick context
- **Bookmark articles** for quick reference

### 📊 Dashboard
- **Quick access** to featured exercises
- **Recent activity** showing your completed exercises
- **Stats at a glance** (total exercises, completed count, articles)
- **Daily tips** — helpful ergonomic hints and fast exercises
- **News feed style** tips section with actionable advice

## Tech Stack

- **React 18** – UI framework
- **TypeScript** – Type-safe code
- **Vite** – Lightning-fast dev/build
- **Zustand** – Lightweight state management
- **Tailwind CSS** – Utility-first styling
- **React Router** – Client-side navigation
- **lucide-react** – Beautiful icons

## Getting Started

### Installation
```bash
git clone <repo>
cd ERGO_FLOW
npm install
```

### Development
```bash
npm run dev
```
Opens http://localhost:5173 (or next available port)

### Build
```bash
npm run build
npm run preview  # Test production build locally
```

## Project Structure

```
src/
├── pages/              Main route pages (Dashboard, Exercises, Wiki, etc.)
├── components/
│   ├── layout/        AppShell, Sidebar, navigation
│   ├── ui/            Reusable buttons, cards, inputs
│   └── shared/        Domain components (DifficultyBadge, MuscleTag)
├── store/             Zustand stores (exercises, wiki, UI state)
├── hooks/             Custom React hooks (useFilteredExercises, etc.)
├── data/
│   ├── exercises.ts   All 9 exercises with metadata
│   └── wiki/          5 knowledge base articles
├── types/             TypeScript interfaces (Exercise, WikiArticle, etc.)
└── styles/            Tailwind CSS + global styles
```

## Architecture

See `CLAUDE.md` for detailed project anchor including:
- Stack details
- Architectural patterns
- Coding conventions
- Component hierarchy
- Data structures

## Data Structure

### Exercises
Each exercise in `src/data/exercises.ts` contains:
```typescript
{
  id: string                          // kebab-case slug
  name: string
  shortDescription: string
  description: string                 // full paragraph
  category: 'mobility' | 'strengthening' | 'stretching' | 'posture_reset'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  durationMinutes: number
  muscles: { primary: MuscleGroup[], secondary: MuscleGroup[] }
  equipment: string[]
  sets: { reps?, sets?, holdSeconds?, rounds?, restSeconds? }
  cues: { order: number, text: string }[]  // step-by-step instructions
  benefits: string[]
  contraindications: string[]
  youtubeId: string                   // raw YouTube video ID
  tags: string[]
  relatedExerciseIds: string[]
}
```

### Wiki Articles
Articles in `src/data/wiki/articles/*.ts`:
```typescript
{
  slug: string                        // URL slug
  title: string
  subtitle: string
  category: 'anatomy' | 'ergonomics' | 'conditions' | ...
  readingTimeMinutes: number
  sections: { id: string, heading: string, content: string }[]
  relatedSlugs: string[]              // links to other articles
  relatedExerciseIds: string[]        // cross-linked exercises
  tags: string[]
  publishedAt: string                 // ISO date
  updatedAt: string
}
```

## Key Features Explained

### YouTube Embeds
Exercises use responsive YouTube iframes with no recommendations:
```tsx
<iframe
  src={`https://www.youtube.com/embed/${exercise.youtubeId}?rel=0&modestbranding=1`}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

### Smart Filtering
`useFilteredExercises()` hook filters by:
- Category (mobility, strengthening, stretching, posture_reset)
- Difficulty (beginner, intermediate, advanced)
- Equipment (band, wall, foam roller, none)
- Full-text search (name, description, tags)

### State Management
Zustand stores handle:
- **exerciseStore**: exercises array, filters, completion tracking
- **wikiStore**: articles, search query, bookmarks
- **uiStore**: sidebar state, toast notifications

### Responsive Design
- **Mobile-first** Tailwind approach
- **Hidden desktop sidebar** on mobile, visible by default on desktop
- **Touch-friendly** buttons and spacing
- **Grid layouts** that adapt from 1→2→3 columns

## Customization

### Add a New Exercise
Edit `src/data/exercises.ts` and add to the array:
```typescript
{
  id: 'my-exercise',
  name: 'My Exercise',
  youtubeId: 'dQw4w9WgXcQ',  // Get from YouTube URL
  // ... other fields
}
```

### Add a New Wiki Article
1. Create `src/data/wiki/articles/my-article.ts`
2. Export a WikiArticle object
3. Add to manifest in `src/data/wiki/index.ts`

### Customize Colors
Edit `tailwind.config.ts` — all design tokens in one place:
```typescript
colors: {
  accent: {
    primary: '#4F8DF7',      // Blue
    secondary: '#8ED1B2',    // Teal
  }
}
```

## Future Roadmap

### Phase 2 – Pose Detection
- MediaPipe Pose webcam integration
- Real-time posture feedback
- Joint angle validation

### Phase 3 – Backend & Persistence
- User authentication
- Progress tracking
- Custom exercise plans

### Phase 4 – Mobile & PWA
- Progressive Web App
- React Native mobile app
- Wearable integration

## Design System

### Colors
- **Primary Accent**: #4F8DF7 (calm blue)
- **Secondary Accent**: #8ED1B2 (healing teal)
- **Backgrounds**: #F6F8FB (light), #FFFFFF (white)
- **Text**: #1E2430 (dark), #6B7280 (gray)

### Typography
- **Display Font**: Sora (headings)
- **Body Font**: Inter (text)
- **Responsive**: Mobile → tablet → desktop

### Components
- **Buttons**: Pill-shaped, primary/secondary variants
- **Cards**: 14px radius, soft shadows
- **Spacing**: 8px base unit

## Performance

- **Vite dev**: <100ms startup
- **Production bundle**: ~74KB gzipped
- **Filtering**: Memoized, only recalc on change
- **Navigation**: Smooth with React Router

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS 14+, Chrome Android)

## Contributing

1. Follow patterns in `CLAUDE.md`
2. Type all props and state
3. Use Tailwind only (no component .css)
4. Meaningful commit messages

## License

MIT

---

**ErgoFlow**: Move better. Feel better.
