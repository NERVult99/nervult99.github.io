
const SITE_NAME = "Nervult Nexus";
const CONTACT_EMAIL = "contact@nervult.org";

const NAV_ITEMS = [
  { label: 'Home', href: 'index.html' },
  { label: 'About Us', href: 'about.html' },
  { label: 'Projects', href: 'projects.html' },
  { label: 'Contact', href: 'contact.html' },
];

// Icon properties will store SVG string or a name for a lookup in script.js
const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com', iconName: 'github' },
  { name: 'Discord', url: 'https://discord.com', iconName: 'messageSquare' },
  { name: 'Instagram', url: 'https://instagram.com', iconName: 'instagram' },
  { name: 'Twitter', url: 'https://twitter.com', iconName: 'twitter' },
  { name: 'LinkedIn', url: 'https://linkedin.com', iconName: 'linkedin' },
];

const PROJECTS_DATA = [
  {
    id: 'project-alpha',
    title: 'Project Alpha',
    description: 'A groundbreaking initiative focused on leveraging AI for environmental sustainability. This project aims to develop predictive models for climate change.',
    category: 'AI & Research',
    imageUrl: 'https://picsum.photos/seed/alpha/600/400',
    dataAiHint: 'AI research',
    tags: ['AI', 'Machine Learning', 'Python', 'Data Science'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 'project-beta',
    title: 'Community Connect Platform',
    description: 'A web platform designed to foster collaboration and communication within local communities, featuring event management and resource sharing.',
    category: 'Web Development',
    imageUrl: 'https://picsum.photos/seed/beta/600/400',
    dataAiHint: 'community platform',
    tags: ['React', 'Node.js', 'MongoDB', 'UX/UI'],
    liveLink: '#',
  },
  {
    id: 'project-gamma',
    title: 'Open Source Toolkit Gamma',
    description: 'A suite of open-source tools for developers, aimed at simplifying common tasks in data processing and visualization.',
    category: 'Developer Tools',
    imageUrl: 'https://picsum.photos/seed/gamma/600/400',
    dataAiHint: 'developer tools',
    tags: ['Open Source', 'JavaScript', 'CLI', 'Data Viz'],
    repoLink: '#',
  },
  {
    id: 'project-delta',
    title: 'Mobile Health Companion',
    description: 'An innovative mobile application to help users track their fitness goals, manage health records, and connect with healthcare providers.',
    category: 'Mobile Development',
    imageUrl: 'https://picsum.photos/seed/delta/600/400',
    dataAiHint: 'mobile health',
    tags: ['iOS', 'Android', 'Swift', 'Kotlin', 'Healthcare'],
    liveLink: '#',
  },
];

// Data for About page values and team members
const CORE_VALUES = [
    { iconName: "lightbulb", title: "Innovation", description: "Continuously seeking creative solutions and embracing new ideas." },
    { iconName: "handshake", title: "Collaboration", description: "Working together with diverse minds to achieve common goals." },
    { iconName: "users", title: "Community", description: "Building an inclusive and supportive environment for all members." },
    { iconName: "target", title: "Impact", description: "Striving to make a meaningful and positive difference in the world." },
];

const TEAM_MEMBERS = [
    { name: "Alex Chen", role: "Lead Innovator", avatar: "https://picsum.photos/seed/alex/100/100", dataAiHint: "professional portrait" },
    { name: "Maria Rodriguez", role: "Community Manager", avatar: "https://picsum.photos/seed/maria/100/100", dataAiHint: "friendly person" },
    { name: "Sam Lee", role: "Tech Lead", avatar: "https://picsum.photos/seed/sam/100/100", dataAiHint: "developer profile" },
];

// Make data available if this script is included in HTML
// For a simple approach, they are global. Or wrap in an IIFE and expose.
window.APP_DATA = {
    SITE_NAME,
    CONTACT_EMAIL,
    NAV_ITEMS,
    SOCIAL_LINKS,
    PROJECTS_DATA,
    CORE_VALUES,
    TEAM_MEMBERS
};
