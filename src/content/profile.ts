export type Link = {
  label: string;
  href: string;
};

export type Role = {
  title: string;
  company: string;
  period: string;
  summary: string;
  points: string[];
  stack: string[];
  /** Optional before/after comparison drawn as a small bar chart. */
  impact?: Impact;
};

export type Impact = {
  title: string;
  unit: string;
  before: { label: string; value: number };
  after: { label: string; value: number };
};

export type FlowStep = {
  label: string;
  tech: string;
};

export type Project = {
  name: string;
  kind: string;
  summary: string;
  points: string[];
  stack: string[];
  /** A left-to-right sketch of how a request moves through the system. */
  flow: FlowStep[];
  /** Where visitors can try it. The label says what they will land on. */
  live?: Link;
};

export type Figure = {
  context: string;
  value: string;
  label: string;
};

export const profile = {
  name: "Raj Nishad",
  fullName: "Raj Chandrashekhar Nishad",
  role: "Software Development Engineer II",
  location: "Mumbai, India",
  timeZone: "Asia/Kolkata",
  email: "rajnishad24082003@gmail.com",
  phone: "+91 81691 44969",
  resume: "https://drive.google.com/file/d/1xk7N5KDtXwK7z4L1ZUifi0u_QNpzhkCR/view?usp=sharing",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rajnishad24082003" },
    { label: "GitHub", href: "https://github.com/rajnishad24082003" },
    { label: "LeetCode", href: "https://leetcode.com/u/rajnishad24082003/" },
  ] satisfies Link[],
  /** Drives the availability notice. ISO date of the last day at the current job. */
  lastWorkingDay: "2026-12-01",
};

export const figures: Figure[] = [
  { context: "RAG · AWS Bedrock", value: "50 GB+", label: "of company documents indexed for retrieval, searched in under 400 ms" },
  { context: "Next.js · CRM", value: "25 → 4", label: "minutes to generate a quote after replacing the legacy CRM flow" },
  { context: "RabbitMQ", value: "1,000+", label: "daily users on a queue-backed pipeline with no peak-hour timeouts" },
  { context: "Competitive programming", value: "2004", label: "LeetCode contest rating (Knight), 950+ problems solved" },
];

export const experience: Role[] = [
  {
    title: "Software Development Engineer II",
    company: "Hummingbird Web Solutions",
    period: "Jul 2025 — Present",
    summary:
      "Building internal products end to end: AI-powered document search, the services and queues behind them, and the React / Next.js interfaces on top.",
    points: [
      "Built a custom Next.js application to replace legacy KBMax / Epicor CRM workflows, connecting previously separate systems behind one interface. Quote generation dropped from 25 minutes to 4.",
      "Built a document-querying system on AWS Bedrock and S3. The RAG pipeline indexes and processes 50 GB+ of company documents with sub-400 ms search latency.",
      "Designed a RabbitMQ-based queue for large AutoCAD submissions and concurrent PDF generation serving 1,000+ daily users, which ended server timeouts at peak traffic.",
      "Built and maintained internal GraphQL and REST APIs, hardened against injection and authentication exploits; they passed a production security audit with zero critical findings.",
    ],
    stack: ["Next.js", "React", "AWS Bedrock", "S3", "RabbitMQ", "GraphQL", "REST"],
    impact: {
      title: "Time to generate a quote",
      unit: "min",
      before: { label: "Legacy KBMax / Epicor flow", value: 25 },
      after: { label: "New Next.js application", value: 4 },
    },
  },
  {
    title: "Security Analyst Intern",
    company: "Accenture",
    period: "Feb 2025 — Jun 2025",
    summary: "Internship on application security for enterprise Java services.",
    points: [
      "Tested Spring Boot microservices serving 10,000+ users and worked with the team to fix the backend flaws found.",
      "Wrote Python automation around Burp Suite and Nmap that plugged into the development workflow and cut manual testing time by 40%.",
    ],
    stack: ["Spring Boot", "Python"],
  },
];

