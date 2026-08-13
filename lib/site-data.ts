// Central content store for FitCore Wellness Club.
// Stats are [PLACEHOLDER] values — reasonable-looking, not real figures.

export const site = {
  name: 'FitCore Wellness Club',
  tagline: 'Transform Your Body. Elevate Your Life.',
  phone: '9831067429',
  phoneHref: 'tel:+919831067429',
  email: 'info@fitcorewellness.com',
  emailHref: 'mailto:info@fitcorewellness.com',
  address: '22, Park Street Extension, Kolkata – 700016',
  addressShort: 'Kolkata, West Bengal',
  hours: 'Mon – Sat: 6:00 AM – 10:00 PM',
  hoursSunday: 'Sun: 7:00 AM – 2:00 PM',
  // [PLACEHOLDER] brand stats
  stats: [
    { label: 'Years Running', value: '10+', suffix: '' },
    { label: 'Active Members', value: '2000', suffix: '+' },
    { label: 'Expert Trainers', value: '25', suffix: '+' },
    { label: 'Weekly Classes', value: '40', suffix: '+' },
  ],
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/membership', label: 'Membership' },
  { href: '/contact', label: 'Contact' },
] as const;

export const images = {
  heroWorkout:
    'https://images.pexels.com/photos/17956264/pexels-photo-17956264.jpeg?auto=compress&cs=tinysrgb&w=1600',
  heroSecondary:
    'https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=1600',
  aboutPreview:
    'https://images.pexels.com/photos/6389893/pexels-photo-6389893.jpeg?auto=compress&cs=tinysrgb&w=1200',
  aboutStory:
    'https://images.pexels.com/photos/4716814/pexels-photo-4716814.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ctaBanner:
    'https://images.pexels.com/photos/4720758/pexels-photo-4720758.jpeg?auto=compress&cs=tinysrgb&w=1600',
  contactInterior:
    'https://images.pexels.com/photos/6046979/pexels-photo-6046979.png?auto=compress&cs=tinysrgb&w=1200',
  gallery: [
    'https://images.pexels.com/photos/6050745/pexels-photo-6050745.png?auto=compress&cs=tinysrgb&w=1000',
    'https://images.pexels.com/photos/12250460/pexels-photo-12250460.jpeg?auto=compress&cs=tinysrgb&w=1000',
    'https://images.pexels.com/photos/6388514/pexels-photo-6388514.jpeg?auto=compress&cs=tinysrgb&w=1000',
    'https://images.pexels.com/photos/9545909/pexels-photo-9545909.jpeg?auto=compress&cs=tinysrgb&w=1000',
    'https://images.pexels.com/photos/3916766/pexels-photo-3916766.jpeg?auto=compress&cs=tinysrgb&w=1000',
    'https://images.pexels.com/photos/38882512/pexels-photo-38882512.jpeg?auto=compress&cs=tinysrgb&w=1000',
  ],
};

export interface Program {
  id: string;
  name: string;
  short: string;
  description: string;
  image: string;
  icon: 'Dumbbell' | 'Users' | 'Flower2' | 'UserCheck' | 'Flame' | 'Salad';
  details: string[];
  intensity: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string;
}

