export const profile = {
  name: 'Paras Kumar',
  role: 'Senior Software Engineer',
  email: 'kumarparas249@gmail.com',
  website: 'paraskumarsoni.com',
  location: 'Hyderabad, India',
  linkedin: 'https://www.linkedin.com/in/soniparas/',
  github: 'https://github.com/kumarParas7477',
  resume: '/Paras_Kumar_CV.pdf',
};

export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'projects', title: 'Projects' },
  { id: 'lineup', title: 'Experience' },
  { id: 'specs', title: 'Resume' },
  { id: 'contact', title: 'Contact' },
];

// "Highlights" bento: numbers pulled straight from the CV.
export const highlights = [
  { value: '7+', unit: 'years', label: 'across ServiceNow, JioHotstar, MakeMyTrip, Fewcents and IBM.', tone: 'dark' },
  { value: '20M+', unit: 'ad impressions / day', label: 'served by the Ads SDK I owned at JioHotstar.', tone: 'light' },
  { value: '50%', unit: 'faster QA + dev', label: 'from a shared component library at MakeMyTrip.', tone: 'light' },
  { value: '17%', unit: 'revenue share lift', label: 'from midroll ads on React CTV apps.', tone: 'gradient' },
] as const;

// The career, presented as a product lineup. Newest first.
export const lineup = [
  {
    id: 'ultra',
    model: 'Ultra',
    year: '2025',
    isNew: true,
    company: 'ServiceNow',
    title: 'Senior Software Engineer',
    date: 'May 2025 – Present',
    place: 'Hyderabad',
    chip: 'Lit.js Web Components',
    color: 'from-[#5e5ce6] to-[#bf5af2]',
    points: [
      'Moving platform features from React to Lit.js Web Components, keeping everything working and making it faster.',
      'Going through performance metrics every day and fixing whatever slows workspaces down.',
      'Improving sync and resource handling for large enterprise customers like DHL.',
      'Looking after the component library that every workspace shares.',
    ],
  },
  {
    id: 'promax',
    model: 'Pro Max',
    year: '2024',
    company: 'JioHotstar',
    title: 'Senior Software Engineer',
    date: 'Apr 2024 – May 2025',
    place: 'Bengaluru',
    chip: 'React Native + CTV',
    color: 'from-[#0a84ff] to-[#64d2ff]',
    points: [
      'Worked on mobile ads in React Native through IPL, at 20M+ ad impressions a day.',
      'Owned the JavaScript side of the Ads SDK on web, mobile web and TV.',
      'Added midroll ads to the TV apps, which raised revenue share by 17%.',
      'Added caching so display ads load faster on TV.',
    ],
  },
  {
    id: 'pro',
    model: 'Pro',
    year: '2022',
    company: 'MakeMyTrip',
    title: 'Software Engineer II',
    date: 'May 2022 – Apr 2024',
    place: 'Gurugram',
    chip: 'Shared design system',
    color: 'from-[#ff375f] to-[#ff9f0a]',
    points: [
      "Built one npm component library for every brand's React and React Native apps. QA and dev got 50% faster.",
      'Pulled shared business logic into its own library, which saved about 30% of dev time.',
      'Wrote a caching layer for API calls, keyed on booking ID.',
      'Built the Trips summary screen that groups bookings by date and place.',
      'Set up ESLint, Husky and automatic Sentry source-map uploads.',
    ],
  },
  {
    id: 'air',
    model: 'Air',
    year: '2021',
    company: 'Fewcents',
    title: 'Software Engineer',
    date: 'Sep 2021 – May 2022',
    place: 'Remote',
    chip: 'Stripe + Social login',
    color: 'from-[#30d158] to-[#66d4cf]',
    points: [
      'Added social logins, and successful logins went up 12%.',
      'Set up Stripe checkout with 6+ payment methods and 100+ currencies. Conversion doubled.',
      'Wrote the script that decides whether a reader sees a tip jar or a paywall. Engagement went up 40% and revenue 25%.',
    ],
  },
  {
    id: 'se',
    model: 'SE',
    year: '2019',
    company: 'IBM',
    title: 'Application Developer',
    date: 'Jul 2019 – Sep 2021',
    place: 'Bengaluru',
    chip: 'ActionScript → React',
    color: 'from-[#8e8e93] to-[#c7c7cc]',
    points: [
      'Rewrote an old ActionScript app in React, covering 160+ AT&T product catalogs.',
      "Made it load 20% faster by cutting code it didn't need.",
      'Split the UI into reusable React components.',
    ],
  },
];

// The resume, as a tech-specs sheet.
export const specs = [
  { label: 'Languages', value: 'TypeScript, JavaScript', detail: 'HTML, CSS' },
  { label: 'Frameworks', value: 'React, React Native, Lit', detail: 'Next.js, Web Components' },
  { label: 'Performance', value: 'Caching, bundle size, render profiling', detail: 'Daily semaphore metrics at ServiceNow' },
  { label: 'Testing', value: 'Jest, Playwright', detail: 'ESLint and Husky pre-commit checks' },
  { label: 'Back end', value: 'REST APIs, system design (LLD / HLD)', detail: 'Design patterns' },
  { label: 'Databases', value: 'MySQL, MongoDB', detail: 'Supabase (Postgres) on Grinlyy' },
  { label: 'Tooling', value: 'Git, CI/CD, Docker, Sentry', detail: 'Vercel' },
  { label: 'AI', value: 'Agentic AI, RAG, prompt engineering', detail: 'Use AI tools daily for development' },
];

export type Project = {
  name: string;
  kicker: string;
  description: string;
  stack: string[];
  live: string;
  source?: string;
  glyph: string;
};

export const featuredProject = {
  name: 'Grinlyy',
  kicker: 'Side project',
  tagline: 'Love, unwrapped one tap at a time.',
  description:
    "E-cards people actually play with. Pop a piñata or shake a snow globe, and your note shows up at the end. There are 60+ designs so far, with payments and email delivery built in.",
  stack: ['Next.js', 'React 19', 'TypeScript', 'Supabase', 'Razorpay', 'Resend', 'Vercel'],
  live: 'https://grinlyy.com',
  glyphs: ['🎁', '💐', '🎈', '🪅', '❄️', '🎂', '💌', '🧸'],
};

export const projects: Project[] = [
  {
    name: 'GiveHope',
    kicker: 'Donations',
    description: 'Start a fundraiser or give to one, and see how close each campaign is to its goal.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    live: 'https://donation-web-app-lilac.vercel.app/',
    source: 'https://github.com/kumarParas7477/donation-web-app',
    glyph: '💚',
  },
  {
    name: 'LILJADEPHOTOS',
    kicker: 'Photography',
    description: 'Website for a wedding and portrait photographer, with a gallery and a booking form.',
    stack: ['React', 'Responsive', 'Booking'],
    live: 'https://liljadephotos.vercel.app/',
    glyph: '📸',
  },
];

export const testimonials = [
  {
    quote:
      'Paras is one of the rare developers who always got instrumentation right without needing verbatim specs. In a 0-1 company where founders play product manager, there isn’t time to think about scalability as much as you should. But Paras always had our back.',
    name: 'Abhishek Dadoo',
    role: 'CEO, Fewcents',
  },
  {
    quote:
      'Paras was leading the development side of our projects at IBM and the way he managed them was amazing. As a fresher I had no idea how things worked, and he groomed me in the best way. Once he is onto something, he just gets it done.',
    name: 'Varun Singh Inda',
    role: 'Senior Software Engineer, Morgan Stanley',
  },
];
