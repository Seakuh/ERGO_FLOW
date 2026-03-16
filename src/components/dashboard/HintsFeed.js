import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Lightbulb, AlertCircle, CheckCircle, Clock, Zap } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { hints } from '../../data/hints';
const iconMap = {
    lightbulb: Lightbulb,
    alert: AlertCircle,
    checkCircle: CheckCircle,
    clock: Clock,
    zap: Zap,
};
const categoryColors = {
    ergonomics: 'primary',
    exercise: 'secondary',
    breathing: 'success',
    posture: 'warning',
    habit: 'info',
};
export default function HintsFeed({ exercises }) {
    // Show top 4 hints, prioritize high-priority items
    const displayHints = [...hints]
        .sort((a, b) => {
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    })
        .slice(0, 4);
    return (_jsxs("div", { children: [_jsx("h2", { className: "text-2xl font-bold text-text-primary mb-6", children: "Daily Tips" }), _jsx("div", { className: "space-y-4", children: displayHints.map((hint) => {
                    const Icon = iconMap[hint.icon];
                    const relatedExercise = hint.relatedExerciseId
                        ? exercises.find((e) => e.id === hint.relatedExerciseId)
                        : null;
                    return (_jsx(Card, { className: "hover:shadow-card-hover transition-shadow", children: _jsxs("div", { className: "flex gap-4", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("div", { className: "flex items-center justify-center w-10 h-10 rounded-full bg-accent-primary bg-opacity-10", children: _jsx(Icon, { className: "w-5 h-5 text-accent-primary" }) }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsxs("div", { className: "flex items-start justify-between gap-2 mb-1", children: [_jsx("h3", { className: "font-semibold text-text-primary", children: hint.title }), hint.priority === 'high' && (_jsx(Badge, { variant: "danger", className: "flex-shrink-0 text-xs", children: "Important" }))] }), _jsx("p", { className: "text-sm text-text-secondary mb-3", children: hint.description }), relatedExercise && (_jsxs(Link, { to: `/exercises/${relatedExercise.id}`, className: "inline-flex items-center gap-2 text-xs text-accent-primary hover:underline font-medium", children: [_jsx(Zap, { className: "w-3 h-3" }), "Try: ", relatedExercise.name] }))] })] }) }, hint.id));
                }) }), _jsxs(Link, { to: "/exercises", className: "inline-flex items-center gap-2 mt-6 text-accent-primary hover:underline font-medium text-sm", children: [_jsx(Lightbulb, { className: "w-4 h-4" }), "Browse all ", hints.length, " tips"] })] }));
}
