import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppShell from './components/layout/AppShell';
import Dashboard from './pages/Dashboard';
import Exercises from './pages/Exercises';
import ExerciseDetail from './pages/ExerciseDetail';
import Wiki from './pages/Wiki';
import WikiArticle from './pages/WikiArticle';
function App() {
    return (_jsx(BrowserRouter, { children: _jsx(Routes, { children: _jsxs(Route, { element: _jsx(AppShell, {}), children: [_jsx(Route, { path: "/", element: _jsx(Navigate, { to: "/dashboard", replace: true }) }), _jsx(Route, { path: "/dashboard", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "/exercises", element: _jsx(Exercises, {}) }), _jsx(Route, { path: "/exercises/:id", element: _jsx(ExerciseDetail, {}) }), _jsx(Route, { path: "/wiki", element: _jsx(Wiki, {}) }), _jsx(Route, { path: "/wiki/:slug", element: _jsx(WikiArticle, {}) })] }) }) }));
}
export default App;
