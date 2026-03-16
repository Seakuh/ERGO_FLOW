export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type MuscleGroup =
  | 'upper_trapezius'
  | 'lower_trapezius'
  | 'rhomboids'
  | 'serratus_anterior'
  | 'rear_deltoids'
  | 'anterior_deltoids'
  | 'rotator_cuff'
  | 'deep_neck_flexors'
  | 'neck_flexors'
  | 'thoracic_extensors'
  | 'pectorals'
  | 'levator_scapulae'
  | 'erector_spinae'
  | 'wrist_extensors'
  | 'wrist_flexors'
  | 'lats'
  | 'deltoids'
  | 'obliques'
  | 'hip_flexors'
  | 'glutes'
  | 'quadriceps'
  | 'hamstrings'
  | 'calves'
  | 'adductors'
  | 'abductors'
  | 'biceps'
  | 'triceps'
  | 'forearms'
  | 'wrist'
  | 'core';

export type ExerciseCategory =
  | 'mobility'
  | 'balance'
  | 'unilateral'
  | 'strengthening'
  | 'stretching'
  | 'stability'
  | 'breathing'
  | 'posture_reset';

export const exerciseCategories: ExerciseCategory[] = [
  'mobility',
  'strengthening',
  'stretching',
  'breathing',
  'posture_reset',
];

export type Location = 'homeOffice' | 'coffee' | 'gym' | 'anywhere';

export type BodyPart =
  | 'neck'
  | 'shoulders'
  | 'upperBack'
  | 'midBack'
  | 'lowerBack'
  | 'chest'
  | 'arms'
  | 'forearms'
  | 'wrists'
  | 'core'
  | 'hips'
  | 'legs'
  | 'fullBody';

export type WikiCategory =
  | 'anatomy'
  | 'ergonomics'
  | 'conditions'
  | 'habits'
  | 'equipment';

export interface Tag {
  label: string;
  color?: string;
}
