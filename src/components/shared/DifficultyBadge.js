import { jsx as _jsx } from "react/jsx-runtime";
import Badge from '../ui/Badge';
export default function DifficultyBadge({ difficulty }) {
    const variants = {
        beginner: 'success',
        intermediate: 'warning',
        advanced: 'danger',
    };
    const labels = {
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        advanced: 'Advanced',
    };
    return _jsx(Badge, { variant: variants[difficulty], children: labels[difficulty] });
}