export const programs: Program[] = [
  {
    id: 'strength',
    name: 'Strength & Conditioning',
    short: 'Build raw power with progressive, science-backed lifting.',
    description:
      'Our flagship strength program blends progressive overload, mobility work and corrective training so you build muscle safely and sustainably. Every session is coached, tracked and tailored to your numbers — no guesswork, no plateaus.',
    image:
      'https://images.pexels.com/photos/4944006/pexels-photo-4944006.jpeg?auto=compress&cs=tinysrgb&w=1000',
    icon: 'Dumbbell',
    intensity: 'All Levels',
    duration: '60 min',
    details: [
      'Progressive overload periodisation',
      'Olympic & compound lift coaching',
      'Mobility and injury-prevention drills',
      'Quarterly strength benchmarking',
    ],
  },
  {
    id: 'group-fitness',
    name: 'Group Fitness Classes',
    short: 'Zumba, Aerobics and HIIT — energy that moves with you.',
    description:
      'Dance, sweat and push through high-energy group sessions led by certified instructors. From rhythm-driven Zumba to heart-pounding HIIT circuits, our group classes turn fitness into the most fun part of your week.',
    image:
      'https://images.pexels.com/photos/4807082/pexels-photo-4807082.jpeg?auto=compress&cs=tinysrgb&w=1000',
    icon: 'Users',
    intensity: 'All Levels',
    duration: '45–55 min',
    details: [
      'Zumba, Aerobics & Dance Fitness',
      'HIIT circuit training',
      'Low-impact options for every level',
      'Music-driven, community atmosphere',
    ],
  },
  {
    id: 'yoga',
    name: 'Yoga & Mindfulness',
    short: 'Breathe, stretch and restore with guided flow sessions.',
    description:
      'Slow down and reconnect. Our yoga and mindfulness sessions combine Vinyasa flow, breathwork and guided meditation to improve flexibility, reduce stress and build the mental resilience that powers every other workout.',
    image:
      'https://images.pexels.com/photos/8436402/pexels-photo-8436402.jpeg?auto=compress&cs=tinysrgb&w=1000',
    icon: 'Flower2',
    intensity: 'Beginner',
    duration: '60 min',
    details: [
      'Vinyasa & Hatha flow styles',
      'Breathwork and pranayama',
      'Guided meditation and relaxation',
      'Stress-reduction and recovery focus',
    ],
  },
  {
    id: 'personal-training',
    name: 'Personal Training',
    short: '1-on-1 coaching built entirely around your goals.',
    description:
      'Work one-on-one with a dedicated trainer who designs every rep, set and meal around your body, your schedule and your ambitions. Personal training is the fastest path from where you are to where you want to be.',
    image:
      'https://images.pexels.com/photos/38453215/pexels-photo-38453215.jpeg?auto=compress&cs=tinysrgb&w=1000',
    icon: 'UserCheck',
    intensity: 'All Levels',
    duration: '60 min',
    details: [
      'Customised training programme',
      'Body composition tracking',
      'Form correction and technique drills',
      'Flexible scheduling with your coach',
    ],
  },
  {
    id: 'crossfit',
    name: 'CrossFit & Functional',
    short: 'Constant-variance WODs that build real-world athleticism.',
    description:
      'Train like an athlete with constantly varied, high-intensity functional movements. Our CrossFit box blends weightlifting, gymnastics and metabolic conditioning into workouts that forge strength, speed and grit — scaled to every ability.',
    image:
      'https://images.pexels.com/photos/4720827/pexels-photo-4720827.jpeg?auto=compress&cs=tinysrgb&w=1000',
    icon: 'Flame',
    intensity: 'Intermediate',
    duration: '60 min',
    details: [
      'Daily WODs (Workout of the Day)',
      'Olympic lifting & gymnastics skills',
      'Heart-rate-based conditioning',
      'Every movement fully scalable',
    ],
  },
  {
    id: 'nutrition',
    name: 'Weight Loss & Nutrition',
    short: 'Sustainable fat loss powered by real-food coaching.',
    description:
      'Training is only half the equation. Our nutrition coaches build realistic, whole-food meal plans around your lifestyle — no crash diets, no guilt. Paired with smart training, it is the most reliable way to lose fat and keep it off.',
    image:
      'https://images.pexels.com/photos/5237899/pexels-photo-5237899.jpeg?auto=compress&cs=tinysrgb&w=1000',
    icon: 'Salad',
    intensity: 'All Levels',
    duration: 'Weekly',
    details: [
      'Personalised meal planning',
      'Habit-based nutrition coaching',
      'Grocery lists and recipe guides',
      'Accountability and progress reviews',
    ],
  },
];

export interface Trainer {
  name: string;
  specialization: string;
  bio: string;
  experience: string;
  image: string;
  certifications: string[];
}

