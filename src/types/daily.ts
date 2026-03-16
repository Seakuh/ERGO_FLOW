export type DomainId = 'physical' | 'mental' | 'creative' | 'lifestyle' | 'reflection'

export interface DailyGoalNode {
  id: string
  label: string
  description: string
  domain: DomainId
  icon: string
  x: number
  y: number
  connections: string[]
}

export interface DayRecord {
  date: string
  completedIds: string[]
  score: number
}
