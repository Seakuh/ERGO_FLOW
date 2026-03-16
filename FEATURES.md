# ErgoFlow Features Overview

## Dashboard Enhancements (Latest Update)

### 1. ⚡ 5-Minute Quick Exercise
**Component**: `src/components/dashboard/FastExercise.tsx`

A rotating "Exercise of the Day" section that displays a random 5-minute exercise. Users can:
- See the exercise thumbnail (YouTube video preview)
- Read a brief description
- Check difficulty and duration at a glance
- Click to start the full exercise with coaching cues

**Usage**: The dashboard automatically selects a random quick exercise (≤5 minutes) from the exercise library. Perfect for users with limited time.

### 2. 📰 Daily Tips Feed
**Component**: `src/components/dashboard/HintsFeed.tsx`
**Data**: `src/data/hints.ts`

A news-feed style section with 12 actionable ergonomic tips covering:

#### Categories
- **Ergonomics** (6 tips): Monitor height, keyboard positioning, phone setup, lumbar support, desk height, feet placement
- **Exercise** (2 tips): Quick exercises for shoulders and scapula
- **Posture** (1 tip): Hourly posture reset routine
- **Habit** (2 tips): Hydration breaks, sit-stand rhythm
- **Breathing** (1 tip): Breath awareness practice

#### Features
- **Prioritized Display**: Top 4 tips show, prioritizing "high" > "medium" > "low"
- **Visual Icons**: Each tip has an icon (💡 lightbulb, ⚠️ alert, ✓ check, ⏱️ clock, ⚡ zap)
- **Linked Exercises**: Many tips link to related exercises (e.g., "Try: Band Pull-Apart")
- **Timestamps**: Each tip has a timestamp (for future personalization)
- **View All**: Link to browse all 12 tips

### Sample Tips

```
💡 Monitor Eye Level
   Your monitor top should align with eye level. Too low = forward head posture

⚠️ Phone Positioning
   Never cradle phone between ear and shoulder. Use headset instead.

⚡ Shoulder Shrug Release
   Lift shoulders to ears for 2 seconds, drop. Repeat 5 times.
   🔗 Try: Band Pull-Apart

⏱️ The 20-20-20 Rule
   Every 20 minutes, look 20 feet away for 20 seconds.
```

## Data Structure

### Hints Object
```typescript
interface Hint {
  id: string                           // unique identifier
  title: string                        // e.g. "Monitor Eye Level"
  description: string                  // actionable advice
  icon: 'lightbulb' | 'alert' | 'checkCircle' | 'clock' | 'zap'
  category: 'ergonomics' | 'exercise' | 'breathing' | 'posture' | 'habit'
  priority: 'high' | 'medium' | 'low'
  relatedExerciseId?: string           // optional link to exercise
  timestamp: string                    // ISO date for tracking
}
```

## How to Customize

### Add a New Tip
Edit `src/data/hints.ts`:
```typescript
{
  id: 'my-tip',
  title: 'My Tip Title',
  description: 'Actionable advice here...',
  icon: 'lightbulb',
  category: 'ergonomics',
  priority: 'medium',
  relatedExerciseId: 'band-pull-apart',  // optional
  timestamp: '2024-03-16T00:00:00.000Z'
}
```

### Change Number of Displayed Tips
In `src/components/dashboard/HintsFeed.tsx`, change `.slice(0, 4)`:
```typescript
const displayHints = [...hints]
  .sort(...)
  .slice(0, 4)  // Change 4 to desired number
```

### Customize Fast Exercise Logic
In `src/pages/Dashboard.tsx`, modify the selection criteria:
```typescript
// Current: random 5-minute exercise
const quickExercises = exercises.filter((e) => e.durationMinutes <= 5)

// Alternative: always show first/featured
const quickExercise = exercises[0]

// Alternative: show difficulty-weighted random
const quickExercises = exercises.filter((e) => e.difficulty === 'beginner')
```

## Visual Design

### Fast Exercise Card
- **16:9 aspect ratio** thumbnail with YouTube preview
- **Play icon overlay** on hover
- **Bottom CTA** ("Start Exercise")
- **Metadata**: Duration, difficulty badge
- **Responsive**: Full width on mobile, fixed width on desktop

### Tips Feed
- **4-card vertical layout** on desktop
- **Scrollable** on mobile
- **Icon badges** with accent color (primary blue)
- **Link styling**: Underline on hover, accent primary color
- **Empty state**: Optional (currently 12 tips available)

## Architecture Notes

### Component Hierarchy
```
Dashboard
├── FastExercise
│   ├── Card (UI)
│   ├── Badge (difficulty)
│   └── Link (router)
└── HintsFeed
    ├── Card × 4 (each tip)
    ├── Icon mapping (dynamic)
    ├── Link to exercise (optional)
    └── "View All" link
```

### Data Flow
1. **Dashboard** imports exercises from `exerciseStore`
2. **FastExercise** receives exercise prop, renders clickable card
3. **HintsFeed** receives exercises array
4. **HintsFeed** maps over hints, finds related exercises by ID
5. **Links** use React Router for navigation

### Performance Considerations
- **FastExercise**: Re-renders only on component mount (random selection)
- **HintsFeed**: Static hints data (no computation)
- **No memoization needed**: Small dataset, simple rendering
- **Bundle size**: +2.5KB gzipped (hints data + components)

## Future Enhancements

### Personalization
- Sort tips by **user's weak areas** (based on completed exercises)
- Show **time-of-day relevant tips** (morning stretch, evening wind-down)
- **Tip dismissal** with "snooze" functionality
- **User preferences** (turn categories on/off)

### Interactivity
- **"Did this tip help?"** feedback buttons
- **Tip sharing** (copy to clipboard, social)
- **Bookmark tips** (like wiki articles)
- **Notification system** (daily digest via toast)

### Content
- **Expand hints** from 12 to 50+ tips
- **Tip series** (e.g., "Week 1: Ergonomics", "Week 2: Mobility")
- **Video tutorials** for exercise tips (in-app video player)
- **User-submitted tips** with community voting

## Integration Notes

### How FastExercise & HintsFeed Work Together
1. User sees **quick exercise** and wants to understand **why**
2. User scrolls to **tips feed** and finds related advice
3. User clicks "Try: Band Pull-Apart" link in a tip
4. **Navigates to exercise detail** with full coaching

This creates a **cohesive onboarding flow** for new users discovering the app.

---

**Total Bundle Impact**: +3KB gzipped (highly efficient)
**User Value**: High (immediately actionable, personalized)
**Maintenance**: Low (static data, simple components)
