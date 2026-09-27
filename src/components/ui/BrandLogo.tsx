import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getMediaSrc } from "@/lib/media";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  /** Use white text for dark footers */
  tone?: "light" | "dark";
  /** Hide the wordmark and show mark only */
  markOnly?: boolean;
  size?: "sm" | "md";
  onClick?: () => void;
}

export function BrandLogo({
  className,
  tone = "light",
  markOnly = false,
  size = "md",
  onClick,
}: BrandLogoProps) {
  const markPx = size === "sm" ? 32 : 40;

  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${siteConfig.displayName} home`}
      className={cn(
        "group inline-flex items-center gap-2.5 transition-opacity hover:opacity-90",
        className,
      )}
    >
      <span
        className={cn(
          "relative shrink-0 overflow-hidden rounded-full",
          size === "sm" ? "h-8 w-8" : "h-10 w-10",
        )}
      >
        <Image
          src={getMediaSrc("brand/logo")}
          alt=""
          width={markPx}
          height={markPx}
          sizes={`${markPx}px`}
          className="h-full w-full object-contain"
          priority={size === "md"}
          quality={100}
        />
      </span>

      {markOnly ? null : (
        <span
          className={cn(
            "font-display leading-none tracking-[-0.02em]",
            size === "sm" ? "text-[0.8125rem]" : "text-[0.95rem] md:text-[1.05rem]",
            tone === "light" ? "text-ink" : "text-white",
          )}
        >
          <span className="font-extrabold">PB</span>
          <span
            className={cn(
              "mx-[0.3em] font-bold",
              tone === "light" ? "text-blue" : "text-blue-bright",
            )}
          >
            IT
          </span>
          <span className="font-extrabold">HUB</span>
        </span>
      )}
    </Link>
  );
}
