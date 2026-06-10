/**
 * Navigation menu items data.
 * Each item has a label, route path, hover marquee text,
 * and gradient colors for the marquee images (replacing the original JPGs).
 */
const navItems = [
  {
    label: "Home",
    path: "/",
    marqueeText: "Welcome!",
    gradients: [
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    ],
  },
  {
    label: "About us",
    path: "/about",
    marqueeText: "Get to Know Us",
    gradients: [
      "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    ],
  },
  {
    label: "Services",
    path: "/services",
    marqueeText: "Work With Us",
    gradients: [
      "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    ],
  },
  {
    label: "Portfolio",
    path: "/portfolio",
    marqueeText: "See Our Projects",
    gradients: [
      "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    ],
  },
  {
    label: "Contact",
    path: "/contact",
    marqueeText: "Say Hello!",
    gradients: [
      "linear-gradient(135deg, #f5af19 0%, #f12711 100%)",
      "linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)",
    ],
  },
];

/** Marquee service items shown in the rotating straps */
const marqueeItems = [
  "Creative Design",
  "UI/UX",
  "Marketing",
  "Motion",
  "Animation",
  "Branding",
];

/** Social media link abbreviations (kept for reference) */
// const socialLinks = ["FB", "IN", "DR", "BE"];

/** Page order for scroll/swipe navigation */
const pageOrder = ["/", "/about", "/services", "/portfolio", "/contact"];

/** Portfolio projects */
const portfolioProjects = [
  {
    title: "Agius Portfolio",
    category: "UI/UX",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    description: "A sleek, modern portfolio website designed to showcase creative agency work. Features smooth page transitions, interactive navigation, and a bold visual identity built around the Agius brand.",
    tech: ["React", "GSAP", "CSS3"],
    github: "#",
    website: "#",
  },
  {
    title: "NFTs Dashboard",
    category: "Web Application",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    description: "A real-time dashboard for tracking NFT collections, floor prices, and market trends. Built with performance in mind, featuring live data feeds and interactive charts.",
    tech: ["React", "Node.js", "WebSocket"],
    github: "#",
    website: "#",
  },
  {
    title: "Agius Showreel",
    category: "Motion Design",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    description: "A cinematic showreel highlighting the agency's best creative work across branding, web design, and motion graphics. Crafted to leave a lasting impression.",
    tech: ["After Effects", "Premiere Pro"],
    github: null,
    website: "#",
  },
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    description: "A fully-featured e-commerce solution with inventory management, payment integration, and a custom CMS. Designed for scalability and a seamless checkout experience.",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    github: "#",
    website: "#",
  },
  {
    title: "Brand Identity Kit",
    category: "Branding",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    description: "Complete brand identity system including logo design, typography guidelines, color palettes, and marketing collateral for a premium fashion startup.",
    tech: ["Figma", "Illustrator"],
    github: null,
    website: "#",
  },
  {
    title: "Analytics Engine",
    category: "Backend Service",
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    description: "A high-performance analytics pipeline processing millions of events daily. Features real-time dashboards, custom reporting, and automated alerting systems.",
    tech: ["Python", "Kafka", "ClickHouse"],
    github: "#",
    website: null,
  },
];

/** Services data */
const servicesData = [
  {
    title: "Maintenance",
    description: "Keep your digital products running smoothly with our proactive maintenance, bug fixing, and continuous performance optimization.",
    link: "#",
    linkText: "Know More",
  },
  {
    title: "Automations",
    description: "Streamline your workflows and save time by automating repetitive tasks and connecting your favorite software tools together.",
    link: "#",
    linkText: "Know More",
  },
  {
    title: "Development",
    description: "We leverage cutting-edge technology stacks to build scalable, performant digital products that drive business growth.",
    link: "#",
    linkText: "Know More",
  },
  {
    title: "UI/UX",
    description: "Our design philosophy centers on creating intuitive, beautiful interfaces that engage users and convert visitors.",
    link: "#",
    linkText: "Know More",
  },
  {
    title: "Branding",
    description: "Bringing the history of your brand to the forefront gives an emotional dimension to your visual identity.",
    link: "#",
    linkText: "Know More",
  },
  {
    title: "Hosting",
    description: "Reliable, secure, and fast hosting infrastructure tailored to scale with your traffic and business needs.",
    link: "#",
    linkText: "Know More",
  },
];

export {
  navItems,
  marqueeItems,
  pageOrder,
  portfolioProjects,
  servicesData,
};
