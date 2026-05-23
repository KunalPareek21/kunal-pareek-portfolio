import { Box, Cpu, LayoutTemplate } from "lucide-react";

export const SITE_URL = "https://kunalpareek.in";

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
      {
        slug: "commandbar",
        name: "commandbar",
        description: "Command palette plugin for faster WordPress admin actions and shortcuts.",
        href: "https://github.com/KunalPareek21/commandbar",
        tags: ["Plugin", "WordPress", "PHP"],
        status: "Open Source",
      },
      {
        slug: "patchnotes",
        name: "patchnotes",
        description: "Release notes plugin for publishing product and site updates with less friction.",
        href: "https://github.com/KunalPareek21/patchnotes",
        tags: ["Plugin", "WordPress", "Content"],
        status: "Open Source",
      },
      {
        slug: "writingmode",
        name: "writingmode",
        description: "Writing-focused plugin that streamlines authoring and reduces editor friction.",
        href: "https://github.com/KunalPareek21/writingmode",
        tags: ["Plugin", "WordPress", "Editor"],
        status: "Open Source",
      },
      {
        slug: "speedlens",
        name: "speedlens",
        description: "Performance plugin for quicker speed checks and optimization-oriented workflows.",
        href: "https://github.com/KunalPareek21/speedlens",
        tags: ["Plugin", "WordPress", "Performance"],
        status: "Open Source",
      },
      {
        slug: "svg-shield",
        name: "svg-shield",
        description: "SVG handling utility focused on safer uploads and cleaner WordPress media workflows.",
        href: "https://github.com/KunalPareek21/svg-shield",
        tags: ["Plugin", "WordPress", "Security"],
        status: "Open Source",
      },
      {
        slug: "safeupdate",
        name: "safeupdate",
        description: "Update management plugin built for more controlled and predictable WordPress releases.",
        href: "https://github.com/KunalPareek21/safeupdate",
        tags: ["Plugin", "WordPress", "Maintenance"],
        status: "Open Source",
      },
    ],
  },
  {
    title: "WordPress Themes",
    icon: LayoutTemplate,
    items: [
      {
        slug: "memoir",
        name: "memoir",
        description: "Editorial WordPress theme for long-form publishing and a clean reading experience.",
        href: "https://github.com/KunalPareek21/memoir",
        tags: ["Theme", "WordPress", "Editorial"],
        status: "Open Source",
      },
      {
        slug: "podium",
        name: "podium",
        description: "Presentation-first theme for launches, announcements, and content-led brand pages.",
        href: "https://github.com/KunalPareek21/podium",
        tags: ["Theme", "WordPress", "Marketing"],
        status: "Open Source",
      },
      {
        slug: "handbook",
        name: "handbook",
        description: "Documentation theme for internal knowledge bases and public-facing docs.",
        href: "https://github.com/KunalPareek21/handbook",
        tags: ["Theme", "WordPress", "Documentation"],
        status: "Open Source",
      },
      {
        slug: "newsroom",
        name: "newsroom",
        description: "News and magazine theme built for repeat publishing and structured content layouts.",
        href: "https://github.com/KunalPareek21/newsroom",
        tags: ["Theme", "WordPress", "Publishing"],
        status: "Open Source",
      },
      {
        slug: "openframe",
        name: "openframe",
        description: "Flexible starter theme for reusable layouts, rapid iteration, and custom builds.",
        href: "https://github.com/KunalPareek21/openframe",
        tags: ["Theme", "WordPress", "Starter"],
        status: "Open Source",
      },
      {
        slug: "docpress",
        name: "docpress",
        description: "Docs-oriented theme for WordPress sites that need a structured reading flow.",
        href: "https://github.com/KunalPareek21/docpress",
        tags: ["Theme", "WordPress", "Docs"],
        status: "Open Source",
      },
    ],
  },
  {
    title: "Developer Tools",
    icon: Cpu,
    items: [
      {
        slug: "api-integrations-automation",
        name: "API Integrations & Automation",
        description: "Utilities around third-party APIs, workflow automation, and internal operations.",
        href: "https://github.com/KunalPareek21",
        tags: ["Tools", "Automation", "APIs"],
        status: "Ongoing",
      },
      {
        slug: "internal-dashboard-systems",
        name: "Internal Dashboard Systems",
        description: "Admin and reporting tools built to improve visibility across teams and client systems.",
        href: "https://github.com/KunalPareek21",
        tags: ["Tools", "Dashboards", "Internal"],
        status: "Ongoing",
      },
      {
        slug: "developer-workflow-tooling",
        name: "Developer Workflow Tooling",
        description: "Workflow utilities that reduce repetitive work and improve development ergonomics.",
        href: "https://github.com/KunalPareek21",
        tags: ["Tools", "DX", "Workflow"],
        status: "Ongoing",
      },
      {
        slug: "async-productivity-utilities",
        name: "Async Productivity Utilities",
        description: "Small systems for distributed work, cleaner handoffs, and more structured execution.",
        href: "https://github.com/KunalPareek21",
        tags: ["Tools", "Async", "Productivity"],
        status: "Ongoing",
      },
      {
        slug: "cli-utility-experiments",
        name: "CLI & Utility Experiments",
        description: "CLI prototypes and utility experiments for faster local and team workflows.",
        href: "https://github.com/KunalPareek21",
        tags: ["Tools", "CLI", "Experiments"],
        status: "Ongoing",
      },
    ],
  },
] as const;

export const openSourceSlugs = openSourceCategories.flatMap((category) =>
  category.items.map((item) => item.slug),
);

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
    skills: ["GitHub", "Git", "Postman", "Vercel", "Figma"],
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
