// Shob content ekhane edit koro. Component-e hat dite hobe na.
export const site = {
  name: "Fahmida Akter Shimu",
  short: "FS",
  watermark: "Fahmida",
  role: "Junior Web Developer",
  roles: ["Junior Web Developer", "Junior Frontend Developer", "React Developer", "Next.js Developer"],
  intro: "I build responsive web apps with React, Next.js and Tailwind CSS, and connect them to Node.js and MongoDB backends.",
  status: "Available for new projects",
  about: [
    "CSE graduate and Frontend Developer proficient in React, Next.js (App Router), and Tailwind CSS. Experienced in building responsive web applications, integrating RESTful APIs with Node.js/MongoDB backends, and implementing role-based authentication (Better Auth, JWT) and interactive user dashboards.",
  ],
  location: "Dhaka, Bangladesh",
  phone: "+8801635315972",
  email: "fahmidaaktershimu@gmail.com",
  github: "https://github.com/FahmidaAkterShimu",
  linkedin: "https://linkedin.com/in/fahmida-akter-shimu",
  resume: "/resume.pdf",
  languages: ["Bengali: Native", "English: Conversational / Intermediate"],
  stats: [
    { value: "9+", label: "Months learning" },
    { value: "10+", label: "Projects built" },
    { value: "150+", label: "Problem Solved" },
  ],
};

export const services = [
  { title: "Next.js and React apps", text: "Responsive web applications built with React, the Next.js App Router and Tailwind CSS." },
  { title: "REST API integration", text: "Connecting frontends to Node.js, Express and MongoDB backends through RESTful APIs." },
  { title: "Authentication and access control", text: "Role-based access with Better Auth, Google OAuth and JWT sessions." },
  { title: "Interactive dashboards", text: "User dashboards with dynamic data, analytics views and pagination." },
];

export const stack = [
  { group: "Frontend", items: ["React.js", "Next.js (App Router)", "HTML5", "CSS3", "Tailwind CSS"] },
  { group: "Languages", items: ["JavaScript (ES6+)", "C", "C++", "Python"] },
  { group: "Backend and Database", items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "SQL"] },
  { group: "Auth and Tools", items: ["Better Auth", "JWT/JWKS", "Git", "GitHub", "Vercel", "Vite", "MongoDB Atlas"] },
  { group: "UI and Libraries", items: ["HeroUI", "DaisyUI", "Lucide React", "React Toastify", "Next/Image", "Swiper", "next-themes"] },
];


export const techCards = [
  { title: "Programming Languages", icon: "JavaScript", tone: "yellow", points: ["JavaScript (ES6+)", "C, C++ and, Python"] },
  { title: "React and Next.js", icon: "React", tone: "cyan", points: ["React.js components", "Next.js App Router"] },
  { title: "Tailwind CSS and UI", icon: "Tailwind CSS", tone: "blue", points: ["HTML5, CSS3, Tailwind CSS", "HeroUI, DaisyUI and Swiper"] },
  { title: "Node.js and Express", icon: "Node.js", tone: "green", points: ["REST APIs", "Express.js backends"] },
  { title: "MongoDB and SQL", icon: "MongoDB", tone: "orange", points: ["MongoDB and MongoDB Atlas", "NoSQL"] },
  { title: "Auth and Tools", icon: "Git", tone: "violet", points: ["Better Auth, JWT/JWKS", "Git, GitHub, Vercel and Vite"] },
];


export const projects = [
  {
    title: "BookHaven",
    subtitle: "Online Book Borrowing Platform",
    image: "/projects/bookhaven.png",
    stack: ["Next.js", "React", "Tailwind CSS", "HeroUI", "Better Auth", "MongoDB"],
    features: [
      "Developed a dynamic library platform for users to search, filter, and borrow books across categories.",
      "Implemented secure user authentication with Email/Password and Google OAuth using Better Auth.",
      "Built light/dark theme toggles, dynamic carousel sliders (Swiper), and personalized user profiles.",
    ],
    live: "https://book-haven-project.vercel.app/",
    client: "https://github.com/FahmidaAkterShimu/BookHaven",
  },
  {
    title: "DocAppoint",
    subtitle: "Doctor Appointment Booking Platform",
    image: "/projects/docappoint.png",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
    features: [
      "Architected a healthcare platform for doctor discovery, real-time time-slot checking, and appointment bookings.",
      "Secured client-side routes and backend REST endpoints using JWT/JWKS session-based authorization schemes.",
      "Built patient and doctor management dashboards to track booking histories and status updates in real time.",
    ],
    live: "https://doc-appoint-client-chi.vercel.app",
    client: "https://github.com/FahmidaAkterShimu/doc_appoint-client",
    server: "https://github.com/FahmidaAkterShimu/doc_appoint-server",
  },
  {
    title: "VitaForge",
    subtitle: "Fitness and Gym Management Platform",
    image: "/projects/vitaforge.png",
    stack: ["Next.js (App Router)", "React", "Tailwind CSS", "Better Auth", "REST API", "MongoDB"],
    features: [
      "Engineered a full-stack platform featuring Role-Based Access Control (RBAC) for admins, trainers, and users.",
      "Integrated secure session and OAuth authentication workflows using Better Auth alongside JWT tokens.",
      "Designed interactive user dashboards displaying dynamic workout schedules, real-time analytics, and data pagination.",
    ],
    live: "https://vitaforge-client.vercel.app",
    client: "https://github.com/FahmidaAkterShimu/vitaforge-client",
    server: "https://github.com/FahmidaAkterShimu/vitaforge-server",
  },
];

