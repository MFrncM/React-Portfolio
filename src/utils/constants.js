// ============================================
// constants.js — All site data lives here.
// Edit this file to update content across
// the entire portfolio without touching components.
// ============================================

export const SITE = {
  name: 'Marco Montecillo',
  title: 'Full Stack Developer',
  email: 'mfmm1213@gmail.com',
  phone: '+63 968 631 6837',
  location: 'Malolos City, Bulacan',
  cvPath: '/files/CV - Montecillo (January, 2026).pdf',
  cvFilename: 'CV - Montecillo (January, 2026).pdf',

  // Leave blank — fill in manually
  linkedin: 'https://www.linkedin.com/in/marco-montecillo-b9352b265/',
  github: 'https://github.com/MFrncM',
  twitter: '',

  // The date you started coding professionally — drives the dynamic stat
  careerStartDate: new Date('2024-07-01'),
}

export const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export const SKILLS = {
  Frontend: [
    { icon: 'fab fa-html5',      label: 'HTML5' },
    { icon: 'fab fa-css3-alt',   label: 'CSS3' },
    { icon: 'fab fa-js-square',  label: 'JavaScript' },
    { icon: 'fab fa-bootstrap',  label: 'Bootstrap' },
  ],
  Backend: [
    { icon: 'fab fa-php',        label: 'PHP' },
    { icon: 'fas fa-database',   label: 'MySQL' },
    { icon: 'fas fa-server',     label: 'REST APIs' },
    { icon: 'fab fa-node-js',    label: 'Node.js' },
  ],
  'Tools & Others': [
    { icon: 'fab fa-git-alt',    label: 'Git' },
    { icon: 'fab fa-github',     label: 'GitHub' },
    { icon: 'fas fa-code',       label: 'VS Code' },
    { icon: 'fas fa-paint-brush',label: 'UI/UX Design' },
  ],
}

export const PROJECTS = [
  {
    id: 1,
    title: 'MM Archive',
    description:
      'An archive web application that enables users to seamlessly request and retrieve records by entering the required details. The admin side receives requests with options to update and track record status, plus real-time activity monitoring for efficient record management.',
    image: '/img/mm_arch.png',
    liveUrl: 'https://ceumnlregistrar.com/arch/login.php',
    githubUrl: '', // fill in if public
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    status: 'live', // 'live' | 'coming-soon'
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description:
      'This portfolio — a responsive single-page site showcasing projects, skills, and experience. Built with React and Vite, featuring dark mode, scroll animations, and a PHP-powered contact mailer.',
    image: '/img/portfolio.png',
    liveUrl: '',
    githubUrl: '',
    tech: ['React', 'Vite', 'CSS Modules', 'PHP'],
    status: 'live',
  },
  {
    id: 3,
    title: 'Centro Escolar University Admission Website',
    description:
      'The CEU Online Admissions Portal is a web-based system that streamlines the student application process across all campuses. It allows applicants to submit requirements and track their status, while enabling administrators to manage data, evaluations, and admission workflows efficiently.',
    image: '/img/admission.png',
    liveUrl: 'https://registrar.ceu.edu.ph/ceuadmissions/',
    githubUrl: '',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    status: 'live',
  },
  // {
  //   id: 4,
  //   title: 'Task Management App',
  //   description:
  //     'A collaborative task management application with real-time updates, user roles, and project tracking. Currently in planning and development.',
  //   image: null,
  //   liveUrl: '',
  //   githubUrl: '',
  //   tech: ['React', 'Node.js', 'MySQL'],
  //   status: 'coming-soon',
  // },
]

export const EXPERIENCE = [
  {
    id: 1,
    role: "Student's Record Assistant — IT Section",
    company: 'Centro Escolar University — Manila',
    duration: 'August 2025 — Present',
    bullets: [
      'Sole developer and admin of all department web systems including the Online Document Request Portal, Admission Portal, Exit Clearance Portal, and Verification Portal',
      'Completely restructured the algorithm and flow of the Admission System during a full office-requested overhaul',
      'Resolved long-standing bugs inherited from previous development cycles',
      'Handle all bug reports, feature change requests, and IT support for the Registrar office',
    ],
  },
  {
    id: 2,
    role: "Student's Record Assistant — Admissions",
    company: 'Centro Escolar University — Manila',
    duration: 'March 2025 — July 2025',
    bullets: [
      'Assisted incoming freshmen and transfer students through the university admission process',
      'Managed and processed admissions records for both freshmen and transferee applicants',
      'Coordinated with cross-functional teams to ensure smooth enrollment operations',
    ],
  },
]
