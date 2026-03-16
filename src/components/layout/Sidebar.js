import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from 'react-router-dom';
import { Home, Dumbbell, BookOpen } from 'lucide-react';
const navItems = [
    { label: 'Dashboard', icon: Home, path: '/dashboard' },
    { label: 'Exercises', icon: Dumbbell, path: '/exercises' },
    { label: 'Wiki', icon: BookOpen, path: '/wiki' },
];
export default function Sidebar() {
    const { pathname } = useLocation();
    return (_jsxs("div", { className: "flex flex-col h-full p-6 overflow-y-auto", children: [_jsxs("div", { className: "mb-8", children: [_jsx("h1", { className: "text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent", children: "ErgoFlow" }), _jsx("p", { className: "text-sm text-text-secondary mt-1", children: "Posture & Movement" })] }), _jsx("nav", { className: "flex-1 space-y-2", children: navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.path || (item.path === '/dashboard' && pathname === '/');
                    return (_jsxs(Link, { to: item.path, className: `flex items-center gap-3 px-4 py-2 rounded-card transition-all ${isActive
                            ? 'bg-accent-primary text-white shadow-card'
                            : 'text-text-primary hover:bg-bg-primary'}`, children: [_jsx(Icon, { className: "w-5 h-5" }), _jsx("span", { className: "font-medium", children: item.label })] }, item.path));
                }) }), _jsxs("div", { className: "text-xs text-text-secondary text-center py-4 border-t border-gray-200 mt-auto", children: [_jsx("p", { children: "Move better." }), _jsx("p", { children: "Feel better." })] })] }));
}
