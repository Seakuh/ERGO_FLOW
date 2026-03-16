import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import DifficultyBadge from '../components/shared/DifficultyBadge';
import LocationBadge from '../components/shared/LocationBadge';
import BodyPartTag from '../components/shared/BodyPartTag';
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
const locations = [
    { value: 'all', label: 'Any Location' },
    { value: 'homeOffice', label: 'Home Office' },
    { value: 'coffee', label: 'Coffee Shop' },
    { value: 'gym', label: 'Gym' },
    { value: 'anywhere', label: 'Anywhere' },
];
const bodyParts = [
    { value: 'all', label: 'All Body Parts' },
    { value: 'neck', label: 'Neck' },
    { value: 'shoulders', label: 'Shoulders' },
    { value: 'upperBack', label: 'Upper Back' },
    { value: 'midBack', label: 'Mid Back' },
    { value: 'lowerBack', label: 'Lower Back' },
    { value: 'chest', label: 'Chest' },
    { value: 'arms', label: 'Arms' },
    { value: 'forearms', label: 'Forearms' },
    { value: 'wrists', label: 'Wrists' },
    { value: 'core', label: 'Core' },
    { value: 'hips', label: 'Hips' },
    { value: 'legs', label: 'Legs' },
    { value: 'fullBody', label: 'Full Body' },
];
export default function Exercises() {
    const { filters, setFilter, resetFilters } = useExerciseStore();
    const filteredExercises = useFilteredExercises();
    const hasActiveFilters = filters.category !== 'all' ||
        filters.difficulty !== 'all' ||
        filters.location !== 'all' ||
        filters.bodyPart !== 'all' ||
        filters.search !== '';
    return (_jsxs(PageContainer, { children: [_jsx("h1", { className: "text-4xl font-bold text-text-primary mb-8", children: "Exercises Library" }), _jsx(Card, { className: "mb-8", children: _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-text-primary mb-2", children: "Search" }), _jsx(Input, { placeholder: "Search exercises by name or tags...", value: filters.search, onChange: (e) => setFilter('search', e.target.value) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-text-primary mb-3", children: "\uD83D\uDCCD Location" }), _jsx("div", { className: "flex flex-wrap gap-2", children: locations.map((loc) => (_jsx("button", { onClick: () => setFilter('location', loc.value), className: `px-3 py-1 rounded-pill text-sm font-medium transition-all ${filters.location === loc.value
                                            ? 'bg-accent-primary text-white'
                                            : 'bg-gray-100 text-text-primary hover:bg-gray-200'}`, children: loc.label }, loc.value))) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-text-primary mb-3", children: "\uD83D\uDCAA Body Part Target" }), _jsx("select", { value: filters.bodyPart, onChange: (e) => setFilter('bodyPart', e.target.value), className: "w-full md:w-full px-4 py-2 rounded-card bg-bg-primary border border-gray-200 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary", children: bodyParts.map((bp) => (_jsx("option", { value: bp.value, children: bp.label }, bp.value))) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-text-primary mb-3", children: "Category" }), _jsx("div", { className: "flex flex-wrap gap-2", children: categories.map((cat) => (_jsx("button", { onClick: () => setFilter('category', cat.value), className: `px-3 py-1 rounded-pill text-sm font-medium transition-all ${filters.category === cat.value
                                            ? 'bg-accent-primary text-white'
                                            : 'bg-gray-100 text-text-primary hover:bg-gray-200'}`, children: cat.label }, cat.value))) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-text-primary mb-3", children: "Difficulty" }), _jsx("select", { value: filters.difficulty, onChange: (e) => setFilter('difficulty', e.target.value), className: "w-full md:w-64 px-4 py-2 rounded-card bg-bg-primary border border-gray-200 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary", children: difficulties.map((d) => (_jsx("option", { value: d.value, children: d.label }, d.value))) })] }), hasActiveFilters && (_jsxs(Button, { variant: "secondary", size: "sm", onClick: resetFilters, children: [_jsx(X, { className: "w-4 h-4 mr-2 inline" }), "Clear All Filters"] }))] }) }), _jsxs("div", { children: [_jsxs("p", { className: "text-text-secondary text-sm mb-6", children: [filteredExercises.length, " exercise", filteredExercises.length !== 1 ? 's' : '', " found"] }), filteredExercises.length === 0 ? (_jsx(Card, { className: "text-center py-12", children: _jsx("p", { className: "text-text-secondary", children: "No exercises found. Try adjusting your filters." }) })) : (_jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredExercises.map((exercise) => (_jsx(Link, { to: `/exercises/${exercise.id}`, children: _jsxs(Card, { className: "h-full overflow-hidden hover:shadow-card-hover transition-shadow flex flex-col", children: [_jsx("div", { className: "w-full aspect-video bg-gray-200 rounded-card mb-4 overflow-hidden flex items-center justify-center", children: _jsx("img", { src: `https://i.ytimg.com/vi/${exercise.youtubeId}/hqdefault.jpg`, alt: exercise.name, className: "w-full h-full object-cover", onError: (e) => {
                                                e.target.style.display = 'none';
                                            } }) }), _jsxs("div", { className: "flex-1 flex flex-col", children: [_jsx("h3", { className: "font-bold text-lg text-text-primary mb-2 line-clamp-1", children: exercise.name }), _jsx("p", { className: "text-sm text-text-secondary mb-3 line-clamp-2 flex-1", children: exercise.shortDescription }), _jsxs("div", { className: "mb-3 space-y-2", children: [_jsx("div", { className: "flex flex-wrap gap-1", children: exercise.location.map((loc) => (_jsx(LocationBadge, { location: loc }, loc))) }), _jsxs("div", { className: "flex flex-wrap gap-1", children: [exercise.bodyPart.slice(0, 2).map((part) => (_jsx(BodyPartTag, { part: part }, part))), exercise.bodyPart.length > 2 && (_jsxs("span", { className: "text-xs text-text-secondary", children: ["+", exercise.bodyPart.length - 2] }))] })] }), _jsx("div", { className: "flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-gray-100", children: _jsxs("div", { className: "flex gap-2", children: [_jsx(DifficultyBadge, { difficulty: exercise.difficulty }), _jsxs(Badge, { variant: "secondary", className: "text-xs", children: [exercise.durationMinutes, " min"] })] }) })] })] }) }, exercise.id))) }))] })] }));
}
