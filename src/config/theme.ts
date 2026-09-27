/**
 * PB IT HUB shared theme tokens — charcoal ink + deep sapphire.
 */
export const theme = {
  bg: "#ffffff",
  bgPage: "#f4f6fa",
  card: "#ffffff",
  cardHover: "#f8fafc",
  panel: "#e8ecf3",
  panelSoft: "#f4f6fa",
  navy: "#152033",
  ink: "#0b1220",
  white: "#ffffff",
  blue: "#1d4ed8",
  cyan: "#0891b2",
  teal: "#0f766e",
  purple: "#4f46e5",
  muted: "#5b6b7c",
} as const;

export type ThemeColor = keyof typeof theme;
