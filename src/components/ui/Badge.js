import { jsx as _jsx } from "react/jsx-runtime";
export default function Badge({ children, variant = 'primary', className = '' }) {
    const variantClasses = {
        primary: 'bg-accent-primary text-white',
        secondary: 'bg-accent-secondary text-white',
        success: 'bg-green-100 text-green-700',
        warning: 'bg-yellow-100 text-yellow-700',
        danger: 'bg-red-100 text-red-700',
    };
    return (_jsx("span", { className: `inline-flex items-center px-3 py-1 rounded-pill text-sm font-medium ${variantClasses[variant]} ${className}`, children: children }));
}
