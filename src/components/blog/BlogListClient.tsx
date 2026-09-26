"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/types/blog";
import { STRINGS } from "@/config/strings";

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function BlogListClient({ initialPosts }: { initialPosts: BlogPost[] }) {
  const searchInputId = useId();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => {
    const set = new Set(initialPosts.map((p) => p.category));
    return Array.from(set);
  }, [initialPosts]);

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return initialPosts.filter((post) => {
      const matchesCat =
        selectedCategory === "all" || post.category === selectedCategory;
      if (!matchesCat) return false;
      if (!query) return true;
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    });
  }, [initialPosts, selectedCategory, searchQuery]);

  return (
    <div className="space-y-10">
      {/* Search and Category Filter */}
      <div className="space-y-4">
        <div className="relative max-w-xl">
          <label htmlFor={searchInputId} className="sr-only">
            {STRINGS.blog.searchPlaceholder}
          </label>
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-steel" />
          <input
            id={searchInputId}
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={STRINGS.blog.searchPlaceholder}
            className="w-full rounded-full border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-sm text-white placeholder-steel/60 transition-colors focus:border-blue focus:bg-white/[0.07] focus:outline-none focus:ring-1 focus:ring-blue"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-steel hover:text-white"
            >
              Clear
            </button>
          ) : null}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
              selectedCategory === "all"
                ? "bg-blue text-white shadow-md shadow-blue/20"
                : "border border-white/10 bg-white/[0.03] text-steel hover:border-white/20 hover:text-white"
            }`}
          >
            {STRINGS.blog.allCategory}
          </button>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  isActive
                    ? "bg-blue text-white shadow-md shadow-blue/20"
                    : "border border-white/10 bg-white/[0.03] text-steel hover:border-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
        {filteredPosts.length === 0 ? (
          <div className="col-span-full rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
            <p className="text-base text-steel">
              No matching articles found for &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 text-xs font-semibold uppercase tracking-wider text-blue hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.04] md:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-3 text-xs">
                  <span className="rounded-full border border-blue/30 bg-blue/10 px-3 py-1 font-mono text-[11px] font-semibold text-blue uppercase">
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-steel/70">
                    <ClockIcon className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="mt-4 font-display text-xl font-bold text-white transition-colors group-hover:text-blue md:text-2xl">
                  <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                    {post.title}
                  </Link>
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-steel md:text-base">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-0.5 text-[11px] font-medium text-steel"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-steel">
                <span>{post.author.name}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center font-semibold text-blue transition-transform group-hover:translate-x-1"
                >
                  {STRINGS.blog.readArticle}
                </Link>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
