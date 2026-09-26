import Link from "next/link";
import type { BlogPost } from "@/types/blog";
import { STRINGS } from "@/config/strings";
import { cn } from "@/lib/utils";

function sortByDateDesc(posts: BlogPost[]) {
  return [...posts].sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
  );
}

function groupByCategory(posts: BlogPost[]) {
  const map = new Map<string, BlogPost[]>();
  for (const post of sortByDateDesc(posts)) {
    const list = map.get(post.category) ?? [];
    list.push(post);
    map.set(post.category, list);
  }
  return Array.from(map.entries());
}

interface BlogSidebarProps {
  posts: BlogPost[];
  currentSlug?: string;
  className?: string;
}

export function BlogSidebar({
  posts,
  currentSlug,
  className,
}: BlogSidebarProps) {
  const groups = groupByCategory(posts);

  return (
    <aside className={cn("w-full", className)}>
      {/* Mobile: collapsible */}
      <details className="group rounded-2xl border border-white/10 bg-white/[0.03] lg:hidden">
        <summary className="cursor-pointer list-none px-4 py-3.5 font-display text-sm text-white [&::-webkit-details-marker]:hidden">
          <span className="flex items-center justify-between gap-3">
            {STRINGS.blog.sideMenuTitle}
            <span className="text-xs uppercase tracking-[0.14em] text-steel transition group-open:rotate-180">
              ▾
            </span>
          </span>
        </summary>
        <nav className="border-t border-white/10 px-3 pb-4 pt-2" aria-label="Blog articles">
          <SidebarNav groups={groups} currentSlug={currentSlug} />
        </nav>
      </details>

      {/* Desktop: sticky side menu */}
      <div className="hidden lg:sticky lg:top-28 lg:block lg:max-h-[calc(100svh-8rem)] lg:overflow-y-auto">
        <p className="eyebrow text-cyan/80">{STRINGS.blog.sideMenuTitle}</p>
        <nav className="mt-4" aria-label="Blog articles">
          <SidebarNav groups={groups} currentSlug={currentSlug} />
        </nav>
        {currentSlug ? (
          <Link
            href="/blog"
            className="mt-6 inline-block text-xs uppercase tracking-[0.14em] text-blue hover:underline"
          >
            {STRINGS.blog.viewAllArticles}
          </Link>
        ) : null}
      </div>
    </aside>
  );
}

function SidebarNav({
  groups,
  currentSlug,
}: {
  groups: Array<[string, BlogPost[]]>;
  currentSlug?: string;
}) {
  return (
    <div className="space-y-5">
      {groups.map(([category, items]) => (
        <div key={category}>
          <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-steel/80">
            {category}
          </p>
          <ul className="mt-2 space-y-0.5">
            {items.map((post) => {
              const active = post.slug === currentSlug;
              return (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className={cn(
                      "block rounded-lg px-2 py-2 text-sm leading-snug transition",
                      active
                        ? "bg-blue/15 text-white"
                        : "text-steel hover:bg-white/[0.04] hover:text-white",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {post.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
