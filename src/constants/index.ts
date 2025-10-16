// Navigation links
export const navLinks = [
  {
    id: "about",
    title: "about",
  },
  {
    id: "work",
    title: "experience",
  },
  {
    id: "contact",
    title: "contact",
  },
];

// Services
export const services = [
  {
    title: "Full-Stack Development",
    icon: "💻",
    description: "Building end-to-end web apps that actually slap. React, Node.js, TypeScript - the whole tech stack goes brrr."
  },
  {
    title: "System Architecture",
    icon: "🏗️",
    description: "Designing scalable systems that don't break when traffic spikes. Performance? Always optimized. Bugs? We don't know her."
  },
  {
    title: "Performance Optimization",
    icon: "⚡",
    description: "Making slow apps go zoom zoom. Load times? Cut in half. User experience? *Chef's kiss*"
  },
  {
    title: "Team Leadership",
    icon: "👥",
    description: "Leading dev teams, mentoring juniors, and making sure the vibe stays immaculate while shipping features."
  }
];

// Technologies
export const technologies = [
  { name: "HTML 5", icon: "🌐" },
  { name: "CSS 3", icon: "🎨" },
  { name: "JavaScript", icon: "📜" },
  { name: "TypeScript", icon: "🔷" },
  { name: "React JS", icon: "⚛️" },
  { name: "Redux Toolkit", icon: "🔄" },
  { name: "Tailwind CSS", icon: "🎯" },
  { name: "Node JS", icon: "🟢" },
  { name: "Express.js", icon: "🚀" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Git", icon: "📦" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
];

// Stats
export const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "10+", label: "Projects Shipped" },
  { value: "6+", label: "Team Members Led" },
  { value: "100%", label: "Client Satisfaction" }
];

// About content
export const aboutContent = {
  title: "about me",
  subtitle: "Building cool stuff on the internet since 2019. No cap, just clean code and good vibes.",
  mainHeading: "code that hits different ✨",
  description1: "Been in the game for 6+ years, working with companies like JioHotstar, MakeMyTrip, Fewcents, and IBM. I turn ideas into reality through clean, efficient code. Full-stack dev who actually enjoys both frontend and backend (we exist, fr fr).",
  description2: "My vibe? Writing code so clean it makes other devs emotional. Leading teams, mentoring juniors, and shipping features that actually matter. When I'm not coding, I'm probably thinking about coding or looking for bugs that don't exist yet.",
  servicesHeading: "what i do (aka superpowers)",
  technologiesHeading: "tech stack (my weapons of choice)",
  projectsHeading: "stuff i've built"
};

// Icons
export const icons = {
  bulletPoint: "→",
  liveDemo: "🚀",
  sourceCode: "📁"
};

// Work experiences
export const experiences = [
  {
    title: "Senior Software Engineer-Frontend",
    company_name: "JioHotstar",
    icon: "📺",
    iconBg: "#1a1a24",
    date: "April 2024 - May 2024",
    points: [
      "→ Built midroll ad integration for Connected TV platforms - making ads less annoying, one feature at a time",
      "→ Created caching mechanism for display ads that actually works (performance go zoom)",
      "→ Enhanced the H5-TV React app because someone has to make streaming better",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Makemytrip",
    icon: "✈️",
    iconBg: "#1a1a24",
    date: "May 2022 - April 2024",
    points: [
      "→ Built an integrated business library that cut dev time by 30% (efficiency szn)",
      "→ Automated source map uploads to Sentry because manual work is for NPCs",
      "→ Created a consolidated npm package that boosted QA/dev efficiency by 50% (big W)",
      "→ Implemented ESLint + Husky pre-commit hooks to keep code quality immaculate",
      "→ Developed caching middleware that actually caches stuff properly",
      "→ Migrated Webpack 3 → 5 with module federation, reduced bundle size by 20% (lightweight era)",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Fewcents",
    icon: "💰",
    iconBg: "#1a1a24",
    date: "September 2021 - May 2022",
    points: [
      "→ Added social login options that increased login rates by 12% (convenience is key)",
      "→ Integrated Stripe with 6+ payment methods in 100+ currencies (global domination vibes)",
      "→ Built a Common Script that increased user engagement by 40% and revenue by 25% (stonks 📈)",
    ],
  },
  {
    title: "Application Developer",
    company_name: "IBM India",
    icon: "🔵",
    iconBg: "#1a1a24",
    date: "July 2019 - September 2021",
    points: [
      "→ Migrated ActionScript to React for 160+ catalogs (RIP Flash, you won't be missed)",
      "→ Optimized app performance, achieved 20% faster load times (speed demon mode activated)",
    ],
  },
];

// Testimonials
export const testimonials = [
  {
    testimonial:
      "Paras is one of the rare developers who always got instrumentation right without needing verbatim specs. In a 0-1 company where founders play product manager role, they do not have time to setup tracking and thinking about scalability for the future as much as they should. But Paras always had our back.",
    name: "Abhishek Dadoo",
    designation: "CEO",
    company: "Fewcents",
    image: "👨‍💼",
  },
  {
    testimonial:
      "I got a chance to work with Paras in IBM. He was leading the development side of the projects and the way he managed those projects was amazing. Being a fresher I had no idea how things work and what goes where, at that time Paras groomed me in the best way. He is a focused guy with lots of talents whether it's frontend or backend. Once he is onto something he just gets it done. I owe him a lot for my career growth and emotional support throughout our working tenure in IBM.",
    name: "Varun Singh Inda",    
    designation: "Senior Software Engineer",
    company: "Morgan Stanley",
    image: "👨‍💻",
  },
];

// Projects
export const projects = [
  {
    name: "GiveHope - Donation App",
    description: "A sick donation platform where people can create campaigns and actually make a difference. Built with React, TypeScript, and good intentions. The UI? Absolutely fire. The experience? Smooth like butter.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: "💚",
    source_code_link: "https://github.com/kumarParas7477/donation-web-app",
    live_demo_link: "https://donation-web-app-lilac.vercel.app/",
    features: [
      "Campaign Creation: Easy-to-use form (actually intuitive, no cap)",
      "Campaign Discovery: Browse campaigns without getting lost", 
      "Donation System: Simple donation flow with suggested amounts",
      "Progress Tracking: Visual progress bars that look good",
      "Responsive Design: Works on all devices (yes, even your grandma's tablet)",
      "Positive UI: Uplifting design that doesn't assault your eyes"
    ]
  },
];
