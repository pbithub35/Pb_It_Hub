import type { Metadata } from "next";
import { createPageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BackButton } from "@/components/ui/BackButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { BlogListClient } from "@/components/blog/BlogListClient";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { getAllBlogPosts } from "@/data/blogPosts";
import { STRINGS } from "@/config/strings";

export const metadata: Metadata = createPageMetadata({
  title: "Blog & Project Guides",
  description: STRINGS.blog.description,
  path: "/blog",
  keywords: [
    "BCA final year project ideas",
    "viva preparation questions",
    "website cost Punjab",
    "student projects blog",
  ],
});

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <div className="min-h-[100svh] pt-24 pb-16 md:pt-28 md:pb-24">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />

      <Container wide className="max-w-6xl">
        <BackButton
          href="/"
          label={STRINGS.actions.backToHome}
          tone="dark"
        />

        <SectionHeading
          tone="dark"
          eyebrow={STRINGS.blog.eyebrow}
          title={STRINGS.blog.title}
          description={STRINGS.blog.description}
        />

        <div className="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[260px_minmax(0,1fr)]">
          <BlogSidebar posts={posts} />
          <div className="min-w-0">
            <BlogListClient initialPosts={posts} />
          </div>
        </div>
      </Container>
    </div>
  );
}
