import { jsx as _jsx } from "react/jsx-runtime";
export default function Button({ children, variant = 'primary', size = 'md', onClick, className = '', disabled = false, }) {
    const baseClasses = 'font-medium rounded-pill transition-all disabled:opacity-50 disabled:cursor-not-allowed';
    const variantClasses = {
        primary: 'bg-accent-primary text-white hover:shadow-card-hover',
        secondary: 'bg-bg-secondary text-text-primary border border-gray-200 hover:bg-gray-50',
        tertiary: 'bg-transparent text-accent-primary hover:bg-accent-primary hover:bg-opacity-10',
    };
    const sizeClasses = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-6 py-2 text-base',
        lg: 'px-8 py-3 text-lg',
    };
    return (_jsx("button", { onClick: onClick, disabled: disabled, className: `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`, children: children }));
}
