import { BodyPart } from '../../types/common'

interface BodyPartTagProps {
  part: BodyPart
}

const bodyPartLabels: Record<BodyPart, string> = {
  neck: 'Neck',
  shoulders: 'Shoulders',
  upperBack: 'Upper Back',
  midBack: 'Mid Back',
  lowerBack: 'Lower Back',
  chest: 'Chest',
  arms: 'Arms',
  forearms: 'Forearms',
  wrists: 'Wrists',
  core: 'Core',
  hips: 'Hips',
  legs: 'Legs',
  fullBody: 'Full Body',
}

export default function BodyPartTag({ part }: BodyPartTagProps) {
  return (
    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent-secondary bg-opacity-15 text-accent-secondary">
      {bodyPartLabels[part]}
    </span>
  )
}
