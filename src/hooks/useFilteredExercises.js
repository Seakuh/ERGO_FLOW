import { useMemo } from 'react';
import { useExerciseStore } from '../store/exerciseStore';
export function useFilteredExercises() {
    const { exercises, filters } = useExerciseStore();
    return useMemo(() => {
        return exercises.filter((ex) => {
            if (filters.category !== 'all' && ex.category !== filters.category)
                return false;
            if (filters.difficulty !== 'all' && ex.difficulty !== filters.difficulty)
                return false;
            if (filters.equipment !== 'all' && !ex.equipment.includes(filters.equipment))
                return false;
            if (filters.location !== 'all' && !ex.location.includes(filters.location))
                return false;
            if (filters.bodyPart !== 'all' && !ex.bodyPart.includes(filters.bodyPart))
                return false;
            if (filters.search) {
                const q = filters.search.toLowerCase();
                return (ex.name.toLowerCase().includes(q) ||
                    ex.tags.some((t) => t.toLowerCase().includes(q)) ||
                    ex.shortDescription.toLowerCase().includes(q));
            }
            return true;
        });
    }, [exercises, filters]);
}
