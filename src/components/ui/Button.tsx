import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  magnetic?: boolean;
}

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex appearance-none items-center justify-center gap-2 rounded-full border font-display font-bold uppercase tracking-[0.12em] leading-none no-underline transition-all duration-200 ease-out cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-blue active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-[#1e40af] bg-[#1d4ed8] text-white shadow-[0_10px_28px_rgba(29,78,216,0.35)] hover:bg-[#1e40af] hover:shadow-[0_14px_32px_rgba(29,78,216,0.42)]",
  secondary:
    "border-navy/12 bg-white text-ink shadow-[var(--shadow-soft)] hover:border-navy/20 hover:bg-off-white",
  ghost:
    "border-navy/12 bg-transparent text-ink shadow-none hover:bg-navy/[0.04]",
  light:
    "border-navy/8 bg-white text-ink shadow-[var(--shadow-soft)] hover:bg-off-white",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-10 px-5 text-[0.6875rem]",
  md: "min-h-11 px-6 text-xs",
  lg: "min-h-12 px-7 text-[0.8125rem]",
};

export function Button(props: ButtonProps) {
  if ("href" in props && props.href) {
    const {
      children,
      className,
      variant = "primary",
      size = "md",
      magnetic: _magnetic,
      href,
      target,
      rel,
      onClick,
    } = props;
    const classes = cn(base, variants[variant], sizes[size], className);

    return (
      <Link
        href={href}
        className={classes}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  const {
    children,
    className,
    variant = "primary",
    size = "md",
    magnetic: _magnetic,
    type = "button",
    ...rest
  } = props as ButtonAsButton;

  const classes = cn(base, variants[variant], sizes[size], className);

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
