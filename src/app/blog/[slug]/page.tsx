import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPostBySlug } from "@/data/blogPosts";
import { createPageMetadata, breadcrumbJsonLd, blogPostingJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { BackButton } from "@/components/ui/BackButton";
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
    `Hi PB_IT_HUB, I read your article "${post.title}" and would like to ask about projects.`,
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

      <article className="min-h-[100svh] pt-24 pb-16 md:pt-28 md:pb-24">
        <Container wide className="max-w-6xl">
          <BackButton
            href="/blog"
            label={STRINGS.blog.backToBlog}
            tone="dark"
          />

          <div className="mt-2 grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[260px_minmax(0,1fr)]">
            <BlogSidebar posts={allPosts} currentSlug={post.slug} />

            <div className="min-w-0 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full border border-blue/30 bg-blue/10 px-3 py-1 font-mono font-semibold text-blue uppercase">
                  {post.category}
                </span>
                <span className="text-steel/70">{post.readTime}</span>
                <span className="text-white/20">•</span>
                <span className="text-steel/70">{post.publishDate}</span>
              </div>

              <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              <div className="mt-4 flex items-center gap-3 border-b border-white/10 pb-6 text-sm text-steel">
                <span>
                  {STRINGS.blog.writtenBy}{" "}
                  <strong className="text-white">{post.author.name}</strong> (
                  {post.author.role})
                </span>
              </div>

              <div className="mt-8">
                <p className="text-base leading-relaxed text-slate-200 md:text-lg">
                  {post.content.intro}
                </p>
              </div>

              <div className="mt-10 space-y-10">
                {post.content.sections.map((section) => (
                  <section key={section.heading} className="space-y-4">
                    <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                      {section.heading}
                    </h2>
                    <p className="text-sm leading-relaxed text-steel md:text-base">
                      {section.body}
                    </p>
                    {section.bulletPoints && section.bulletPoints.length > 0 && (
                      <ul className="mt-3 space-y-2.5 pl-2">
                        {section.bulletPoints.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm leading-relaxed text-slate-300 md:text-base"
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
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
                    <h3 className="font-display text-lg font-bold text-white md:text-xl">
                      Summary & Next Steps
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel md:text-base">
                      {post.content.conclusion}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-10 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-medium text-steel"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-14 rounded-3xl border border-blue/20 bg-gradient-to-b from-blue/10 to-blue/5 p-6 md:p-8">
                <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                  Need Complete Project Source Code or Viva Support?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel md:text-base">
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
