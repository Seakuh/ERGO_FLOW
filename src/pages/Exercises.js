import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import DifficultyBadge from '../components/shared/DifficultyBadge';
import { useExerciseStore } from '../store/exerciseStore';
import { useFilteredExercises } from '../hooks/useFilteredExercises';
const categories = [
    { value: 'all', label: 'All' },
    { value: 'mobility', label: 'Mobility' },
    { value: 'strengthening', label: 'Strengthening' },
    { value: 'stretching', label: 'Stretching' },
    { value: 'posture_reset', label: 'Posture Reset' },
];
const difficulties = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
];
export default function Exercises() {
    const { filters, setFilter, resetFilters } = useExerciseStore();
    const filteredExercises = useFilteredExercises();
    const hasActiveFilters = filters.category !== 'all' || filters.difficulty !== 'all' || filters.search !== '';
    return (_jsxs(PageContainer, { children: [_jsx("h1", { className: "text-4xl font-bold text-text-primary mb-8", children: "Exercises Library" }), _jsx(Card, { className: "mb-8", children: _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-text-primary mb-2", children: "Search" }), _jsx(Input, { placeholder: "Search exercises...", value: filters.search, onChange: (e) => setFilter('search', e.target.value) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-text-primary mb-3", children: "Category" }), _jsx("div", { className: "flex flex-wrap gap-2", children: categories.map((cat) => (_jsx("button", { onClick: () => setFilter('category', cat.value), className: `px-3 py-1 rounded-pill text-sm font-medium transition-all ${filters.category === cat.value
                                            ? 'bg-accent-primary text-white'
                                            : 'bg-gray-100 text-text-primary hover:bg-gray-200'}`, children: cat.label }, cat.value))) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-text-primary mb-3", children: "Difficulty" }), _jsx("select", { value: filters.difficulty, onChange: (e) => setFilter('difficulty', e.target.value), className: "w-full md:w-64 px-4 py-2 rounded-card bg-bg-primary border border-gray-200 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary", children: difficulties.map((d) => (_jsx("option", { value: d.value, children: d.label }, d.value))) })] }), hasActiveFilters && (_jsxs(Button, { variant: "secondary", size: "sm", onClick: resetFilters, children: [_jsx(X, { className: "w-4 h-4 mr-2 inline" }), "Clear Filters"] }))] }) }), _jsxs("div", { children: [_jsxs("p", { className: "text-text-secondary text-sm mb-6", children: [filteredExercises.length, " exercise", filteredExercises.length !== 1 ? 's' : '', " found"] }), filteredExercises.length === 0 ? (_jsx(Card, { className: "text-center py-12", children: _jsx("p", { className: "text-text-secondary", children: "No exercises found. Try adjusting your filters." }) })) : (_jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredExercises.map((exercise) => (_jsx(Link, { to: `/exercises/${exercise.id}`, children: _jsxs(Card, { className: "h-full overflow-hidden", children: [_jsx("div", { className: "w-full aspect-video bg-gray-200 rounded-card mb-4 overflow-hidden flex items-center justify-center", children: _jsx("img", { src: `https://i.ytimg.com/vi/${exercise.youtubeId}/hqdefault.jpg`, alt: exercise.name, className: "w-full h-full object-cover", onError: (e) => {
                                                e.target.style.display = 'none';
                                            } }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-bold text-lg text-text-primary mb-2 line-clamp-1", children: exercise.name }), _jsx("p", { className: "text-sm text-text-secondary mb-4 line-clamp-2", children: exercise.shortDescription }), _jsx("div", { className: "flex items-center justify-between flex-wrap gap-2", children: _jsxs("div", { className: "flex gap-2", children: [_jsx(DifficultyBadge, { difficulty: exercise.difficulty }), _jsxs(Badge, { variant: "secondary", className: "text-xs", children: [exercise.durationMinutes, " min"] })] }) })] })] }) }, exercise.id))) }))] })] }));
}
