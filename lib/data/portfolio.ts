import { Box, Cpu, LayoutTemplate } from "lucide-react";

export const SITE_URL = "https://kunalpareek.dev";

export const navItems = [
  { label: "About", id: "about" },
  { label: "Open Source", id: "open-source" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
] as const;

export const technicalStack = [
  "Next.js",
  "TypeScript",
  "React",
  "WordPress",
  "Node.js",
  "PHP",
  "MySQL",
  "Tailwind CSS",
  "JavaScript",
  "jQuery",
  "REST API",
  "GitHub Actions",
  "Docker",
  "WooCommerce",
  "MongoDB",
  "Vue.js",
] as const;

export const openSourceCategories = [
  {
    title: "WordPress Plugins",
    icon: Box,
    items: [
      "CRM UTM Tracker",
      "Async Queue Manager",
      "WP Component Library",
      "Developer Hooks Toolkit",
      "REST API Utilities",
    ],
  },
  {
    title: "WordPress Themes",
    icon: LayoutTemplate,
    items: [
      "Performance-Optimized Starter Themes",
      "Modular WordPress Theme Architecture",
      "Reusable Theme Utilities",
      "Internal Admin UI Systems",
    ],
  },
  {
    title: "Developer Tools",
    icon: Cpu,
    items: [
      "API Integrations & Automation",
      "Internal Dashboard Systems",
      "Developer Workflow Tooling",
      "Async Productivity Utilities",
      "CLI & Utility Experiments",
    ],
  },
] as const;

export const experienceHighlights = [
  "Started with WordPress development, building 50+ recruitment and staffing platforms for real-world client environments.",
  "Developed custom WordPress plugins, reusable hooks/utilities, and internal tooling focused on scalability and maintainability.",
  "Transitioned into React and Next.js development, building dashboards, SaaS systems, analytics platforms, and modern frontend applications.",
  "Built API-driven systems using Node.js, integrating third-party services, automation workflows, and business logic layers.",
  "Worked extensively in async remote environments with US-based teams, emphasizing clear communication, documentation, and reliable delivery.",
  "Delivered production-ready applications across staffing, LMS, analytics, automation, and internal business platforms.",
] as const;

export const experienceTech = [
  "WordPress",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PHP",
  "MySQL",
  "REST API",
  "JavaScript",
  "jQuery",
  "WooCommerce",
  "MongoDB",
  "Vue.js",
] as const;

export const projects = [
  {
    title: "CRM UTM Tracker Plugin",
    description:
      "A WordPress plugin designed to capture, track, and pass UTM parameters reliably into CRM lead forms for precise marketing attribution.",
    tech: ["WordPress", "PHP", "JavaScript"],
  },
  {
    title: "Realty Makers Dashboard",
    description:
      "A modern, responsive real estate dashboard providing unified metric tracking and lead management for enterprise brokerages.",
    tech: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Staffing Automation Tools",
    description:
      "Internal utility suite that automates candidate onboarding flows, integrates with external ATS APIs, and generates real-time notifications.",
    tech: ["Node.js", "TypeScript", "REST APIs"],
  },
  {
    title: "Figma Text To Image Plugin",
    description:
      "Figma plugin to generate seamless images directly on the canvas using external AI APIs, streamlining the design workflow.",
    tech: ["TypeScript", "Figma API", "React"],
  },
  {
    title: "WordPress Internal Hooks Toolkit",
    description:
      "A highly reusable, object-oriented PHP library that standardizes internal hook management across multiple client projects.",
    tech: ["PHP", "WordPress APIs"],
  },
  {
    title: "AI Image/Text Workflow Tools",
    description:
      "Custom dashboards linking AI generative endpoints with internal content creation pipelines for automated drafting.",
    tech: ["Next.js", "TypeScript", "Node.js"],
  },
] as const;

export const skillGroups = [
  {
    category: "Frontend Engineering",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "jQuery", "Tailwind CSS"],
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express", "PHP", "REST APIs", "MySQL", "MongoDB"],
  },
  {
    category: "WordPress Ecosystem",
    skills: ["WordPress", "WooCommerce", "Plugin Development", "Theme Development", "WP Hooks/API"],
  },
  {
    category: "Developer Workflow",
    skills: ["GitHub", "Git", "Postman", "Vercel", "Bash/Unix", "Figma"],
  },
] as const;

export const noteTopics = [
  { name: "WORDPRESS SYSTEMS", href: "https://dev.to/kunal_pareek" },
  { name: "OPEN SOURCE", href: "https://dev.to/kunal_pareek" },
  { name: "FRONTEND ENGINEERING", href: "https://dev.to/kunal_pareek" },
  { name: "ASYNC WORK & CULTURE", href: "https://dev.to/kunal_pareek" },
  { name: "API & AUTOMATION", href: "https://dev.to/kunal_pareek" },
  { name: "PLUGIN ARCHITECTURE", href: "https://dev.to/kunal_pareek" },
] as const;

export const blogPosts = [
  {
    title: "Async-First Engineering Culture for Remote Teams",
    excerpt:
      "Lessons from building maintainable systems, improving async communication, and collaborating effectively with distributed engineering teams.",
    tags: ["#opensource", "#remote", "#teams", "#career"],
    image: "/blog-async-culture.png",
    href: "https://dev.to/kunal_pareek/async-first-engineering-culture-for-remote-teams-5fgm",
  },
  {
    title: "Building Maintainable WordPress Plugin and Theme Systems",
    excerpt:
      "Practical lessons from building scalable WordPress plugin systems, reusable themes, internal tooling, maintainable architecture patterns, and long term developer friendly workflows.",
    tags: ["#WORDPRESS", "#WEBDEV", "#ARCHITECTURE", "#OPENSOURCE"],
    image: "/blog-wp-architecture.png",
    href: "https://dev.to/kunal_pareek/building-maintainable-wordpress-plugin-and-theme-systems-1n23",
  },
  {
    title: "UTM Tracking at Scale: Building a CRM Integration Pipeline for WordPress",
    excerpt:
      "How I built a WordPress based UTM tracking and CRM analytics system with REST APIs, attribution pipelines, event tracking, and maintainable backend architecture.",
    tags: ["#wordpress", "#opensource", "#webdev", "#analytics"],
    image: "/blog-utm-crm.png",
    href: "https://dev.to/kunal_pareek/utm-tracking-at-scale-building-a-crm-integration-pipeline-for-wordpress-3206",
  },
  {
    title: "What Years of WordPress Development Taught Me About Modern Frontend Systems",
    excerpt:
      "Lessons on maintainability, extensibility, frontend architecture, and long term system thinking carried from years of WordPress development into modern React and Next.js workflows.",
    tags: ["#nextjs", "#react", "#wordpress", "#webdev"],
    image: "/blog-nextjs-transition.png",
    href: "https://dev.to/kunal_pareek/what-years-of-wordpress-development-taught-me-about-modern-frontend-systems-4koh",
  },
] as const;
