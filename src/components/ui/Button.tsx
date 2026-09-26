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

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-blue text-white hover:bg-blue-bright shadow-[0_10px_30px_rgba(59,130,246,0.28)]",
  secondary:
    "border border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm",
  ghost:
    "border border-navy/15 bg-transparent text-navy hover:bg-navy/5",
  light:
    "bg-white text-navy hover:bg-off-white",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-[10px] tracking-[0.12em] md:h-10 md:px-4 md:text-xs md:tracking-[0.14em]",
  md: "h-10 px-4 text-[10px] tracking-[0.12em] md:h-12 md:px-6 md:text-xs md:tracking-[0.16em]",
  lg: "h-11 px-5 text-[11px] tracking-[0.12em] md:h-14 md:px-8 md:text-sm md:tracking-[0.16em]",
};

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    variant = "primary",
    size = "md",
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase transition-all duration-300 ease-[var(--ease-out-expo)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue disabled:opacity-60 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, target, rel, onClick } = props;
    return (
      <Link href={href} className={classes} target={target} rel={rel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