export const trainers: Trainer[] = [
  {
    name: 'Arjun Mehta',
    specialization: 'Strength & Conditioning',
    bio: 'A former national-level powerlifter, Arjun coaches members from first-ever deadlift to competition platform with a calm, technical approach.',
    experience: '12 years',
    image:
      'https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&w=800',
    certifications: ['NSCA-CSCS', 'Precision Nutrition L1'],
  },
  {
    name: 'Priya Nair',
    specialization: 'Yoga & Mindfulness',
    bio: 'Priya blends traditional Hatha training with modern mobility science to help members move better, recover faster and breathe deeper.',
    experience: '9 years',
    image:
      'https://images.pexels.com/photos/8436684/pexels-photo-8436684.jpeg?auto=compress&cs=tinysrgb&w=800',
    certifications: ['RYT-500', 'Mobility Specialist'],
  },
  {
    name: 'Rohan Das',
    specialization: 'CrossFit & Functional',
    bio: 'CrossFit Level 3 coach and former decathlete. Rohan lives for the moment a member realises they are far stronger than they thought.',
    experience: '10 years',
    image:
      'https://images.pexels.com/photos/32695885/pexels-photo-32695885.jpeg?auto=compress&cs=tinysrgb&w=800',
    certifications: ['CF-L3', 'USAW Level 1'],
  },
  {
    name: 'Sara Khan',
    specialization: 'Zumba & Group Fitness',
    bio: 'Sara brings ten years of stage choreography into the studio. Her classes are equal parts sweat, smiles and serious cardio.',
    experience: '8 years',
    image:
      'https://images.pexels.com/photos/37156646/pexels-photo-37156646.jpeg?auto=compress&cs=tinysrgb&w=800',
    certifications: ['ZIN', 'ACE Group Fitness'],
  },
  {
    name: 'Vikram Singh',
    specialization: 'Personal Training',
    bio: 'Vikram specialises in body recomposition for busy professionals — maximum results from minimum hours, engineered around your calendar.',
    experience: '11 years',
    image:
      'https://images.pexels.com/photos/10960029/pexels-photo-10960029.jpeg?auto=compress&cs=tinysrgb&w=800',
    certifications: ['ACE-CPT', 'Precision Nutrition L2'],
  },
  {
    name: 'Ananya Roy',
    specialization: 'Nutrition Coaching',
    bio: 'Registered dietitian turned habit coach. Ananya turns confusing nutrition science into simple, repeatable meals you actually enjoy.',
    experience: '7 years',
    image:
      'https://images.pexels.com/photos/5427310/pexels-photo-5427310.jpeg?auto=compress&cs=tinysrgb&w=800',
    certifications: ['RD', 'Precision Nutrition L1'],
  },
];

export interface Testimonial {
  name: string;
  role: string;
  memberSince: string; // [PLACEHOLDER]
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Karthik Subramaniam',
    role: 'Member since 2021',
    memberSince: '2021',
    quote:
      'I walked in weighing 104 kg and could not run for two minutes. Three trainers, two challenges and one meal plan later, I am 78 kg and just finished my first 10K. FitCore genuinely changed my life.',
    image:
      'https://images.pexels.com/photos/29793975/pexels-photo-29793975.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Debolina Sen',
    role: 'Member since 2022',
    memberSince: '2022',
    quote:
      'The yoga and mindfulness sessions are the only hour of my week that is truly mine. Priya helped me manage years of back pain and I have never slept better. This place is therapy with a pulse.',
    image:
      'https://images.pexels.com/photos/38453215/pexels-photo-38453215.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Imran Shaikh',
    role: 'Member since 2020',
    memberSince: '2020',
    quote:
      'I have trained at four gyms across Kolkata. None come close to the coaching and community here. The CrossFit box is addictive and the trainers actually care about your progress beyond the session.',
    image:
      'https://images.pexels.com/photos/13211450/pexels-photo-13211450.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export interface Feature {
  icon: 'BadgeCheck' | 'Dumbbell' | 'ClipboardList' | 'Users' | 'Apple' | 'Wallet';
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: 'BadgeCheck',
    title: 'Certified Trainers',
    description:
      'Every coach holds internationally recognised certifications and continuing-education credits. You are always in expert hands.',
  },
  {
    icon: 'Dumbbell',
    title: 'State-of-the-Art Equipment',
    description:
      'A full floor of premium strength, cardio and functional kit — refreshed every year so you train on gear that performs.',
  },
  {
    icon: 'ClipboardList',
    title: 'Personalized Training Plans',
    description:
      'No two bodies are the same. Your programme is built around your goals, your history and your real-world schedule.',
  },
  {
    icon: 'Users',
    title: 'Group Fitness Classes',
    description:
      '40+ weekly classes from Zumba to HIIT to Yoga. Find your people, find your rhythm, and never train alone unless you want to.',
  },
  {
    icon: 'Apple',
    title: 'Nutrition Guidance',
    description:
      'Training and nutrition under one roof. Our dietitians turn evidence into meals you will actually look forward to.',
  },
  {
    icon: 'Wallet',
    title: 'Flexible Membership Plans',
    description:
      'Basic, Premium or Elite — month-to-month options, no lock-in tricks. Freeze, upgrade or downgrade whenever life changes.',
  },
];

