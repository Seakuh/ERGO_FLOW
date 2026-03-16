import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { useUIStore } from '../../store/uiStore';
export default function AppShell() {
    useScrollToTop();
    const { sidebarOpen } = useUIStore();
    return (_jsxs("div", { className: "flex h-screen bg-bg-primary", children: [_jsx("div", { className: `hidden md:flex fixed inset-y-0 left-0 w-64 bg-bg-secondary border-r border-gray-200 ${sidebarOpen ? '' : '-translate-x-full'}`, children: _jsx(Sidebar, {}) }), _jsxs("div", { className: "flex-1 md:ml-64 flex flex-col overflow-hidden", children: [_jsx("div", { className: "md:hidden sticky top-0 z-50 bg-bg-secondary border-b border-gray-200", children: _jsx(TopBar, {}) }), _jsx("main", { className: "flex-1 overflow-y-auto", children: _jsx(Outlet, {}) })] })] }));
}
