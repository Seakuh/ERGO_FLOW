export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type MuscleGroup =
  | 'upper_trapezius'
  | 'lower_trapezius'
  | 'rhomboids'
  | 'serratus_anterior'
  | 'rear_deltoids'
  | 'rotator_cuff'
  | 'deep_neck_flexors'
  | 'thoracic_extensors'
  | 'pectorals'
  | 'levator_scapulae'
  | 'lats'
  | 'hip_flexors'
  | 'glutes'
  | 'core';

export type ExerciseCategory =
  | 'mobility'
  | 'strengthening'
  | 'stretching'
  | 'breathing'
  | 'posture_reset';

export const exerciseCategories: ExerciseCategory[] = [
  'mobility',
  'strengthening',
  'stretching',
  'breathing',
  'posture_reset',
];

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
