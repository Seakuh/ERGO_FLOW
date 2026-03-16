import { WikiArticle } from '../../../types/wiki';

export const forwardHeadPosture: WikiArticle = {
  slug: 'forward-head-posture',
  title: 'Forward Head Posture',
  subtitle: 'Understanding the mechanics, causes, and corrections for the most common postural fault of the digital age.',
  category: 'conditions',
  readingTimeMinutes: 7,
  sections: [
    {
      id: 'what-is-it',
      heading: 'What Is Forward Head Posture?',
      content: 'Forward head posture (FHP) is a postural deviation in which the skull translates forward relative to the cervical spine\'s natural axis. In an ideal neutral posture, the ear should align directly over the shoulder joint when viewed from the side. In FHP, the ear is positioned 2–6 cm anterior to this alignment. This shift has a compounding mechanical consequence: for every inch the head moves forward of center, the effective load on the cervical vertebrae increases by approximately 10 lbs, eventually totaling up to 60 lbs of additional compression on the cervical discs.'
    },
    {
      id: 'causes',
      heading: 'Common Causes',
      content: 'The primary driver of FHP in modern life is sustained flexion of the cervical spine during screen use. Laptops positioned below eye level, phones held in the lap, and desktop monitors set too low all create habitual downward gaze that, over months and years, reshapes the resting muscle length of the posterior cervical and suboccipital muscles. Additionally, weak deep cervical flexors and tight chest muscles mechanically pull the head forward, establishing a cycle where weakness perpetuates the deformity.'
    },
    {
      id: 'muscles-involved',
      heading: 'Muscles Involved',
      content: 'FHP involves a predictable pattern of tightness and weakness: Tight/overactive: suboccipitals, upper trapezius, levator scapulae, sternocleidomastoid, pectorals. Weak/inhibited: deep cervical flexors (longus colli, longus capitis), lower trapezius, deep thoracic extensors. This imbalance is called "Upper Crossed Syndrome" when it includes the upper back and shoulder muscles.'
    },
    {
      id: 'consequences',
      heading: 'Consequences of Forward Head Posture',
      content: 'Beyond the mechanical load increase, FHP triggers a cascade of biomechanical faults: (1) Increased cervical lordosis and thoracic kyphosis to maintain visual horizon, (2) Reduced scapular upward rotation, leading to impingement risk, (3) Weakened rotator cuff due to altered glenohumeral mechanics, (4) Reduced breathing capacity as the rib cage position becomes compromised, (5) Temporomandibular joint (TMJ) stress due to altered cervical-jaw mechanics.'
    },
    {
      id: 'correction',
      heading: 'Corrective Approach',
      content: 'Correcting FHP is a multi-week process that requires both passive interventions (ergonomic changes) and active training (corrective exercise). The highest-evidence interventions are: (1) Chin tucks to activate deep cervical flexors—perform hourly throughout the day, (2) Thoracic mobility work (foam roller, cat-cow) to address the mid-back stiffness that forces the neck to compensate, (3) Screen height adjustment to eliminate the habitual downward gaze that perpetuates the pattern, (4) Pec stretching to reduce the anterior pull on the shoulders and head. Progress is typically seen within 4–6 weeks with consistent adherence.'
    }
  ],
  relatedSlugs: ['thoracic-spine-mobility', 'desk-setup-guide', 'upper-crossed-syndrome'],
  relatedExerciseIds: ['chin-tuck', 'thoracic-extension-foam-roller', 'band-pull-apart'],
  tags: ['neck', 'cervical', 'FHP', 'posture correction', 'desk worker'],
  publishedAt: '2024-01-01T00:00:00.000Z',
  updatedAt: '2024-01-01T00:00:00.000Z'
};
