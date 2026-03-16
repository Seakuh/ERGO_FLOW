import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Menu } from 'lucide-react';
import { useUIStore } from '../../store/uiStore';
export default function TopBar() {
    const { toggleSidebar } = useUIStore();
    return (_jsxs("div", { className: "flex items-center justify-between px-4 py-3", children: [_jsx("h1", { className: "text-xl font-bold text-accent-primary", children: "ErgoFlow" }), _jsx("button", { onClick: toggleSidebar, className: "p-2 hover:bg-bg-primary rounded-card transition-colors", children: _jsx(Menu, { className: "w-6 h-6" }) })] }));
}
