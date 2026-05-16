import Image from "next/image";
import { ArrowUpRight, Clock, Calendar, BookText } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { blogPosts } from "@/lib/data/portfolio";

export function Blog() {
  return (
    <section id="blog" className="py-4 md:py-6 lg:py-8 px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto scroll-mt-24">
      <FadeIn className="mb-8">
        <h2 className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 mb-4" style={{ color: 'var(--text-muted)' }}>
          <BookText className="w-4 h-4 text-emerald-500" />
          Writing & Thoughts
        </h2>
        <p className="text-sm leading-relaxed max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
          Notes on engineering, open source, and building things on the web. I write about what I&apos;m building, learning, and thinking about.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map((post, idx) => (
          <FadeIn
            key={post.title}
            delay={idx * 0.05}
            className="group rounded-xl overflow-hidden flex flex-col h-full transition-colors border"
            style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' } as React.CSSProperties}
          >
            {/* Cover Image */}
            <div className="relative w-full h-44 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* subtle dark gradient overlay at bottom */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--card), transparent)' }} />
            </div>

            {/* Card body */}
            <div className="flex flex-col flex-grow p-6">
              {/* Meta row */}
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <span style={{ color: 'var(--text-muted)' }}>·</span>
                <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[14px] font-bold tracking-tight mb-3 leading-snug group-hover:text-emerald-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-[12px] leading-relaxed flex-grow mb-6" style={{ color: 'var(--text-secondary)' }}>
                {post.excerpt}
              </p>

              {/* Tags + Link */}
              <div className="mt-auto flex items-end justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[9px] rounded uppercase tracking-widest font-bold border"
                      style={{ backgroundColor: 'var(--card-secondary)', borderColor: 'var(--border-hover)', color: 'var(--text-primary)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={post.href}
                  className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest transition-colors flex-shrink-0 hover:text-emerald-500"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Read
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
