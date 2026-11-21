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
  { value: '50%', unit: 'faster QA + dev', label: 'from shared libraries every brand at MakeMyTrip builds on.', tone: 'light' },
  { value: '17%', unit: 'revenue share lift', label: 'after adding midroll ads to JioHotstar’s TV apps.', tone: 'gradient' },
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
    chip: 'Platform architecture, performance',
    color: 'from-[#5e5ce6] to-[#bf5af2]',
    points: [
      'Re-architecting core platform features into framework-agnostic components any team can reuse, with no loss of features and better performance.',
      'Tracking performance metrics daily and fixing the bottlenecks that slow customer workspaces down.',
      'Improving data sync and resource management for large enterprise customers like DHL.',
      'Owning a shared library that every workspace depends on.',
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
    chip: 'Ads SDK, high-traffic systems',
    color: 'from-[#0a84ff] to-[#64d2ff]',
    points: [
      'Built ad features that held up through IPL traffic, at 20M+ ad impressions a day.',
      'Owned the cross-platform Ads SDK module that runs the full ad lifecycle on web, mobile web and TV.',
      'Designed the midroll ad integration for TV, which raised revenue share by 17%.',
      'Added a caching layer so display ads render faster on TV.',
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
    chip: 'Shared libraries, caching',
    color: 'from-[#ff375f] to-[#ff9f0a]',
    points: [
      "Built one shared library used across every brand's web and mobile apps. QA and dev got 50% faster.",
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
    chip: 'Payments, auth, growth',
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
    chip: 'Legacy migration',
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
  { label: 'System design', value: 'LLD, HLD, design patterns', detail: 'SDKs, shared libraries and platform architecture' },
  { label: 'Performance', value: 'Caching, profiling, load time', detail: 'Daily performance metrics at ServiceNow' },
  { label: 'Back end', value: 'REST APIs, Next.js server routes', detail: 'Payments (Stripe, Razorpay), email, auth' },
  { label: 'Databases', value: 'MySQL, MongoDB, Postgres', detail: 'Supabase on Grinlyy' },
  { label: 'Languages', value: 'TypeScript, JavaScript', detail: 'HTML, CSS' },
  { label: 'Platforms', value: 'Web, mobile, TV', detail: 'React, React Native, Web Components' },
  { label: 'Quality', value: 'Jest, Playwright', detail: 'Code review, pre-commit checks, Sentry monitoring' },
  { label: 'Delivery', value: 'CI/CD, Docker, Git', detail: 'Vercel, Agile' },
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
  stack: ['Postgres (Supabase)', 'Payments (Razorpay)', 'Email (Resend)', 'Next.js API routes', 'TypeScript', 'Vercel'],
  live: 'https://grinlyy.com',
  glyphs: ['🎁', '💐', '🎈', '🪅', '❄️', '🎂', '💌', '🧸'],
};

// Larger cards with screenshots, shown above the smaller projects.
export type Showcase = {
  name: string;
  kicker: string;
  status?: string;
  description: string;
  stack: string[];
  live?: string;
  liveLabel?: string;
  image?: { src: string; alt: string };
  phones?: { src: string; alt: string }[];
};

export const showcase: Showcase[] = [
  {
    name: 'RentMaps',
    kicker: 'Live',
    description:
      'Real rents on a map, posted anonymously by renters and owners. No brokers, no sign-up. Running in cities across India, the US, the UK, Germany, the UAE and Singapore.',
    stack: ['Next.js', 'MapLibre GL', 'Turso (SQLite)', 'Telegram + email alerts'],
    live: 'https://rentmaps.xyz/',
    image: { src: '/projects/rentmaps.webp', alt: 'RentMaps showing a dark 3D map of Bengaluru with rent filters' },
  },
  {
    name: 'Expense Tracker',
    kicker: 'In progress',
    status: 'I use it every day',
    description:
      'On Android it reads bank and UPI SMS on the device, pulls out the amount and merchant, and asks you to confirm with one tap. Then it shows where the money went, month by month. Also installs as a web app.',
    stack: ['React Native (Expo)', 'Native SMS module', 'FastAPI', 'Postgres'],
    live: 'https://expense-tracker-web-henna-omega.vercel.app',
    liveLabel: 'Try the web app',
    phones: [
      { src: '/projects/expense-home.webp', alt: 'Expense Tracker home screen with monthly spend and category ring' },
      { src: '/projects/expense-analysis.webp', alt: 'Expense Tracker analysis screen with spending trend' },
    ],
  },
];

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
