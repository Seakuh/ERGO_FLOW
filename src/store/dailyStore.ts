import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { DayRecord } from '../types/daily'

interface DailyStore {
  history: Record<string, DayRecord>
  toggleGoal: (id: string) => void
  getTodayCompleted: () => string[]
  getScoreForDate: (date: string) => number
}

const getTodayDateString = () => {
  const today = new Date()
  return today.toISOString().split('T')[0]
}

const calculateScore = (completedCount: number): number => {
  if (completedCount === 0) return 0
  if (completedCount <= 3) return 1
  if (completedCount <= 7) return 2
  if (completedCount <= 11) return 3
  return 4
}

export const useDailyStore = create<DailyStore>()(
  persist(
    (set, get) => ({
      history: {},
      toggleGoal: (id: string) => {
        const today = getTodayDateString()
        set((state) => {
          const todayRecord = state.history[today] || {
            date: today,
            completedIds: [],
            score: 0
          }

          const isCompleted = todayRecord.completedIds.includes(id)
          const updatedCompleted = isCompleted
            ? todayRecord.completedIds.filter((cid) => cid !== id)
            : [...todayRecord.completedIds, id]

          const newScore = calculateScore(updatedCompleted.length)

          return {
            history: {
              ...state.history,
              [today]: {
                date: today,
                completedIds: updatedCompleted,
                score: newScore
              }
            }
          }
        })
      },
      getTodayCompleted: () => {
        const today = getTodayDateString()
        return get().history[today]?.completedIds || []
      },
      getScoreForDate: (date: string) => {
        return get().history[date]?.score || 0
      }
    }),
    {
      name: 'ergoflow-daily'
    }
  )
)