export const projects: Project[] = [
  {
    name: "EasyRenting",
    kind: "Property rental platform",
    summary:
      "A full-stack rental marketplace in the style of NoBroker, with geo-based search, radius filtering and a semantic search layer that turns plain-language queries into structured filters.",
    points: [
      "Real-time owner–tenant chat and visit scheduling over WebSocket.",
      "Role-based access for owners, tenants and admins, with an owner-verification workflow to reduce fraudulent listings.",
    ],
    stack: ["Next.js", "Spring Boot", "PostgreSQL", "WebSocket"],
    live: { label: "Visit live site", href: "https://140-238-162-30.sslip.io/" },
    flow: [
      { label: "Plain-language search", tech: "Next.js" },
      { label: "Query parser", tech: "LLM" },
      { label: "Structured filters", tech: "Spring Boot" },
      { label: "Radius search", tech: "PostgreSQL" },
      { label: "Listings & chat", tech: "WebSocket" },
    ],
  },
  {
    name: "VectorFlow",
    kind: "Semantic search API",
    summary:
      "A vector search backend using Hugging Face embeddings and Elasticsearch, keeping query latency under 100 ms across high-dimensional text datasets.",
    points: [
      "Stateful session caching so follow-up queries keep their context.",
      "Packaged and deployed as lightweight Docker containers.",
    ],
    stack: ["Python", "FastAPI", "Elasticsearch", "Hugging Face", "Docker"],
    live: { label: "Try the API docs", href: "https://130-210-20-24.sslip.io/docs" },
    flow: [
      { label: "Text query", tech: "FastAPI" },
      { label: "Embeddings", tech: "Hugging Face" },
      { label: "kNN search", tech: "Elasticsearch" },
      { label: "Session context", tech: "Cache" },
      { label: "Ranked results", tech: "< 100 ms" },
    ],
  },
  {
    name: "PeerMesh",
    kind: "Peer-to-peer media engine",
    summary:
      "A decentralized video and audio calling platform on WebRTC. Peers connect directly, with no central media server in the path.",
    points: [
      "Tuned browser data channels and buffer management.",
      "Around 30% lower client-side CPU usage than standard conferencing tools.",
    ],
    stack: ["WebRTC", "TypeScript", "Node.js", "React"],
    live: { label: "Open the app", href: "https://rbl-sem6-hms.web.app/login" },
    flow: [
      { label: "Peer A", tech: "Browser" },
      { label: "Signalling", tech: "Node.js · handshake only" },
      { label: "Direct channel", tech: "WebRTC" },
      { label: "Peer B", tech: "Browser" },
    ],
  },
];

export const ticker = [
  "Java",
  "Spring Boot",
  "React",
  "Next.js",
  "TypeScript",
  "RAG pipelines",
  "AWS Bedrock",
  "RabbitMQ",
  "Elasticsearch",
  "PostgreSQL",
  "Kafka",
  "Docker",
];

export const capabilities: { area: string; items: string[] }[] = [
  { area: "Languages", items: ["Java", "TypeScript", "Python", "JavaScript", "SQL", "C / C++"] },
  { area: "Java & backend", items: ["Spring Boot", "Node.js (Express)", "FastAPI", "GraphQL", "REST", "WebSocket"] },
  { area: "AI", items: ["RAG pipelines", "Vector indexing", "AWS Bedrock", "Hugging Face", "LLM guardrails"] },
  { area: "React & frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { area: "Data & messaging", items: ["PostgreSQL", "Redis", "Elasticsearch", "Apache Kafka", "RabbitMQ"] },
  { area: "Infrastructure", items: ["AWS", "Docker", "Git", "Linux"] },
];

export const recognition: { title: string; detail: string }[] = [
  { title: "LeetCode Knight", detail: "Contest rating 2004, with 950+ algorithmic problems solved." },
  { title: "Top 5th percentile", detail: "Consistently, across contests on LeetCode and CodeChef." },
  { title: "Smart India Hackathon", detail: "Top project at the institute level." },
];

export const education = {
  degree: "B.E., Computer Science & Engineering",
  school: "Thakur College of Engineering and Technology, Mumbai",
  period: "2021 — 2025",
  grade: "CGPA 8.96 / 10",
};
