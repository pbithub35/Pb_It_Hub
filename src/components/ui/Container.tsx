import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
  as?: "div" | "section" | "header" | "footer" | "article";
}

export function Container({
  children,
  className,
  wide = false,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cn(wide ? "container-wide" : "container-site", className)}>
      {children}
    </Tag>
  );
}
