# ErgoFlow Project Anchor

## Projekt: ErgoFlow
Posture Training & Ergonomic Knowledge System für Remote Worker

## Stack
- React 18.3.1
- TypeScript 5.5.3
- Vite 5.4.1
- Zustand 4.5.4
- Tailwind CSS 3.4.10
- lucide-react 0.441.0
- react-router-dom 6.26.0

## Architektur
- **Feature-basierte Seitenstruktur** mit Pages (Dashboard, Exercises, ExerciseDetail, Wiki, WikiArticle)
- **Zustand Stores** für globale State (exerciseStore, wikiStore, uiStore)
- **Komponenten-Hierarchie**: layout (AppShell, Sidebar) → ui (Button, Badge, Card) → shared (DifficultyBadge, MuscleTag)
- **Data-driven**: Alle Exercises und Wiki Articles sind TypeScript Daten (keine API-Abhängigkeit)
- **Type-safe**: Vollständige TypeScript Interfaces für Exercise, WikiArticle, MuscleGroup, etc.

## Konventionen

### TypeScript
- **Kein `any`** — alle Types explizit definiert in `src/types/`
- **Interfaces > Types** für Objekte (Exercise, WikiArticle, etc.)
- **Union Types** für kategorische Werte (Difficulty, ExerciseCategory, WikiCategory)

### React & State
- **Zustand Hooks** als Single Source of Truth (useExerciseStore, useWikiStore, useUIStore)
- **Custom Hooks** für berechnete/gefilterte Daten (useFilteredExercises)
- **React Router** für Navigation, `useParams`/`useNavigate` für Routing-Logik
- **Keine Redux** — Zustand für einfache, flache State

### Styling
- **Tailwind CSS Only** — keine separate .css Dateien für Komponenten
- **Custom Tokens** in `tailwind.config.ts` (colors, borderRadius, shadows, fonts)
- **Global Styles** nur in `src/styles/globals.css` (Tailwind directives + typography)
- **Design System**: Pill-shaped buttons (rounded-pill), 14px cards (rounded-card), soft shadows

### Daten-Struktur
- **Exercises**: `src/data/exercises.ts` — Array von Exercise Objekten mit YouTube IDs
- **Wiki Articles**: `src/data/wiki/articles/*.ts` — Individual article files, manifest in `src/data/wiki/index.ts`
- **JSON-like TS**: Alle Daten sind TypeScript, nicht JSON (Type-safety on read)
- **Exercise Properties**: name, description, category, difficulty, muscles (primary/secondary), cues (step-by-step), benefits, contraindications, youtubeId, tags

### Komponenten
- **Props-basiert**: Funktionale Components mit TypeScript Props Interfaces
- **Keine Container/Presentational** Trennung — Components sind einfach
- **Reusable**: Card, Button, Badge, Input für UI Patterns
- **Shared Components**: DifficultyBadge, MuscleTag für Enums/unions

### Error Handling
- **Try/Catch** für async (falls später Backend-Calls kommen)
- **Toast-Feedback** über `useUIStore.addToast()` für User-Feedback
- **Graceful Degradation**: Not-found Seiten für fehlende Exercises/Articles

### Naming
- **File Names**: kebab-case (exercise-detail.tsx, user-profile.tsx)
- **Component Names**: PascalCase (ExerciseCard, DashboardPage)
- **Hook Names**: camelCase starting with `use` (useFilteredExercises, useScrollToTop)
- **Store Functions**: camelCase (setFilter, markComplete, toggleBookmark)

### Ordnerstruktur
```
src/
  types/              → Common.ts, Exercise.ts, Wiki.ts
  data/               → exercises.ts, wiki/ (manifest + articles)
  store/              → exerciseStore.ts, wikiStore.ts, uiStore.ts
  components/
    layout/           → AppShell, Sidebar, TopBar, PageContainer
    ui/               → Button, Badge, Card, Input
    shared/           → DifficultyBadge, MuscleTag
  pages/              → Dashboard, Exercises, ExerciseDetail, Wiki, WikiArticle
  hooks/              → useFilteredExercises, useScrollToTop
  styles/             → globals.css, typography.css
  main.tsx            → React entry point
  App.tsx             → Router root
```

## Performance & Best Practices
- **useMemo** für teuer berechnete Filter-Results (useFilteredExercises)
- **Link** statt `<a>` für interne Navigation (React Router)
- **Zustand selectors** für Store subscriptions (minimale re-renders)
- **No console.logs** in production — nur for debugging

## YouTube Integration
- **YouTube iframe**: `https://www.youtube.com/embed/{videoId}?rel=0&modestbranding=1`
- **Responsive**: 16:9 aspect ratio via CSS padding-bottom trick
- **Thumbnail**: `https://i.ytimg.com/vi/{videoId}/hqdefault.jpg`

## Local Development
```bash
npm run dev      # Start Vite dev server (port 5173/5174)
npm run build    # Compile to dist/
npm run preview  # Preview production build locally
```

## Future Enhancements (nicht MVP)
- Pose detection via MediaPipe/TensorFlow (webcam)
- Backend API für user progress persistence
- Dark mode toggle
- PWA offline support
- Admin panel für Exercise management
- Mobile app (React Native)
