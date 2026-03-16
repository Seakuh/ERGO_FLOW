import { Difficulty, MuscleGroup, ExerciseCategory } from './common';

export interface ExerciseSet {
  reps?: number;
  sets?: number;
  holdSeconds?: number;
  rounds?: number;
  restSeconds?: number;
}

export interface ExerciseCue {
  order: number;
  text: string;
}

export interface Exercise {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  category: ExerciseCategory;
  difficulty: Difficulty;
  durationMinutes: number;
  muscles: {
    primary: MuscleGroup[];
    secondary: MuscleGroup[];
  };
  equipment: string[];
  sets: ExerciseSet;
  cues: ExerciseCue[];
  benefits: string[];
  contraindications: string[];
  youtubeId: string;
  thumbnailUrl?: string;
  tags: string[];
  relatedExerciseIds: string[];
  createdAt: string;
}
