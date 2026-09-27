import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface OfficeMapProps {
  className?: string;
  /** Show “Open in Google Maps” link under the embed */
  showDirections?: boolean;
}

export function OfficeMap({ className, showDirections = true }: OfficeMapProps) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-navy/10 bg-white", className)}>
      <div className="relative aspect-[16/10] w-full min-h-[220px] bg-off-white sm:min-h-[280px]">
        <iframe
          title={`${siteConfig.displayName} on Google Maps`}
          src={siteConfig.maps.embedSrc}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      {showDirections ? (
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-navy/8 px-4 py-3">
          <p className="text-sm text-muted-strong">
            {siteConfig.location}, {siteConfig.region}
          </p>
          <a
            href={siteConfig.maps.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-blue underline-offset-4 hover:underline"
          >
            Open in Google Maps
          </a>
        </div>
      ) : null}
    </div>
  );
}
