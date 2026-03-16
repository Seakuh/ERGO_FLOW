import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MapPin } from 'lucide-react';
const locationLabels = {
    homeOffice: { label: 'Home Office', color: 'bg-blue-100 text-blue-700' },
    coffee: { label: 'Coffee Shop', color: 'bg-amber-100 text-amber-700' },
    gym: { label: 'Gym', color: 'bg-purple-100 text-purple-700' },
    anywhere: { label: 'Anywhere', color: 'bg-green-100 text-green-700' },
};
export default function LocationBadge({ location }) {
    const config = locationLabels[location];
    return (_jsxs("div", { className: `inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.color}`, children: [_jsx(MapPin, { className: "w-3 h-3" }), config.label] }));
}
