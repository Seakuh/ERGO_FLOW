import { create } from 'zustand';
import { Exercise } from '../types/exercise';
import { Difficulty, ExerciseCategory, Location, BodyPart } from '../types/common';
import { exercises as allExercises } from '../data/exercises';

interface ExerciseFilters {
  category: ExerciseCategory | 'all';
  difficulty: Difficulty | 'all';
  equipment: string | 'all';
  location: Location | 'all';
  bodyPart: BodyPart | 'all';
  search: string;
}

interface ExerciseStore {
  exercises: Exercise[];
  filters: ExerciseFilters;
  setFilter: <K extends keyof ExerciseFilters>(key: K, value: ExerciseFilters[K]) => void;
  resetFilters: () => void;
  activeExerciseId: string | null;
  setActiveExerciseId: (id: string | null) => void;
  completedExerciseIds: string[];
  markComplete: (id: string) => void;
}

const defaultFilters: ExerciseFilters = {
  category: 'all',
  difficulty: 'all',
  equipment: 'all',
  location: 'all',
  bodyPart: 'all',
  search: ''
};

export const useExerciseStore = create<ExerciseStore>((set) => ({
  exercises: allExercises,
  filters: defaultFilters,
  setFilter: (key, value) =>
    set((state) => ({ filters: { ...state.filters, [key]: value } })),
  resetFilters: () => set({ filters: defaultFilters }),
  activeExerciseId: null,
  setActiveExerciseId: (id) => set({ activeExerciseId: id }),
  completedExerciseIds: [],
  markComplete: (id) =>
    set((state) => ({
      completedExerciseIds: state.completedExerciseIds.includes(id)
        ? state.completedExerciseIds
        : [...state.completedExerciseIds, id]
    }))
}));
