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
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "PHP", "REST APIs", "MySQL", "Express"],
  },
  {
    category: "CMS & Platforms",
    skills: ["WordPress", "WooCommerce", "Headless CMS"],
  },
  {
    category: "Developer Tools",
    skills: ["GitHub", "Vercel", "Figma", "Postman", "Bash/Unix"],
  },
] as const;

export const noteTopics = [
  { name: "WordPress Architecture", count: 4 },
  { name: "Async Work & Culture", count: 2 },
  { name: "Frontend Engineering", count: 6 },
  { name: "Automation Workflows", count: 3 },
  { name: "Plugin Development", count: 5 },
] as const;

export const blogPosts = [
  {
    title: "Building Scalable WordPress Plugin Architecture",
    excerpt:
      "How I structure production-grade WordPress plugins with OOP patterns, custom hook systems, and long-term maintainability in mind.",
    date: "Apr 2025",
    readTime: "6 min read",
    tags: ["WordPress", "PHP", "Architecture"],
    image: "/blog-wp-architecture.png",
    href: "mailto:kunalpareek56@gmail.com?subject=Blog: WordPress Plugin Architecture",
  },
  {
    title: "UTM Tracking at Scale — A CRM Integration Deep Dive",
    excerpt:
      "A walkthrough of building a robust UTM capture pipeline that feeds directly into CRM systems without data loss across redirects.",
    date: "Mar 2025",
    readTime: "8 min read",
    tags: ["WordPress", "CRM", "Analytics"],
    image: "/blog-utm-crm.png",
    href: "mailto:kunalpareek56@gmail.com?subject=Blog: UTM Tracking Deep Dive",
  },
  {
    title: "From WordPress to Next.js — Lessons From the Transition",
    excerpt:
      "Key architectural decisions, mental model shifts, and patterns I carried over from years of WordPress development into modern React ecosystems.",
    date: "Feb 2025",
    readTime: "5 min read",
    tags: ["Next.js", "React", "WordPress"],
    image: "/blog-nextjs-transition.png",
    href: "mailto:kunalpareek56@gmail.com?subject=Blog: WordPress to Next.js",
  },
  {
    title: "Async-First Engineering Culture for Remote Teams",
    excerpt:
      "Practical frameworks for async communication, documentation culture, and delivery discipline working with distributed US-based clients.",
    date: "Jan 2025",
    readTime: "4 min read",
    tags: ["Remote Work", "Culture", "Process"],
    image: "/blog-async-culture.png",
    href: "mailto:kunalpareek56@gmail.com?subject=Blog: Async Engineering Culture",
  },
] as const;
