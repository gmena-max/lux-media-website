"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

interface BlogPostPreview {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image?: string;
  readingTime: string;
}

export default function BlogPreview({ posts }: { posts: BlogPostPreview[] }) {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[var(--background)]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent)]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 8 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest gold-glow-subtle">
            Blog
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4 font-display">
            Últimos <span className="gradient-text">artículos</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Estrategias, casos reales y guías prácticas para hacer crecer tu
            marca.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ y: 8 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: Math.min(index * 0.05, 0.15), duration: 0.22, ease: "easeOut" }}
            >
              <Link
                href={`/blog/${post.slug}`}
                onClick={() =>
                  trackEvent("blog_click", {
                    event_label: post.title,
                    link_url: `/blog/${post.slug}`,
                  })
                }
                className="group block rounded-2xl overflow-hidden glass-card glass-card-hover h-full"
              >
                {post.image && (
                  <div className="aspect-video bg-[var(--card-bg)] overflow-hidden relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {post.readingTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[var(--accent)] transition-colors mb-2 font-display">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-600">
                      {new Date(post.date).toLocaleDateString("es-CR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-[var(--accent)] text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Leer →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 8 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.15, duration: 0.22, ease: "easeOut" }}
          className="text-center mt-10"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:gap-3 transition-all"
          >
            Ver todos los artículos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
