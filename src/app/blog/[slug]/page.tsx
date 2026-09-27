import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPostBySlug } from "@/data/blogPosts";
import { createPageMetadata, breadcrumbJsonLd, blogPostingJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { siteConfig } from "@/config/site";
import { STRINGS } from "@/config/strings";

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return createPageMetadata({
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllBlogPosts();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hi PB IT HUB, I read your article "${post.title}" and would like to ask about projects.`,
  )}`;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd
        data={blogPostingJsonLd({
          title: post.title,
          description: post.excerpt,
          url: `/blog/${post.slug}`,
          datePublished: post.publishDate,
          authorName: post.author.name,
        })}
      />

      <article className="page-shell min-h-[100svh]">
        <Container wide className="max-w-6xl">

          <div className="mt-2 grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[260px_minmax(0,1fr)]">
            <BlogSidebar posts={allPosts} currentSlug={post.slug} />

            <div className="min-w-0 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full border border-blue/30 bg-blue/10 px-3 py-1 font-mono font-semibold text-blue uppercase">
                  {post.category}
                </span>
                <span className="text-muted">{post.readTime}</span>
                <span className="text-navy/20">•</span>
                <span className="text-muted">{post.publishDate}</span>
              </div>

              <h1 className="heading-page mt-3">
                {post.title}
              </h1>

              <div className="mt-4 flex items-center gap-3 border-b border-navy/10 pb-6 text-sm text-muted-strong">
                <span>
                  {STRINGS.blog.writtenBy}{" "}
                  <strong className="text-navy">{post.author.name}</strong> (
                  {post.author.role})
                </span>
              </div>

              <div className="mt-8">
                <p className="text-base leading-relaxed text-muted-strong md:text-lg">
                  {post.content.intro}
                </p>
              </div>

              <div className="mt-10 space-y-10">
                {post.content.sections.map((section) => (
                  <section key={section.heading} className="space-y-4">
                    <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
                      {section.heading}
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-strong md:text-base">
                      {section.body}
                    </p>
                    {section.bulletPoints && section.bulletPoints.length > 0 && (
                      <ul className="mt-3 space-y-2.5 pl-2">
                        {section.bulletPoints.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm leading-relaxed text-muted-strong md:text-base"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}

                {post.content.conclusion && (
                  <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-[var(--shadow-soft)] md:p-8">
                    <h3 className="font-display text-lg font-bold text-navy md:text-xl">
                      Summary & Next Steps
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-strong md:text-base">
                      {post.content.conclusion}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-10 flex flex-wrap gap-2 border-t border-navy/10 pt-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-navy/10 bg-white px-3 py-1 text-xs font-medium text-muted"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-14 rounded-3xl border border-blue/20 bg-gradient-to-b from-blue/[0.06] to-blue/[0.02] p-6 md:p-8">
                <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
                  Need Complete Project Source Code or Viva Support?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-strong md:text-base">
                  Explore our catalog of production-ready student projects with
                  complete documentation, architecture diagrams, and 1-on-1
                  mentorship from senior engineers.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button
                    href="/learn-and-build/projects"
                    variant="primary"
                    size="md"
                  >
                    {STRINGS.blog.exploreProjectsCTA}
                  </Button>
                  <Button
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="md"
                  >
                    {STRINGS.faq.whatsappCTA}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
