import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre marketing digital, publicidad en redes sociales, IA y estrategia de crecimiento para negocios en Costa Rica.",
  alternates: {
    canonical: "https://luxmediacr.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[var(--background)] pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <Breadcrumbs
          items={[{ label: "Inicio", href: "/" }, { label: "Blog" }]}
        />

        <div className="text-center mb-12 md:mb-16">
          <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest">
            Blog
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-4 font-display">
            Ideas que generan resultados
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estrategias, casos reales y guías prácticas para hacer crecer tu
            marca en Costa Rica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl overflow-hidden glass-card glass-card-hover"
            >
              {post.image && (
                <div className="aspect-video bg-[var(--card-bg)] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                <h2 className="text-lg font-bold text-white group-hover:text-[var(--accent)] transition-colors mb-2 font-display">
                  {post.title}
                </h2>
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
          ))}
        </div>
      </div>
    </main>
  );
}
