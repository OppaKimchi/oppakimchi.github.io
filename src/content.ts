// All site text lives here. The site is public, so never add an email address,
// phone number, clearance numbers or other identifiers.

export type Project = {
  title: string;
  context: string;
  summary: string;
  points: string[];
  tools: string[];
  link?: { label: string; href: string };
};

export const profile = {
  name: "Vitou Seng",
  eyebrow: "Cybersecurity student, graduating 2027",
  intro:
    "Former business owner who builds, secures and explains technology.",
  seeking: "Looking for an entry-level IT Support or Cybersecurity Analyst role.",
  linkedin: "https://www.linkedin.com/in/vitouseng",
  github: "https://github.com/OppaKimchi",
};

export const highlights = [
  { title: "Bachelor of Cybersecurity", detail: "Macquarie University, expected 2027" },
  { title: "Australian Cyber Security Games", detail: "CTF competitor, 2025" },
  { title: "Four years as a business owner", detail: "Café Bacetti, 2018 to 2022" },
  { title: "Bachelor of Business", detail: "University of Technology Sydney, 2014" },
];

export const projects: Project[] = [
  {
    title: "Privacy-preserving record linkage",
    context: "University team project, 2026",
    summary:
      "Evaluated how privacy-preserving record linkage models, including machine learning approaches, trade privacy against usefulness and computational efficiency.",
    points: [
      "Added K-Nearest Neighbours, Support Vector Machine, Random Forest and AdaBoost classifiers to the existing linkage pipeline as reusable training and prediction methods.",
      "Produced the AdaBoost and SVM outcomes and added bar chart outputs for comparing results.",
    ],
    tools: ["Python", "Machine learning", "Bloom filters", "Differential privacy"],
    link: {
      label: "View the code",
      href: "https://github.com/OppaKimchi/PACE3850-GROUP53",
    },
  },
  {
    title: "Home network and server lab",
    context: "Self-guided project",
    summary:
      "Built and run at home to practise the infrastructure skills that IT support and security work depend on.",
    points: [
      "Configured and secured a home router, managing network traffic and troubleshooting connectivity issues.",
      "Deployed and managed a dedicated home server for reliable data storage and internal network resources.",
      "Repartitioned hard disks, then installed and configured both Windows and Linux.",
    ],
    tools: ["Router configuration", "TCP/IP", "Linux", "Windows", "Disk partitioning"],
  },
  {
    title: "Australian Cyber Security Games",
    context: "Capture the flag competitor, 2025",
    summary:
      "Worked through offensive security, network analysis and forensics challenges under competition conditions.",
    points: [
      "Used Kali Linux and the command line for challenges including SQL injection and OSINT gathering.",
      "Analysed network traffic with Wireshark and used Nmap for reconnaissance and vulnerability identification.",
      "Applied digital forensic techniques in Autopsy to analyse artifacts and extract hidden flags.",
    ],
    tools: ["Kali Linux", "Wireshark", "Nmap", "Autopsy", "SQL injection", "OSINT"],
  },
];

export const skills = [
  {
    group: "Security and forensics",
    items: [
      "Wireshark",
      "Nmap",
      "Autopsy",
      "OSINT",
      "Web application security testing in CTF environments",
    ],
  },
  {
    group: "Infrastructure and networking",
    items: [
      "Cloudflare (DNS and CDN)",
      "Home server administration",
      "Router configuration",
      "TCP/IP",
      "System provisioning",
    ],
  },
  {
    group: "Operating systems",
    items: ["Windows", "Linux (Kali)", "Command line"],
  },
  {
    group: "Full-stack web",
    items: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    group: "Programming and data",
    items: ["Python", "SQL (MySQL)", "R and Tidyverse", "LaTeX"],
  },
];

export const experience = [
  { period: "2023 to 2025", role: "Manager", organisation: "Café Bacetti" },
  { period: "2018 to 2022", role: "Owner", organisation: "Café Bacetti" },
  {
    period: "2016 to 2018",
    role: "Marketing and Communications Officer",
    organisation: "Brien Holden Vision Institute",
  },
];

export const about = [
  "Before moving into cybersecurity, I owned and later managed Café Bacetti. I bring that operational background to security, thinking about business continuity and data protection together.",
  "I'm comfortable explaining technical issues to people who aren't technical. Outside my degree, I take part in capture the flag competitions and run a home lab.",
];
