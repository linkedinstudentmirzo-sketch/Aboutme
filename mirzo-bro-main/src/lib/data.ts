import {
  Home,
  User,
  Layers,
  Briefcase,
  Microscope,
  Trophy,
  Mail,
  BrainCircuit,
  ScanFace,
  BarChart3,
  FlaskConical,
  Rocket,
  HeartHandshake,
  MapPin,
  GraduationCap,
  Languages,
  Globe,
  Atom,
  Sigma,
  Medal,
  Code,
  BadgeCheck,
  BookOpen,
  Database,
  LineChart,
  Repeat,
  Phone,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */
export interface NavItem {
  name: string;
  id: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", id: "home", icon: Home },
  { name: "About", id: "about", icon: User },
  { name: "What I Do", id: "services", icon: Layers },
  { name: "Projects", id: "portfolio", icon: Briefcase },
  { name: "Research", id: "research", icon: Microscope },
  { name: "Honors", id: "honors", icon: Trophy },
  { name: "Contact", id: "contact", icon: Mail },
];

/* ------------------------------------------------------------------ */
/*  Identity                                                           */
/* ------------------------------------------------------------------ */
export const IDENTITY = {
  firstName: "Muhammadmirzo",
  lastName: "Ismoilov",
  role: "AI Developer & Researcher",
  roles: [
    "AI Developer",
    "ML Researcher",
    "Incoming UofT CS Student",
    "Problem Solver",
  ],
  tagline:
    "I turn AI into solutions for real problems — air-quality forecasting, crop disease detection, interview security. Incoming Computer Science student at the University of Toronto Mississauga, building for Uzbekistan and beyond.",
  email: "linkedinstudentmirzo-sketch@gmail.com",
  phone: "+998 93 776 28 27",
  phoneHref: "tel:+998937762827",
  location: "Namangan, Uzbekistan",
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/linkedinstudentmirzo-sketch",
      key: "github" as const,
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/muxammadmirzo-i-4237a9376/",
      key: "linkedin" as const,
    },
    { label: "Telegram", url: "https://t.me/Common_014", key: "telegram" as const },
  ],
};

/* ------------------------------------------------------------------ */
/*  Hero stats                                                         */
/* ------------------------------------------------------------------ */
export const HERO_STATS = [
  { value: 5, suffix: "+", label: "AI Projects Built" },
  { value: 2, suffix: "", label: "Published Papers" },
  { value: 10, suffix: "+", label: "Honors & Awards" },
];

/* ------------------------------------------------------------------ */
/*  About                                                              */
/* ------------------------------------------------------------------ */
export interface InfoItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const INFO_ITEMS: InfoItem[] = [
  { icon: GraduationCap, label: "Education", value: "UTM — Computer Science" },
  { icon: MapPin, label: "Location", value: "Namangan, Uzbekistan" },
  { icon: Languages, label: "IELTS", value: "8.0" },
  { icon: FlaskConical, label: "Research", value: "2 Papers Published" },
];

export const SKILLS = [
  { name: "Python", level: 95 },
  { name: "Machine Learning", level: 88 },
  { name: "PyTorch", level: 85 },
  { name: "Data Science", level: 85 },
  { name: "Computer Vision", level: 80 },
  { name: "Java", level: 75 },
  { name: "C++", level: 72 },
  { name: "HTML / JavaScript", level: 70 },
];

export const TECH_STACK = [
  "Python",
  "PyTorch",
  "NumPy",
  "Pandas",
  "scikit-learn",
  "OpenCV",
  "Matplotlib",
  "LSTM",
  "Random Forest",
  "Jupyter",
  "CUDA",
  "Git",
  "SQL",
  "Java",
  "C++",
  "HTML/CSS",
  "JavaScript",
  "Linux",
];

/* ------------------------------------------------------------------ */
/*  What I Do                                                          */
/* ------------------------------------------------------------------ */
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  color: string;
  glow: string;
}

export const SERVICES: Service[] = [
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    description:
      "Designing and training ML models — from LSTM networks for time-series forecasting to Random Forests for environmental prediction.",
    tags: ["PyTorch", "scikit-learn", "LSTM", "Random Forest"],
    color: "from-blue-500 to-cyan-500",
    glow: "group-hover:shadow-blue-500/25",
  },
  {
    icon: ScanFace,
    title: "Computer Vision",
    description:
      "Building image classification and detection systems — crop disease diagnosis, deepfake detection, and identity verification.",
    tags: ["CNN", "OpenCV", "Fine-tuning", "Detection"],
    color: "from-purple-500 to-pink-500",
    glow: "group-hover:shadow-purple-500/25",
  },
  {
    icon: BarChart3,
    title: "Data Science & Visualization",
    description:
      "Turning raw data into insight — AQI dashboards, satellite data pipelines, statistical analysis, and clear visual storytelling.",
    tags: ["NumPy", "Pandas", "Matplotlib", "Satellite Data"],
    color: "from-emerald-500 to-teal-500",
    glow: "group-hover:shadow-emerald-500/25",
  },
  {
    icon: FlaskConical,
    title: "AI Research",
    description:
      "Published researcher in environmental prediction and healthcare AI — literature review, methodology, and reproducible experiments.",
    tags: ["2 Publications", "Methodology", "Reproducibility", "Analysis"],
    color: "from-orange-500 to-amber-500",
    glow: "group-hover:shadow-orange-500/25",
  },
  {
    icon: Rocket,
    title: "Product Development",
    description:
      "Co-founding and shipping real products — from concept to launch, like SATJade, my SAT preparation platform.",
    tags: ["Co-Founder", "EdTech", "MVP", "UX"],
    color: "from-pink-500 to-rose-500",
    glow: "group-hover:shadow-pink-500/25",
  },
  {
    icon: HeartHandshake,
    title: "AI for Social Impact",
    description:
      "Applying AI where it matters most — agriculture, safety, and education challenges in Uzbekistan and beyond.",
    tags: ["AgriTech", "Safety Systems", "Education", "Uzbekistan"],
    color: "from-indigo-500 to-violet-500",
    glow: "group-hover:shadow-indigo-500/25",
  },
];

