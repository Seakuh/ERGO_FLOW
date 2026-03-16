import { Exercise } from '../types/exercise';

export const exercises: Exercise[] = [
  {
    id: 'band-pull-apart',
    name: 'Band Pull-Apart',
    shortDescription: 'Strengthens the rear deltoids and scapular retractors to counteract rounded shoulders.',
    description: 'The band pull-apart is a foundational postural exercise that directly addresses the weakness pattern most desk workers develop: inhibited upper back muscles and overactive chest/anterior shoulder muscles. By pulling a resistance band apart at shoulder height, you activate the posterior deltoids, rhomboids, and lower trapezius — the three muscle groups most responsible for keeping your shoulders back and chest open.',
    category: 'strengthening',
    difficulty: 'beginner',
    durationMinutes: 5,
    muscles: {
      primary: ['rear_deltoids', 'rhomboids', 'lower_trapezius'],
      secondary: ['rotator_cuff', 'upper_trapezius']
    },
    equipment: ['resistance band'],
    sets: { reps: 15, sets: 3, restSeconds: 45 },
    cues: [
      { order: 1, text: 'Hold a light resistance band at shoulder width, arms extended forward at shoulder height.' },
      { order: 2, text: 'Keep a slight bend in the elbows throughout — never lock out.' },
      { order: 3, text: 'Pull the band apart by driving your elbows back and squeezing your shoulder blades together.' },
      { order: 4, text: 'The band should touch or nearly touch your chest at full range.' },
      { order: 5, text: 'Return slowly — take 3 seconds to resist the band back to start.' }
    ],
    benefits: [
      'Directly counters rounded-shoulder posture',
      'Activates lower trapezius to depress elevated shoulders',
      'Improves thoracic extension as a side effect'
    ],
    contraindications: [
      'Avoid if experiencing acute rotator cuff pain',
      'Use a lighter band if you feel upper trap or neck compensation'
    ],
    youtubeId: 'j7JQkD7QKGA',
    tags: ['shoulders', 'upper back', 'scapula', 'desk posture', 'band'],
    relatedExerciseIds: ['wall-slide', 'face-pull', 'thoracic-extension-foam-roller'],
    createdAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: 'wall-slide',
    name: 'Wall Slide',
    shortDescription: 'Trains scapular upward rotation and shoulder mobility along a vertical plane.',
    description: 'Wall slides are a corrective exercise that teaches the shoulders to move through full overhead range while the back remains flat against the wall. The wall provides biofeedback — any compensation (arching the lower back, flaring the ribs) is immediately felt. This exercise is particularly effective for people with winging scapulae or limited shoulder flexion.',
    category: 'mobility',
    difficulty: 'beginner',
    durationMinutes: 4,
    muscles: {
      primary: ['serratus_anterior', 'lower_trapezius'],
      secondary: ['rotator_cuff', 'rear_deltoids']
    },
    equipment: ['wall'],
    sets: { reps: 10, sets: 3, restSeconds: 30 },
    cues: [
      { order: 1, text: 'Stand with your back, head, and both arms flush against a wall.' },
      { order: 2, text: 'Raise your arms to a 90/90 goalpost position — elbows bent, back of hands on wall.' },
      { order: 3, text: 'Slide your arms upward, keeping the back of your hands and forearms in contact with the wall.' },
      { order: 4, text: 'Stop just before you lose wall contact or your lower back arches.' },
      { order: 5, text: 'Slowly lower back to the goalpost position.' }
    ],
    benefits: [
      'Improves scapular upward rotation, often restricted in desk workers',
      'Activates serratus anterior to prevent scapular winging',
      'Increases overhead shoulder mobility without loading the joint'
    ],
    contraindications: [
      'Avoid forcing range — work only to where the wall contact can be maintained',
      'Not suitable as primary exercise if acute shoulder impingement is present'
    ],
    youtubeId: 'd7tMHHDGOsg',
    tags: ['shoulders', 'scapula', 'overhead mobility', 'corrective'],
    relatedExerciseIds: ['band-pull-apart', 'doorway-pec-stretch'],
    createdAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: 'chin-tuck',
    name: 'Chin Tuck',
    shortDescription: 'Corrects forward head posture by strengthening the deep cervical flexors.',
    description: 'The chin tuck is the single most prescribed exercise for forward head posture — a condition where the skull translates forward of the spine\'s center of gravity, placing up to 60 lbs of additional load on the cervical vertebrae for every inch of forward displacement. The movement is subtle but precise: a horizontal retraction of the head (not a downward nod), which activates the deep cervical flexors while lengthening the suboccipital muscles that are chronically shortened in forward head posture.',
    category: 'posture_reset',
    difficulty: 'beginner',
    durationMinutes: 3,
    muscles: {
      primary: ['deep_neck_flexors'],
      secondary: ['upper_trapezius', 'levator_scapulae']
    },
    equipment: ['none'],
    sets: { reps: 10, holdSeconds: 5, sets: 2, restSeconds: 30 },
    cues: [
      { order: 1, text: 'Sit or stand tall with your spine in a neutral position.' },
      { order: 2, text: 'Look straight ahead. Without tilting your chin up or down, glide your head straight back.' },
      { order: 3, text: 'You should feel a gentle stretch at the base of your skull and top of your neck.' },
      { order: 4, text: 'Hold for 5 seconds. This is not a large movement — even 1–2 cm of retraction is correct.' },
      { order: 5, text: 'Release forward slowly. Do not let the head snap back.' }
    ],
    benefits: [
      'Reduces compressive load on cervical vertebrae',
      'Activates chronically inhibited deep neck flexors',
      'Can be performed every hour at a desk without equipment'
    ],
    contraindications: [
      'Do not perform if you have acute cervical herniation — consult a physician first',
      'Stop if you experience radiating pain or tingling into the arms'
    ],
    youtubeId: 'wQylqaCl8Zo',
    tags: ['neck', 'cervical', 'forward head', 'desk', 'no equipment'],
    relatedExerciseIds: ['thoracic-extension-foam-roller', 'band-pull-apart'],
    createdAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: 'doorway-pec-stretch',
    name: 'Doorway Pec Stretch',
    shortDescription: 'Lengthens the pectoralis major and minor to open the chest and correct rounded shoulders.',
    description: 'Prolonged sitting keeps the pectorals in a chronically shortened state, which mechanically pulls the shoulders forward and internally rotates the humerus. The doorway stretch provides a simple, progressive way to restore pec length using only a door frame. The key is to feel the stretch at the front of the shoulder and chest — not in the elbow or wrist — which means arm position matters more than how hard you lean.',
    category: 'stretching',
    difficulty: 'beginner',
    durationMinutes: 4,
    muscles: {
      primary: ['pectorals'],
      secondary: ['rear_deltoids', 'rotator_cuff']
    },
    equipment: ['doorframe'],
    sets: { holdSeconds: 30, sets: 3, restSeconds: 20 },
    cues: [
      { order: 1, text: 'Stand in a doorway. Place both forearms vertically on the door frame, elbows at 90 degrees.' },
      { order: 2, text: 'Step one foot forward through the doorway.' },
      { order: 3, text: 'Gently lean your chest forward until you feel a stretch across the front of your shoulders and chest.' },
      { order: 4, text: 'Keep your chin tucked — do not let the head jut forward as you lean.' },
      { order: 5, text: 'Breathe steadily. Hold 30 seconds. Repeat with the opposite foot forward to balance the stretch.' }
    ],
    benefits: [
      'Directly counters the chest tightness caused by desk posture',
      'Allows the scapulae to retract more fully',
      'Can be performed during natural work breaks'
    ],
    contraindications: [
      'Avoid if you have anterior shoulder instability or recent shoulder dislocation',
      'Do not over-stretch — mild tension is the target, not pain'
    ],
    youtubeId: 'EBufHyAXAIQ',
    tags: ['chest', 'pec', 'stretching', 'rounded shoulders', 'no equipment'],
    relatedExerciseIds: ['band-pull-apart', 'wall-slide', 'thoracic-extension-foam-roller'],
    createdAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: 'thoracic-extension-foam-roller',
    name: 'Thoracic Extension (Foam Roller)',
    shortDescription: 'Mobilizes the mid-back by using a foam roller to restore thoracic extension.',
    description: 'The thoracic spine — the 12 vertebrae that attach to the ribs — should have a gentle natural kyphosis, but desk posture exaggerates this curve, making the mid-back stiff and hyperkyphotic. A stiff thoracic spine forces the lumbar spine and cervical spine to compensate, contributing to both lower back pain and neck pain. This foam roller drill uses gravity and body weight to progressively restore thoracic extension, segment by segment.',
    category: 'mobility',
    difficulty: 'beginner',
    durationMinutes: 7,
    muscles: {
      primary: ['thoracic_extensors'],
      secondary: ['rhomboids', 'lats']
    },
    equipment: ['foam roller'],
    sets: { holdSeconds: 10, rounds: 5, restSeconds: 10 },
    cues: [
      { order: 1, text: 'Place the foam roller horizontally on the floor. Sit in front of it and lean back so it contacts your mid-back, just below the shoulder blades.' },
      { order: 2, text: 'Support your head in your hands (interlace fingers behind your head).' },
      { order: 3, text: 'Allow gravity to gently extend your thoracic spine over the roller. Breathe out and let your chest open toward the ceiling.' },
      { order: 4, text: 'Hold 10 seconds at each level, then shift the roller 1–2 inches up your spine.' },
      { order: 5, text: 'Work from T6 (just below shoulder blades) up to T2 (near upper traps). Do not roll the lumbar spine.' }
    ],
    benefits: [
      'Restores thoracic extension lost from desk posture',
      'Reduces compensatory strain on lumbar and cervical spine',
      'Improves breathing mechanics by opening the rib cage'
    ],
    contraindications: [
      'Do not roll the lumbar (lower) spine — stay above the lower ribs',
      'Avoid if you have active thoracic disc herniation',
      'Use gentle pressure — this should feel like a good stretch, not sharp pain'
    ],
    youtubeId: 'G4sQRHNFvnc',
    tags: ['thoracic', 'mobility', 'foam roller', 'mid-back', 'kyphosis'],
    relatedExerciseIds: ['chin-tuck', 'band-pull-apart', 'cat-cow'],
    createdAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: 'cat-cow',
    name: 'Cat-Cow',
    shortDescription: 'A gentle spinal mobility drill that moves the entire spine through flexion and extension.',
    description: 'Cat-Cow is one of the most efficient spinal warm-up movements — it addresses the entire spine from sacrum to occiput in a single flowing drill. For people with stiff thoracic spines (most desk workers), the goal is not just to move through the motion, but to slow down and feel where the spine is not moving. Stiff segments will feel like a crease rather than a smooth arc. Over time, repeating this movement improves intersegmental mobility throughout the full spinal chain.',
    category: 'mobility',
    difficulty: 'beginner',
    durationMinutes: 4,
    muscles: {
      primary: ['thoracic_extensors', 'core'],
      secondary: ['lats', 'hip_flexors']
    },
    equipment: ['yoga mat'],
    sets: { reps: 10, sets: 2, restSeconds: 20 },
    cues: [
      { order: 1, text: 'Begin on all fours — knees under hips, wrists under shoulders.' },
      { order: 2, text: 'Cow: Inhale and let your belly drop toward the floor. Lift your chest and tailbone toward the ceiling.' },
      { order: 3, text: 'Cat: Exhale and push the floor away, rounding your spine toward the ceiling like an angry cat.' },
      { order: 4, text: 'Move slowly — take 3–4 seconds per direction. Look for where your spine refuses to curve and try to direct the movement there.' },
      { order: 5, text: 'Keep the movement in your spine, not just your head and hips.' }
    ],
    benefits: [
      'Warms up the entire spinal column before exercise or work',
      'Improves intersegmental mobility in the thoracic spine',
      'Coordinates breath with movement, reducing nervous system arousal'
    ],
    contraindications: [
      'Avoid extreme ranges if you have acute lumbar disc herniation',
      'Keep wrist pressure gentle if you have carpal tunnel — use fists if needed'
    ],
    youtubeId: 'kqnua4rHVVA',
    tags: ['spine', 'mobility', 'warm-up', 'yoga', 'full-body'],
    relatedExerciseIds: ['thoracic-extension-foam-roller', 'hip-flexor-stretch'],
    createdAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: 'face-pull',
    name: 'Face Pull',
    shortDescription: 'Builds the external rotators and rear deltoids to create healthy, stable shoulders.',
    description: 'The face pull is one of the most important shoulder health exercises for desk workers. It trains the posterior shoulder muscles — rear deltoids and rotator cuff external rotators — that are consistently under-recruited relative to the anterior (pushing) muscles that modern life overdevelops. Performed with a cable or band at face height, the face pull also enforces proper glenohumeral mechanics by promoting external rotation at end range.',
    category: 'strengthening',
    difficulty: 'intermediate',
    durationMinutes: 6,
    muscles: {
      primary: ['rear_deltoids', 'rotator_cuff'],
      secondary: ['rhomboids', 'lower_trapezius']
    },
    equipment: ['cable machine', 'resistance band'],
    sets: { reps: 15, sets: 3, restSeconds: 60 },
    cues: [
      { order: 1, text: 'Set a cable or anchor a resistance band at forehead height.' },
      { order: 2, text: 'Grip the rope (or band) with both hands, palms facing inward. Step back to create tension.' },
      { order: 3, text: 'Pull the handles toward your face, leading with your elbows — keep elbows at or above shoulder height throughout.' },
      { order: 4, text: 'At the end of the pull, externally rotate your shoulders so your knuckles point toward the ceiling.' },
      { order: 5, text: 'Pause 1 second, squeeze the rear deltoids, then slowly return.' }
    ],
    benefits: [
      'Directly counteracts the internal rotation bias of desk and driving posture',
      'Strengthens the rotator cuff in its most functional position',
      'Improves long-term shoulder joint health'
    ],
    contraindications: [
      'Use light weight — this is a health exercise, not a strength exercise',
      'Avoid if you have an acute rotator cuff tear'
    ],
    youtubeId: 'HSoHeSjFMOA',
    tags: ['shoulders', 'rotator cuff', 'external rotation', 'cable', 'band'],
    relatedExerciseIds: ['band-pull-apart', 'wall-slide', 'doorway-pec-stretch'],
    createdAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: 'hip-flexor-stretch',
    name: 'Hip Flexor Stretch (Kneeling Lunge)',
    shortDescription: 'Lengthens the hip flexors shortened by prolonged sitting to restore pelvic alignment.',
    description: 'Sitting keeps the hip flexors — primarily the iliopsoas and rectus femoris — in a shortened position for hours each day. Over time this creates adaptive shortening, which then pulls the pelvis into an anterior tilt, increases lumbar lordosis, and contributes to lower back pain. The kneeling lunge stretch is the most effective simple intervention for this pattern. The key is to not just lean forward (which stretches the wrong tissue) but to posteriorly tilt the pelvis first, then extend the hip.',
    category: 'stretching',
    difficulty: 'beginner',
    durationMinutes: 5,
    muscles: {
      primary: ['hip_flexors'],
      secondary: ['glutes', 'core']
    },
    equipment: ['yoga mat'],
    sets: { holdSeconds: 45, sets: 2, restSeconds: 15 },
    cues: [
      { order: 1, text: 'Kneel with one knee on the floor and the other foot forward in a lunge position.' },
      { order: 2, text: 'Before moving, squeeze the glute of the back leg and tuck your pelvis slightly under (posterior tilt).' },
      { order: 3, text: 'Maintaining the pelvic tuck, shift your hips forward until you feel a stretch in the front of your back hip and thigh.' },
      { order: 4, text: 'Keep your torso upright — resist the urge to lean forward, which reduces the stretch.' },
      { order: 5, text: 'Hold 45 seconds. The stretch should be felt in the front of the hip, not the knee.' }
    ],
    benefits: [
      'Restores hip extension range lost from prolonged sitting',
      'Reduces anterior pelvic tilt and associated lumbar stress',
      'Improves gait mechanics and standing posture'
    ],
    contraindications: [
      'Use a pad under the back knee if you have knee sensitivity',
      'Avoid if you have acute hip flexor strain'
    ],
    youtubeId: 'YQmpO9VT2X4',
    tags: ['hips', 'lower body', 'sitting', 'pelvic tilt', 'lower back'],
    relatedExerciseIds: ['cat-cow', 'glute-bridge'],
    createdAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: 'glute-bridge',
    name: 'Glute Bridge',
    shortDescription: 'Activates the glutes to restore posterior chain function suppressed by sitting.',
    description: 'Sitting for extended periods causes reciprocal inhibition of the glutes — when the hip flexors are shortened and active, the nervous system down-regulates the opposing glute muscles. This "gluteal amnesia" reduces posterior chain power and forces other muscles (particularly the hamstrings and lower back erectors) to compensate, contributing to lower back pain. The glute bridge is the most accessible and effective way to re-establish the glute firing pattern.',
    category: 'strengthening',
    difficulty: 'beginner',
    durationMinutes: 6,
    muscles: {
      primary: ['glutes'],
      secondary: ['core', 'hip_flexors', 'thoracic_extensors']
    },
    equipment: ['none', 'yoga mat'],
    sets: { reps: 15, holdSeconds: 2, sets: 3, restSeconds: 45 },
    cues: [
      { order: 1, text: 'Lie on your back with knees bent, feet flat on the floor hip-width apart.' },
      { order: 2, text: 'Press your lower back gently into the floor to engage your core.' },
      { order: 3, text: 'Drive your heels into the floor and squeeze your glutes to lift your hips until your body forms a straight line from knees to shoulders.' },
      { order: 4, text: 'Pause 2 seconds at the top — make sure the glutes are doing the work, not the lower back.' },
      { order: 5, text: 'Lower slowly — take 3 seconds to return to the floor.' }
    ],
    benefits: [
      'Reactivates glutes inhibited by prolonged sitting',
      'Reduces lumbar spine compensatory loading',
      'Improves hip extension for standing and walking'
    ],
    contraindications: [
      'Avoid if you have acute SI joint pain',
      'Do not hyperextend the lower back at the top of the movement'
    ],
    youtubeId: 'OUgsJ8-Vi0E',
    tags: ['glutes', 'hips', 'lower back', 'no equipment', 'activation'],
    relatedExerciseIds: ['hip-flexor-stretch', 'cat-cow'],
    createdAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: "push-up",
    name: "Push-Up",
    shortDescription: "Classic upper body bodyweight strength exercise.",
    description: "The push-up is a foundational bodyweight movement that trains chest, shoulders and triceps while engaging the core for stability.",
    category: "mobility",
    difficulty: "beginner",
    durationMinutes: 5,
    muscles: {
      primary: ["pectorals", "rear_deltoids", "triceps", "core"],
      secondary: ["rear_deltoids", "rhomboids", "lower_trapezius"]
    },
    equipment: [],
    sets: {
      reps: 12,
      sets: 3,
      restSeconds: 60
    },
    cues: [
      { order: 1, text: "Place hands slightly wider than shoulder width." },
      { order: 2, text: "Keep body in a straight line from head to heels." },
      { order: 3, text: "Lower chest under control." },
      { order: 4, text: "Push back up without letting hips sag." }
    ],
    benefits: [
      "Upper body strength",
      "Core stability",
      "Scalable difficulty"
    ],
    contraindications: [
      "Shoulder impingement",
      "Acute wrist pain"
    ],
    youtubeId: "zF0jbubK_jU",
    tags: ["bodyweight", "upper-body", "strength"],
    relatedExerciseIds: ["incline-push-up", "plank"],
    createdAt: new Date().toISOString()
  },
  
  {
    id: "bodyweight-squat",
    name: "Bodyweight Squat",
    shortDescription: "Fundamental lower body exercise using body weight.",
    description: "The bodyweight squat develops lower body strength, mobility and coordination.",
    category: "strengthening",
    difficulty: "beginner",
    durationMinutes: 5,
    muscles: {
      primary: ["quadriceps", "glutes", "hip_flexors"],
      secondary: ["hamstrings", "core"]
    },
    equipment: [],
    sets: {
      reps: 15,
      sets: 3,
      restSeconds: 60
    },
    cues: [
      { order: 1, text: "Stand with feet shoulder-width apart." },
      { order: 2, text: "Push hips back and bend knees." },
      { order: 3, text: "Keep chest upright." },
      { order: 4, text: "Drive through heels to stand up." }
    ],
    benefits: [
      "Lower body strength",
      "Improved mobility",
      "Functional movement pattern"
    ],
    contraindications: [
      "Acute knee injury",
      "Severe hip pain"
    ],
    youtubeId: "P-yaD24bUE8",
    tags: ["legs", "bodyweight", "strength"],
    relatedExerciseIds: ["lunge", "wall-sit"],
    createdAt: new Date().toISOString()
  },
  
  {
    id: "plank",
    name: "Plank",
    shortDescription: "Isometric core stability exercise.",
    description: "The plank strengthens the core and improves posture by training the abdominal and spinal stabilizers.",
    category: "balance",
    difficulty: "beginner",
    durationMinutes: 3,
    muscles: {
      primary: ["core"],
      secondary: ["pectorals", "glutes"]
    },
    equipment: [],
    sets: {
      holdSeconds: 30,
      sets: 3,
      restSeconds: 30
    },
    cues: [
      { order: 1, text: "Place forearms on the ground under shoulders." },
      { order: 2, text: "Engage core and glutes." },
      { order: 3, text: "Keep body in a straight line." },
      { order: 4, text: "Avoid arching the lower back." }
    ],
    benefits: [
      "Core stability",
      "Improved posture",
      "Low injury risk"
    ],
    contraindications: [
      "Acute lower back injury"
    ],
    youtubeId: "pSHjTRCQxIw",
    tags: ["core", "isometric", "stability"],
    relatedExerciseIds: ["side-plank", "dead-bug"],
    createdAt: new Date().toISOString()
  },
  
  {
    id: "reverse-lunge",
    name: "Reverse Lunge",
    shortDescription: "Single-leg strength exercise improving balance and leg strength.",
    description: "Reverse lunges strengthen the legs and improve balance while placing less stress on the knees than forward lunges.",
    category: "mobility",
    difficulty: "beginner",
    durationMinutes: 5,
    muscles: {
      primary: ["glutes", "hip_flexors"],
      secondary: ["quadriceps", "core"]
    },
    equipment: [],
    sets: {
      reps: 10,
      sets: 3,
      restSeconds: 60
    },
    cues: [
      { order: 1, text: "Stand tall and step one foot backward." },
      { order: 2, text: "Lower until both knees reach roughly 90°." },
      { order: 3, text: "Keep torso upright." },
      { order: 4, text: "Push through the front heel to return." }
    ],
    benefits: [
      "Improves balance",
      "Strengthens legs",
      "Corrects muscular imbalances"
    ],
    contraindications: [
      "Acute knee injury",
      "Severe balance impairment"
    ],
    youtubeId: "QOVaHwm-Q6U",
    tags: ["hips", "balance", "unilateral"],
    relatedExerciseIds: ["bodyweight-squat"],
    createdAt: new Date().toISOString()
  }
];