export const education = [
  { degree: "B.Sc. in Computer Science and Engineering", school: "Shyamoli Engineering College (A Constituent College of the University of Dhaka)", years: "2020-2025", result: "CGPA: 3.53" },
];

export const journey = [
  {
    years: "Jan 2026 - Present",
    title: "Full Stack Developer",
    department: "HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, Git & GitHub",
    institute: "Programmimg Hero",
    location: "Online Learning",
    text: "Building responsive web apps with React, Next.js and Tailwind CSS, and integrating REST APIs with Node.js and MongoDB backends."
  },
  {
    years: "2020 - 2025",
    title: "B.Sc. (Bachelor of Science)",
    department: "Computer Science and Engineering",
    institute: "Shyamoli Engineering College (A Constituent College of the University of Dhaka)",
    location: "Dhaka, Bangladesh",
    text: "CGPA: 3.53"
  },
  {
    years: "2017 - 2018",
    title: "HSC (Higher Secondary Certificate)",
    department: "Science",
    institute: "Government Bangla College",
    location: "Dhaka, Bangladesh",
    text: "GPA: 4.00"
  },
  {
    years: "2015 - 2016",
    title: "SSC (Secondary School Certificate)",
    department: "Science",
    institute: "Mirpur Bangla School & College",
    location: "Dhaka, Bangladesh",
    text: "GPA: 5.00"
  },
];

export const faqs = [
  { q: "Which technologies do you use?", a: "Mainly React, Next.js and Tailwind CSS on the frontend, with Node.js, Express and MongoDB for backends." },
  { q: "Are you open to new work?", a: "Yes. Send me a short description of your project through the contact page and I will reply soon." },
  { q: "Can I see your code?", a: "Every project has its live demo and GitHub repositories linked in the projects section." },
];

export const leads = {
  services: "From the first component to the deployed app, I build the frontend and connect it to the backend so your product works well on every device.",
  stack: "The tools I use to design, build and ship full-stack apps.",
  problems: "Problems I have solved, with links to the platform and to my own solution code.",
};

export const problemSolving = {
  platforms: [
    { name: "beecrowd", icon: "beecrowd", handle: "Fahmida19", language: "C++ & SQL", stat: "130+", url: "https://judge.beecrowd.com/en/profile/731081" },
    { name: "GitHub", icon: "GitHub", handle: "FahmidaAkterShimu", language: "Python", stat: "30+", url: "https://github.com/FahmidaAkterShimu/Python" },
    { name: "GitHub", icon: "GitHub", handle: "FahmidaAkterShimu", language: "JavaScript", stat: "50+", url: "https://github.com/FahmidaAkterShimu/Problem-Solving" },
  ],

  featured: [
    {
      title: "Remove a Given Word from a List",
      language: "Python",
      topic: "Strings & Lists",
      difficulty: "Easy",
      url: "https://github.com/FahmidaAkterShimu/Python/blob/main/Level%208/Problem7.py",
    },
    {
      title: "Valid Parentheses",
      language: "JavaScript",
      topic: "Strings & Stack",
      difficulty: "Medium",
      url: "https://github.com/FahmidaAkterShimu/Problem-Solving/blob/main/Day%209%20-%20Algorithms%20%26%20Problem%20Solving%20I/44_ValidParentheses.js",
    },

    {
      title: "Implement Promise.all from Scratch",
      language: "JavaScript",
      topic: "Promises & Async JavaScript",
      difficulty: "Hard",
      url: "https://github.com/FahmidaAkterShimu/Problem-Solving/blob/main/Day%208%20-%20Error%20Handling%20%26%20Advanced%20Patterns/38_Promise.all.js",
    },
  ],
};
