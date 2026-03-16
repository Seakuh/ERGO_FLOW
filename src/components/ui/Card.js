import { jsx as _jsx } from "react/jsx-runtime";
export default function Card({ children, className = '', onClick }) {
    return (_jsx("div", { onClick: onClick, className: `card p-6 ${onClick ? 'cursor-pointer hover:shadow-card-hover' : ''} ${className}`, children: children }));
}
