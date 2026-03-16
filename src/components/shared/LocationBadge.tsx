import { Location } from '../../types/common'
import { MapPin } from 'lucide-react'

interface LocationBadgeProps {
  location: Location
}

const locationLabels: Record<Location, { label: string; color: string }> = {
  homeOffice: { label: 'Home Office', color: 'bg-blue-100 text-blue-700' },
  coffee: { label: 'Coffee Shop', color: 'bg-amber-100 text-amber-700' },
  gym: { label: 'Gym', color: 'bg-purple-100 text-purple-700' },
  anywhere: { label: 'Anywhere', color: 'bg-green-100 text-green-700' },
}

export default function LocationBadge({ location }: LocationBadgeProps) {
  const config = locationLabels[location]
  return (
    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
      <MapPin className="w-3 h-3" />
      {config.label}
    </div>
  )
}
