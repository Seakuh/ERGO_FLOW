import { jsx as _jsx } from "react/jsx-runtime";
export default function Input({ placeholder, value, onChange, type = 'text', className = '', }) {
    return (_jsx("input", { type: type, placeholder: placeholder, value: value, onChange: onChange, className: `w-full px-4 py-2 rounded-card bg-bg-secondary border border-gray-200 text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all ${className}` }));
}
