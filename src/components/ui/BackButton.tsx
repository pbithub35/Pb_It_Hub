"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  /** Fallback destination when there is no in-site history */
  href?: string;
  label?: string;
  tone?: "light" | "dark";
  className?: string;
}

export function BackButton({
  href = "/",
  label = "Back",
  tone = "light",
  className,
}: BackButtonProps) {
  const router = useRouter();

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (typeof window === "undefined") return;

    const referrer = document.referrer;
    const sameOrigin =
      Boolean(referrer) &&
      referrer.startsWith(window.location.origin) &&
      !referrer.startsWith(
        `${window.location.origin}${window.location.pathname}`,
      );

    if (sameOrigin) {
      event.preventDefault();
      router.back();
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        "group mb-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition md:mb-8",
        tone === "dark"
          ? "text-white/55 hover:text-cyan"
          : "text-navy/55 hover:text-blue",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex h-7 w-7 items-center justify-center rounded-full border transition duration-300 group-hover:-translate-x-0.5",
          tone === "dark"
            ? "border-white/15 bg-white/[0.04] text-cyan group-hover:border-cyan/40 group-hover:bg-cyan/10"
            : "border-navy/12 bg-navy/[0.03] text-blue group-hover:border-blue/30 group-hover:bg-blue/5",
        )}
        aria-hidden
      >
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>{label}</span>
    </Link>
  );
}
