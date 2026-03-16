import { jsx as _jsx } from "react/jsx-runtime";
export default function PageContainer({ children, className = '' }) {
    return (_jsx("div", { className: `max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12 ${className}`, children: children }));
}
