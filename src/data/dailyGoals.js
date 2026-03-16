export const dailyGoalNodes = [
    {
        id: 'sleep',
        label: '8h Sleep',
        description: 'Get 7.5+ hours of quality sleep',
        domain: 'physical',
        icon: 'Moon',
        x: 0,
        y: 0,
        connections: ['morning-stretch', 'hydration']
    },
    {
        id: 'morning-stretch',
        label: 'Morning Stretch',
        description: 'Light stretching routine',
        domain: 'physical',
        icon: 'Zap',
        x: 1,
        y: 0,
        connections: ['posture-break-1']
    },
    {
        id: 'posture-break-1',
        label: 'Posture Break',
        description: 'First posture reset of the day',
        domain: 'physical',
        icon: 'Spine',
        x: 1,
        y: 1,
        connections: ['deep-work']
    },
    {
        id: 'hydration',
        label: '2.5L Water',
        description: 'Stay hydrated throughout day',
        domain: 'lifestyle',
        icon: 'Droplet',
        x: 1,
        y: 2,
        connections: ['healthy-meal-1']
    },
    {
        id: 'deep-work',
        label: '3h Focus',
        description: 'Three hours of deep, focused work',
        domain: 'mental',
        icon: 'Brain',
        x: 2,
        y: 0,
        connections: ['learning']
    },
    {
        id: 'strength',
        label: '20min Strength',
        description: 'Strength training session',
        domain: 'physical',
        icon: 'Dumbbell',
        x: 2,
        y: 1,
        connections: ['mobility']
    },
    {
        id: 'healthy-meal-1',
        label: 'Healthy Meal',
        description: 'Nutritious breakfast or lunch',
        domain: 'lifestyle',
        icon: 'Apple',
        x: 2,
        y: 2,
        connections: ['outdoor-time']
    },
    {
        id: 'learning',
        label: '30min Learn',
        description: 'Learning or skill development',
        domain: 'mental',
        icon: 'BookOpen',
        x: 3,
        y: 0,
        connections: ['building']
    },
    {
        id: 'mobility',
        label: '10min Mobility',
        description: 'Mobility and flexibility work',
        domain: 'physical',
        icon: 'Activity',
        x: 3,
        y: 1,
        connections: ['posture-break-2']
    },
    {
        id: 'outdoor-time',
        label: '20min Outside',
        description: 'Time in fresh air and sunlight',
        domain: 'lifestyle',
        icon: 'Sun',
        x: 3,
        y: 2,
        connections: ['healthy-meal-2']
    },
    {
        id: 'building',
        label: '60min Build',
        description: 'Creative building or creation time',
        domain: 'creative',
        icon: 'Hammer',
        x: 4,
        y: 0,
        connections: ['notes']
    },
    {
        id: 'posture-break-2',
        label: 'Posture Break',
        description: 'Afternoon posture reset',
        domain: 'physical',
        icon: 'Spine',
        x: 4,
        y: 1,
        connections: ['reading']
    },
    {
        id: 'healthy-meal-2',
        label: 'Healthy Meal',
        description: 'Nutritious dinner',
        domain: 'lifestyle',
        icon: 'Apple',
        x: 4,
        y: 2,
        connections: ['reflection']
    },
    {
        id: 'reading',
        label: '10p Reading',
        description: 'Read 10+ pages',
        domain: 'mental',
        icon: 'BookMarked',
        x: 5,
        y: 1,
        connections: ['reflection']
    },
    {
        id: 'reflection',
        label: 'Journal+Plan',
        description: 'Evening journal and next-day planning',
        domain: 'reflection',
        icon: 'Notebook',
        x: 5,
        y: 0,
        connections: []
    }
];
