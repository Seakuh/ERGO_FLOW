export const hints = [
    {
        id: 'monitor-height',
        title: 'Monitor Eye Level',
        description: 'Your monitor top should align with eye level when sitting upright. Too low = forward head posture; too high = neck strain.',
        icon: 'lightbulb',
        category: 'ergonomics',
        priority: 'high',
        timestamp: '2024-03-16T09:00:00.000Z'
    },
    {
        id: '20-20-20-rule',
        title: 'The 20-20-20 Rule',
        description: 'Every 20 minutes, take 20 seconds to look at something 20 feet away. Reduces eye strain and prompts movement.',
        icon: 'clock',
        category: 'habit',
        priority: 'high',
        timestamp: '2024-03-16T09:15:00.000Z'
    },
    {
        id: 'shoulder-shrug',
        title: 'Shoulder Shrug Release',
        description: 'Lift shoulders to ears for 2 seconds, then drop. Repeat 5 times. Releases trapezius tension built up from typing.',
        icon: 'zap',
        category: 'exercise',
        priority: 'medium',
        relatedExerciseId: 'band-pull-apart',
        timestamp: '2024-03-16T09:30:00.000Z'
    },
    {
        id: 'posture-reset',
        title: 'Hourly Posture Reset',
        description: 'Every hour, stand up, do 2 chin tucks and 3 cat-cows. Takes 1 minute. Prevents posture degeneration throughout the day.',
        icon: 'checkCircle',
        category: 'posture',
        priority: 'high',
        relatedExerciseId: 'chin-tuck',
        timestamp: '2024-03-16T09:45:00.000Z'
    },
    {
        id: 'keyboard-height',
        title: 'Elbows at 90 Degrees',
        description: 'Your keyboard and mouse should be at a height where elbows are at 90°. Too high = shoulder shrug; too low = forward lean.',
        icon: 'lightbulb',
        category: 'ergonomics',
        priority: 'medium',
        timestamp: '2024-03-16T10:00:00.000Z'
    },
    {
        id: 'water-breaks',
        title: 'Hydrate & Move',
        description: 'Drink water every hour and walk to refill. Double benefit: hydration + movement breaks.',
        icon: 'alert',
        category: 'habit',
        priority: 'medium',
        timestamp: '2024-03-16T10:15:00.000Z'
    },
    {
        id: 'breathing-awareness',
        title: 'Breath Awareness',
        description: 'Stress and poor posture reduce breathing. Pause and take 3 deep belly breaths every hour. Notice the relaxation.',
        icon: 'lightbulb',
        category: 'breathing',
        priority: 'low',
        timestamp: '2024-03-16T10:30:00.000Z'
    },
    {
        id: 'phone-posture',
        title: 'Phone Positioning',
        description: 'Never cradle phone between ear and shoulder. Use speakerphone or headset. Prevents cervical strain and muscle imbalance.',
        icon: 'alert',
        category: 'ergonomics',
        priority: 'high',
        timestamp: '2024-03-16T10:45:00.000Z'
    },
    {
        id: 'scapula-squeeze',
        title: 'Scapular Squeeze',
        description: 'Pinch shoulder blades together for 2 seconds, release. Repeat 10 times. Activates lower trapezius throughout the day.',
        icon: 'zap',
        category: 'exercise',
        priority: 'medium',
        relatedExerciseId: 'band-pull-apart',
        timestamp: '2024-03-16T11:00:00.000Z'
    },
    {
        id: 'standing-desk-alternate',
        title: 'Sit-Stand Rhythm',
        description: 'If using a standing desk, alternate every 30 minutes. No single position is perfect — movement is the solution.',
        icon: 'checkCircle',
        category: 'habit',
        priority: 'medium',
        timestamp: '2024-03-16T11:15:00.000Z'
    },
    {
        id: 'feet-flat',
        title: 'Feet Flat on Floor',
        description: 'Both feet should rest flat on floor or footrest (90° at ankles). Dangling feet = pelvic tilt = lower back strain.',
        icon: 'lightbulb',
        category: 'ergonomics',
        priority: 'medium',
        timestamp: '2024-03-16T11:30:00.000Z'
    },
    {
        id: 'back-support',
        title: 'Lumbar Support Matters',
        description: 'Your chair should support the natural curve of your lower back. If not, add a lumbar support pillow.',
        icon: 'alert',
        category: 'ergonomics',
        priority: 'high',
        timestamp: '2024-03-16T11:45:00.000Z'
    }
];
