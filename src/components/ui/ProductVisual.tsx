import { cn } from "@/lib/utils";

interface ProductVisualProps {
  title: string;
  subtitle?: string;
  accent?: "blue" | "purple" | "cyan";
  className?: string;
  variant?: "dashboard" | "mobile" | "ai" | "docs" | "crm";
}

const accentMap = {
  blue: "from-blue/30 via-transparent to-cyan/20",
  purple: "from-purple/30 via-transparent to-blue/20",
  cyan: "from-cyan/25 via-transparent to-purple/20",
};

/**
 * Branded product-frame visual used when real screenshots are not yet available.
 * Not presented as a live product screenshot.
 */
export function ProductVisual({
  title,
  subtitle,
  accent = "blue",
  className,
  variant = "dashboard",
}: ProductVisualProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-xl)] border border-white/10 bg-navy-deep shadow-[var(--shadow-soft)]",
        className,
      )}
      aria-hidden={false}
      role="img"
      aria-label={`${title} product visual placeholder`}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-80",
          accentMap[accent],
        )}
      />
      <div className="absolute inset-0 grid-fade opacity-60" />

      <div className="relative flex h-full min-h-[240px] flex-col p-4 md:p-5">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-3 text-[10px] uppercase tracking-[0.2em] text-white/40">
            PB_IT_HUB
          </span>
        </div>

        <div className="mb-3">
          <p className="font-display text-xl text-white md:text-2xl">{title}</p>
          {subtitle ? (
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="mt-auto grid flex-1 gap-3">
          {variant === "mobile" ? (
            <div className="mx-auto flex h-full w-[42%] flex-col rounded-[1.4rem] border border-white/15 bg-white/5 p-3">
              <div className="mb-3 h-1.5 w-10 self-center rounded-full bg-white/20" />
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-gradient-to-br from-blue/40 to-purple/30" />
                <div className="h-2 rounded bg-white/15" />
                <div className="h-2 w-2/3 rounded bg-white/10" />
                <div className="h-8 rounded-md bg-blue/30" />
              </div>
            </div>
          ) : variant === "ai" ? (
            <div className="space-y-3">
              <div className="rounded-xl border border-cyan/20 bg-white/5 p-3 text-sm text-white/70">
                Find me a 3BHK in Mohali under ₹80L
              </div>
              <div className="ml-auto max-w-[85%] rounded-xl border border-blue/25 bg-blue/10 p-3 text-sm text-blue-bright">
                Searching listings → filtering budget → ranking matches
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="aspect-[4/3] rounded-lg border border-white/10 bg-white/5"
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid h-full grid-cols-12 gap-3">
              <div className="col-span-3 space-y-2 rounded-xl border border-white/10 bg-white/5 p-3">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="h-2 rounded bg-white/10" />
                ))}
              </div>
              <div className="col-span-9 space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="h-16 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent"
                    />
                  ))}
                </div>
                <div className="h-24 rounded-xl border border-white/10 bg-white/5" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-12 rounded-lg bg-blue/20" />
                  <div className="h-12 rounded-lg bg-purple/20" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
