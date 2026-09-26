"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { getFallbackMedia, resolveImageSrc } from "@/lib/media";

export type MediaImageType =
  | "hero"
  | "screenshot"
  | "card"
  | "thumbnail"
  | "avatar"
  | "logo";

interface MediaImageProps {
  src?: string | null;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  imageType?: MediaImageType;
}

const DEFAULT_SIZES: Record<MediaImageType, string> = {
  hero: "100vw",
  screenshot: "(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 55vw",
  card: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  thumbnail: "(max-width: 640px) 50vw, 20vw",
  avatar: "128px",
  logo: "256px",
};

const DEFAULT_QUALITIES: Record<MediaImageType, number> = {
  hero: 82,
  screenshot: 85,
  card: 78,
  thumbnail: 75,
  avatar: 80,
  logo: 88,
};

/**
 * High-performance responsive image wrapper.
 * Resolves media keys, applies category-specific responsive sizes,
 * guards against layout shifts, and uses modern WebP/AVIF formats.
 */
export function MediaImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  priority = false,
  sizes,
  quality,
  imageType = "card",
}: MediaImageProps) {
  const resolved = resolveImageSrc(src);
  const [current, setCurrent] = useState(resolved);

  const resolvedSizes =
    sizes ?? (fill ? DEFAULT_SIZES[imageType] : undefined);
  const resolvedQuality = quality ?? DEFAULT_QUALITIES[imageType];

  return (
    <Image
      src={current}
      alt={alt}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={cn(className)}
      preload={priority}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      sizes={resolvedSizes}
      quality={resolvedQuality}
      onError={() => setCurrent(getFallbackMedia().src)}
    />
  );
}