/* ------------------------------------------------------------------ */
/*  Research                                                           */
/* ------------------------------------------------------------------ */
export const RESEARCH_INTERESTS = [
  "Computer Science",
  "Artificial Intelligence",
  "Data Science",
  "Environmental Science",
];

export interface Publication {
  title: string;
  venue: string;
  description: string;
  tags: string[];
  color: string;
}

export const PUBLICATIONS: Publication[] = [
  {
    title: "Machine Learning for Environmental Prediction",
    venue: "Published Research Paper",
    description:
      "Predictive modeling of environmental indicators using LSTM and Random Forest models trained on weather, air-quality, and satellite data.",
    tags: ["Environmental AI", "LSTM", "Random Forest", "Forecasting"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "AI in Healthcare: Predictive Modeling on Medical Data",
    venue: "Published Research Paper",
    description:
      "An applied machine-learning pipeline for healthcare prediction — data cleaning, feature analysis, model training, and rigorous evaluation.",
    tags: ["Medical AI", "Predictive Modeling", "Data Analysis"],
    color: "from-blue-500 to-violet-500",
  },
];

export interface ResearchSkill {
  icon: LucideIcon;
  label: string;
}

export const RESEARCH_SKILLS: ResearchSkill[] = [
  { icon: BookOpen, label: "Literature Review" },
  { icon: Database, label: "Data Cleaning" },
  { icon: BarChart3, label: "Statistical Analysis" },
  { icon: LineChart, label: "Visualization" },
  { icon: Repeat, label: "Experiment Reproduction" },
];

/* ------------------------------------------------------------------ */
/*  Honors & Awards                                                    */
/* ------------------------------------------------------------------ */
export interface Award {
  icon: LucideIcon;
  title: string;
  detail: string;
  color: string;
}

export const AWARDS: Award[] = [
  {
    icon: GraduationCap,
    title: "Golden Medal Graduate",
    detail: "High school — graduated with highest honors",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: Trophy,
    title: "TKS Program Winner",
    detail: "The Knowledge Society — innovation program",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: FlaskConical,
    title: "NY Academy of Sciences",
    detail: "Accepted member",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Globe,
    title: "Duke Kunshan Summer Programme",
    detail: "Accepted participant",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Atom,
    title: "Quantum Mechanics Finalist",
    detail: "International competition",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: Sigma,
    title: "Math Olympiad — 2nd Place",
    detail: "National level",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Languages,
    title: "English Olympiad — 3rd Place",
    detail: "National level",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Medal,
    title: "Wushu — 2nd Place",
    detail: "National championship",
    color: "from-rose-500 to-red-500",
  },
  {
    icon: Code,
    title: "2× Hackathon Winner",
    detail: "First-place finishes",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: BadgeCheck,
    title: "Government Recognition",
    detail: "Awarded by the Hokimiyat",
    color: "from-teal-500 to-emerald-500",
  },
];

export const LEADERSHIP = [
  "Class Captain",
  "English Instructor",
  "Volunteer Leader",
  "Youth & Community Volunteering",
  "Multiple Coursera Certifications",
];

/* ------------------------------------------------------------------ */
/*  Contact                                                            */
/* ------------------------------------------------------------------ */
export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  value: string;
  link: string;
  color: string;
}

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Mail,
    title: "Email",
    value: IDENTITY.email,
    link: `mailto:${IDENTITY.email}`,
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Phone",
    value: IDENTITY.phone,
    link: IDENTITY.phoneHref,
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: MapPin,
    title: "Location",
    value: IDENTITY.location,
    link: "#contact",
    color: "from-purple-500 to-pink-500",
  },
];

/* ------------------------------------------------------------------ */
/*  Portfolio filters                                                  */
/* ------------------------------------------------------------------ */
export type ProjectCategory = "all" | "ml" | "data" | "product";

export const PROJECT_FILTERS: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "AI & ML", value: "ml" },
  { label: "Data Science", value: "data" },
  { label: "Product", value: "product" },
];

export const CATEGORY_LABELS: Record<string, string> = {
  ml: "AI & ML",
  data: "Data Science",
  product: "Product",
};
