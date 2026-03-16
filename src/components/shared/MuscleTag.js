import { jsx as _jsx } from "react/jsx-runtime";
const muscleLabels = {
    upper_trapezius: 'Upper Trapezius',
    lower_trapezius: 'Lower Trapezius',
    rhomboids: 'Rhomboids',
    serratus_anterior: 'Serratus Anterior',
    rear_deltoids: 'Rear Deltoids',
    rotator_cuff: 'Rotator Cuff',
    deep_neck_flexors: 'Deep Neck Flexors',
    thoracic_extensors: 'Thoracic Extensors',
    pectorals: 'Pectorals',
    levator_scapulae: 'Levator Scapulae',
    lats: 'Lats',
    hip_flexors: 'Hip Flexors',
    glutes: 'Glutes',
    core: 'Core',
};
export default function MuscleTag({ muscle }) {
    return (_jsx("span", { className: "inline-flex items-center px-3 py-1 rounded-pill text-xs font-medium bg-accent-primary bg-opacity-10 text-accent-primary", children: muscleLabels[muscle] }));
}