export interface PricingPlan {
  name: string;
  price: string; // [PLACEHOLDER]
  period: string;
  tagline: string;
  popular?: boolean;
  features: string[];
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    price: '₹2,499',
    period: '/ month',
    tagline: 'Everything you need to get started and stay consistent.',
    features: [
      'Full gym floor access',
      '2 group classes / week',
      'Locker & shower facilities',
      'Fitness assessment quarterly',
      'Mobile app workout tracking',
    ],
    cta: 'Join Basic',
  },
  {
    name: 'Premium',
    price: '₹4,999',
    period: '/ month',
    tagline: 'Our most popular plan — group energy plus personal coaching.',
    popular: true,
    features: [
      'Everything in Basic',
      'Unlimited group classes',
      '2 personal training sessions / month',
      'Customised training programme',
      'Nutrition starter guide',
      'Guest pass (1 / month)',
    ],
    cta: 'Join Premium',
  },
  {
    name: 'Elite',
    price: '₹8,999',
    period: '/ month',
    tagline: 'The complete FitCore experience with priority everything.',
    features: [
      'Everything in Premium',
      '8 personal training sessions / month',
      '1-on-1 nutrition coaching',
      'Priority class booking',
      'Recovery suite: sauna & ice bath',
      'Unlimited guest passes',
    ],
    cta: 'Join Elite',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'Can I try the club before joining?',
    answer:
      'Absolutely. Every prospective member gets one complimentary free-trial day including a guided tour, a trial class and a short consultation with a trainer. Book yours from the Contact page — no card required.',
  },
  {
    question: 'What is the cancellation policy?',
    answer:
      'All plans are month-to-month with no lock-in. You can cancel anytime before your next billing date from the member app or at the front desk. There are no cancellation fees — we would rather you come back than trap you.',
  },
  {
    question: 'Can I freeze my membership?',
    answer:
      'Yes. You can freeze your membership for up to 3 months per calendar year for travel, illness or anything life throws at you. Freezes are prorated and you keep any remaining days when you reactivate.',
  },
  {
    question: 'Do you offer guest passes?',
    answer:
      'Premium members receive one guest pass per month and Elite members get unlimited guest passes. Day passes are also available at the front desk for visitors who want to train with you.',
  },
  {
    question: 'Is there an age requirement?',
    answer:
      'Members must be 16 or older to train independently. Members aged 12–15 may join our supervised teen fitness programme with a parent or guardian. There is no upper age limit — we coach members well into their seventies.',
  },
  {
    question: 'What should I bring on my first day?',
    answer:
      'Comfortable workout clothes, a water bottle, indoor training shoes and a small towel. We provide lockers, showers, towels on Premium and Elite plans, and all the equipment you will need.',
  },
];

// Sample weekly class schedule for the Programs page
export interface ScheduleClass {
  time: string;
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
}

export const schedule: ScheduleClass[] = [
  { time: '6:30 AM', mon: 'Strength', tue: 'HIIT', wed: 'Yoga', thu: 'Strength', fri: 'Zumba', sat: 'CrossFit' },
  { time: '8:00 AM', mon: 'Yoga', tue: 'CrossFit', wed: 'Aerobics', thu: 'Yoga', fri: 'HIIT', sat: 'Yoga' },
  { time: '12:00 PM', mon: 'HIIT', tue: 'Zumba', wed: 'Personal', thu: 'Zumba', fri: 'Strength', sat: 'Aerobics' },
  { time: '6:00 PM', mon: 'CrossFit', tue: 'Strength', wed: 'Zumba', thu: 'CrossFit', fri: 'Yoga', sat: 'HIIT' },
  { time: '7:30 PM', mon: 'Zumba', tue: 'Yoga', wed: 'HIIT', thu: 'Aerobics', fri: 'CrossFit', sat: 'Strength' },
];

export const values = [
  {
    icon: 'HeartHandshake',
    title: 'Community',
    description:
      'We are stronger together. Every member, coach and class is part of one community that shows up for each other — inside the gym and out.',
  },
  {
    icon: 'Target',
    title: 'Discipline',
    description:
      'Motivation gets you started; discipline keeps you going. We help you build the habits that turn showing up into who you are.',
  },
  {
    icon: 'TrendingUp',
    title: 'Growth',
    description:
      'There is always a next level. We measure progress honestly and celebrate every PR, every new movement and every small win.',
  },
  {
    icon: 'Trophy',
    title: 'Results',
    description:
      'Effort earns outcomes. Our coaching, programming and nutrition are all engineered to deliver real, lasting, visible results.',
  },
] as const;
