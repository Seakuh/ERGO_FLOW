import { create } from 'zustand';
import { exercises as allExercises } from '../data/exercises';
const defaultFilters = {
    category: 'all',
    difficulty: 'all',
    equipment: 'all',
    location: 'all',
    bodyPart: 'all',
    search: ''
};
export const useExerciseStore = create((set) => ({
    exercises: allExercises,
    filters: defaultFilters,
    setFilter: (key, value) => set((state) => ({ filters: { ...state.filters, [key]: value } })),
    resetFilters: () => set({ filters: defaultFilters }),
    activeExerciseId: null,
    setActiveExerciseId: (id) => set({ activeExerciseId: id }),
    completedExerciseIds: [],
    markComplete: (id) => set((state) => ({
        completedExerciseIds: state.completedExerciseIds.includes(id)
            ? state.completedExerciseIds
            : [...state.completedExerciseIds, id]
    }))
}));
