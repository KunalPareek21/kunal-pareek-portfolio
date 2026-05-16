import Image from "next/image";
import { ArrowUpRight, Clock, Calendar, BookText } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { blogPosts } from "@/lib/data/portfolio";

export function Blog() {
  return (
    <section id="blog" className="py-4 md:py-6 lg:py-8 px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto scroll-mt-24">
      <FadeIn className="mb-8">
        <h2 className="text-[10px] uppercase tracking-widest text-[#6b7280] font-bold flex items-center gap-2 mb-4">
          <BookText className="w-4 h-4 text-emerald-500" />
          Writing & Thoughts
        </h2>
        <p className="text-[#D1D5DB] text-sm leading-relaxed max-w-2xl">
          Notes on engineering, open source, and building things on the web. I write about what I&apos;m building, learning, and thinking about.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map((post, idx) => (
          <FadeIn
            key={post.title}
            delay={idx * 0.05}
            className="group bg-[#0F0F0F] border border-[#1F1F1F] rounded-xl overflow-hidden flex flex-col h-full hover:border-[#2A2A2A] transition-colors"
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent" />
            </div>

            {/* Card body */}
            <div className="flex flex-col flex-grow p-6">
              {/* Meta row */}
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-gray-500">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <span className="text-gray-700">·</span>
                <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-gray-500">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[14px] font-bold tracking-tight text-white mb-3 leading-snug group-hover:text-emerald-400 transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-[12px] text-gray-400 leading-relaxed flex-grow mb-6">
                {post.excerpt}
              </p>

              {/* Tags + Link */}
              <div className="mt-auto flex items-end justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[#1A1A1A] border border-[#2A2A2A] text-[#E5E7EB] font-bold text-[9px] rounded uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={post.href}
                  className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors flex-shrink-0"
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
