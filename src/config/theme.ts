/**
 * PB_IT_HUB shared theme tokens.
 * Prefer CSS classes (theme-page, theme-card, …) in UI.
 * Use these JS constants only when a style prop or chart/lib needs a hex.
 */
export const theme = {
  bg: "#152033",
  bgPage: "#1a2740",
  card: "#243552",
  cardHover: "#2c4060",
  panel: "#3a5070",
  panelSoft: "#2a3d5c",
  navy: "#1e293b",
  white: "#ffffff",
  blue: "#3b82f6",
  cyan: "#22d3ee",
  teal: "#14b8a6",
  purple: "#7c3aed",
  muted: "#a8b4c7",
} as const;

export type ThemeColor = keyof typeof theme;
