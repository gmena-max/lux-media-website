import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { getPostBySlug, getAllSlugs, getAllPosts } from "@/lib/blog";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { CONTACT } from "@/constants/contact";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://luxmediacr.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      ...(post.image ? { images: [{ url: post.image }] } : {}),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://luxmediacr.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Lux Media",
      url: "https://luxmediacr.com",
      logo: { "@type": "ImageObject", url: "https://luxmediacr.com/logo-full.png" },
    },
    ...(post.image ? { image: `https://luxmediacr.com${post.image}` } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[var(--background)] pt-32 md:pt-40 pb-16 md:pb-24">
        <article className="max-w-3xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-gray-500">{post.readingTime}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-display mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              {post.description}
            </p>
            <div className="flex items-center gap-3 mt-6 text-sm text-gray-500">
              <span>{post.author}</span>
              <span>·</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("es-CR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </header>

          {/* MDX Content */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-white prose-p:text-gray-400 prose-a:text-[var(--accent)] prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-li:text-gray-400 prose-blockquote:border-[var(--accent)]/50 prose-blockquote:text-gray-300">
            <MDXRemote source={post.content} />
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-[var(--accent)]/10 to-transparent border border-[rgba(245,181,26,0.2)] text-center">
            <h2 className="text-2xl font-bold font-display mb-3">
              ¿Querés aplicar esto a tu marca?
            </h2>
            <p className="text-gray-400 mb-6">
              Agendá un diagnóstico gratuito de 30 minutos. Analizamos tu caso y
              te damos un plan concreto.
            </p>
            <a
              href={CONTACT.getWhatsAppUrl(
                "Hola, leí su artículo en el blog y me interesa una consulta para mi marca."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-black font-semibold rounded-full hover:bg-[var(--accent-light)] transition-all duration-300"
            >
              Agendar diagnóstico gratuito
            </a>
          </div>

          {/* Related posts */}
          {(() => {
            const relatedPosts = getAllPosts().filter((p) => p.slug !== slug).slice(0, 2);
            if (relatedPosts.length === 0) return null;
            return (
              <div className="mt-16">
                <h2 className="text-xl font-bold font-display mb-6 text-center">
                  También te puede interesar
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group block rounded-2xl overflow-hidden glass-card glass-card-hover"
                    >
                      {related.image && (
                        <div className="aspect-video bg-[var(--card-bg)] overflow-hidden relative">
                          <Image
                            src={related.image}
                            alt={related.title}
                            fill
                            sizes="(max-width: 640px) 100vw, 50vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <span className="text-xs font-medium text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-1 rounded-full">
                          {related.category}
                        </span>
                        <h3 className="text-base font-bold text-white group-hover:text-[var(--accent)] transition-colors mt-3 mb-1 font-display">
                          {related.title}
                        </h3>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {related.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Back to blog */}
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="text-gray-500 hover:text-[var(--accent)] transition-colors text-sm"
            >
              ← Volver al blog
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
