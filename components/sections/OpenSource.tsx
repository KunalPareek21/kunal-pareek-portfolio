"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Share2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { openSourceCategories } from "@/lib/data/portfolio";

type OpenSourceProps = {
  highlightSlug?: string;
};

export function OpenSource({ highlightSlug }: OpenSourceProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});

  useEffect(() => {
    if (!highlightSlug) {
      return;
    }

    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    const timer = window.setTimeout(() => {
      itemRefs.current[highlightSlug]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 250);

    return () => window.clearTimeout(timer);
  }, [highlightSlug]);

  return (
    <section
      id="open-source"
      ref={sectionRef}
      className="py-4 md:py-6 lg:py-8 px-4 sm:px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto scroll-mt-24"
    >
      <FadeIn className="mb-8">
        <h2 className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 mb-4" style={{ color: 'var(--text-muted)' }}>
          <Share2 className="w-4 h-4 text-emerald-500" />
          Open Source &amp; Community
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Actively contributing to the WordPress open-source ecosystem through core patches, public plugins, technical writing, and developer-focused tooling built around maintainability, accessibility, and modern engineering workflows.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-6 mb-8 md:mb-12 lg:mb-16">
        {openSourceCategories.map((cat, idx) => {
          const Icon = "icon" in cat ? cat.icon : null;
          return (
            <FadeIn
              key={cat.title}
              delay={idx * 0.05}
              className="rounded-xl p-6 border transition-colors duration-300"
              style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' } as React.CSSProperties}
            >
              <h3 className="text-[10px] uppercase tracking-widest mb-6 font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                {"iconUrl" in cat ? (
                  <img src={cat.iconUrl} alt="" className="w-5 h-5 object-contain pointer-events-none" />
                ) : (
                  Icon && <Icon className="w-5 h-5 text-emerald-500" />
                )}
                {cat.title}
              </h3>
              <ul className="grid gap-4 auto-rows-fr">
                {cat.items.map((item) => {
                  const isHighlighted = item.slug === highlightSlug;

                  return (
                    <li
                      key={item.name}
                      id={item.slug}
                      ref={(node) => {
                        itemRefs.current[item.slug] = node;
                      }}
                      className="flex h-full min-h-[172px] flex-col rounded-lg border p-4 transition-all duration-300"
                      style={{
                        backgroundColor: isHighlighted ? "color-mix(in srgb, var(--card-secondary) 84%, rgb(16 185 129 / 16%))" : "var(--card-secondary)",
                        borderColor: isHighlighted ? "rgb(16 185 129 / 0.55)" : "var(--border)",
                        boxShadow: isHighlighted ? "0 0 0 1px rgb(16 185 129 / 0.2), 0 0 24px rgb(16 185 129 / 0.12)" : "none",
                      }}
                    >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <div
                          className="text-[11px] font-bold uppercase tracking-widest"
                          style={{ color: isHighlighted ? "#34d399" : "var(--text-primary)" }}
                        >
                          {item.name}
                        </div>
                        <p
                          className="mt-2 text-[12px] leading-relaxed font-medium"
                          style={{
                            color: "var(--text-muted)",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${item.name} on GitHub`}
                        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border transition-colors hover:text-emerald-500"
                        style={{
                          borderColor: isHighlighted ? "rgb(16 185 129 / 0.3)" : "var(--border)",
                          color: isHighlighted ? "#34d399" : "var(--text-muted)",
                        }}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <div className="mt-3 flex min-h-[3.25rem] flex-wrap content-start gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border px-2 py-1 text-[10px] font-bold uppercase tracking-widest"
                          style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                        >
                          {tag}
                        </span>
                      ))}
                      <span
                        className="rounded-md border px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-500"
                        style={{ borderColor: "var(--border)" }}
                        >
                          {item.status}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn
        delay={0.15}
        className="rounded-xl p-8 md:p-12 border transition-colors duration-300"
        style={{ backgroundColor: 'var(--card-secondary)', borderColor: 'var(--border-hover)' } as React.CSSProperties}
      >
        <div className="flex items-start gap-4">
          <BookOpen className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-[11px] font-bold uppercase mb-4" style={{ color: 'var(--text-primary)' }}>Open Source Philosophy</h3>
            <div className="space-y-4 text-[12px] leading-relaxed font-medium" style={{ color: 'var(--text-muted)' }}>
              <p>
                My approach to engineering is centered around building maintainable software that solves practical problems. Over the past few years, I&apos;ve worked across WordPress ecosystems, frontend systems, internal tooling, and API-driven applications while collaborating remotely with distributed teams.
              </p>
              <p>
                I enjoy building tools that improve workflows, simplify repetitive tasks, and create better developer experiences. A large part of my work involves custom WordPress development, scalable frontend architecture with React and Next.js, and integrating external services into production systems.
              </p>
              <p>
                I value clean communication, readable code, and long-term maintainability over unnecessary complexity. Whether I&apos;m developing a utility plugin, an internal dashboard, or a full-stack application, I focus on building systems that remain understandable and useful months after they&apos;re written.
              </p>
              <p>
                Outside of client work, I&apos;m actively improving my open-source presence by building public plugins, reusable tooling, and engineering-focused side projects while continuing to learn modern backend and frontend technologies.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
