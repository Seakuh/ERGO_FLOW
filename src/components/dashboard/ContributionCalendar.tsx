import { useDailyStore } from '../../store/dailyStore'

const getColorClass = (score: number): string => {
  switch (score) {
    case 0:
      return 'bg-gray-100'
    case 1:
      return 'bg-blue-100'
    case 2:
      return 'bg-blue-200'
    case 3:
      return 'bg-blue-400'
    case 4:
      return 'bg-accent-primary'
    default:
      return 'bg-gray-100'
  }
}

const getMonthLabel = (date: Date): string | null => {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const day = date.getDate()
  // Only show month labels on first day
  return day === 1 ? monthNames[date.getMonth()] : null
}

export default function ContributionCalendar() {
  const { history, getScoreForDate } = useDailyStore()

  // Generate last 365 days
  const today = new Date()
  const days: { date: Date; dateString: string }[] = []

  for (let i = 364; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    const dateString = date.toISOString().split('T')[0]
    days.push({ date, dateString })
  }

  // Group by weeks (Sun-Sat)
  const weeks: Array<typeof days> = []
  let currentWeek: typeof days = []

  days.forEach((day, index) => {
    currentWeek.push(day)
    if (currentWeek.length === 7 || index === days.length - 1) {
      weeks.push([...currentWeek])
      currentWeek = []
    }
  })

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className="w-full">
      <div className="flex gap-3 items-start mb-6 overflow-x-auto pb-2">
        {/* Days of week labels */}
        <div className="flex flex-col gap-1 mt-8">
          {dayNames.map((day) => (
            <div key={day} className="w-8 h-3 text-xs text-gray-500 font-medium text-center">
              {day.charAt(0)}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="flex gap-1">
          {weeks.map((week, weekIdx) => (
            <div key={weekIdx} className="flex flex-col gap-1">
              {/* Month label */}
              {week[0] && (
                <div className="h-4 text-xs text-gray-500 font-medium leading-none mb-1">
                  {getMonthLabel(week[0].date)}
                </div>
              )}
              {/* Day cells */}
              {week.map((day, dayIdx) => {
                const score = getScoreForDate(day.dateString)
                const isToday = day.dateString === new Date().toISOString().split('T')[0]

                return (
                  <div
                    key={`${weekIdx}-${dayIdx}`}
                    title={`${day.date.toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric'
                    })} — ${score}/4 goals`}
                    className={`w-3 h-3 rounded-sm transition-all cursor-pointer hover:ring-2 hover:ring-offset-1 hover:ring-accent-primary ${getColorClass(
                      score
                    )} ${isToday ? 'ring-2 ring-offset-1 ring-gray-400' : ''}`}
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-2 items-center text-xs text-gray-500 mt-4">
        <span>Less</span>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`w-2 h-2 rounded-sm ${getColorClass(level)}`}
            />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  )
}
