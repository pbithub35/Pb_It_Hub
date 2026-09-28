export type ShowcaseSide = "left" | "right";

export type ScreenTone = "cream" | "warm" | "dark" | "white";

export interface ShowcaseItem {
  id: string;
  title: string;
  side: ShowcaseSide;
  desktopImage: string;
  thumbImage: string;
  projectLabel: string;
  screenTone?: ScreenTone;
}

/**
 * Data-driven showcase — wired to real PB_IT_HUB project screenshots.
 * Swap desktopImage / thumbImage paths when dedicated UI crops are ready.
 */
export const showcaseItems: ShowcaseItem[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    side: "left",
    desktopImage: "work/studio-ledger/hero",
    thumbImage: "work/studio-ledger/hero",
    projectLabel: "StudioLedger",
    screenTone: "warm",
  },
  {
    id: "analytics",
    title: "Analytics",
    side: "left",
    desktopImage: "work/creator-influencer-platform/hero",
    thumbImage: "work/creator-influencer-platform/hero",
    projectLabel: "Creator Platform",
    screenTone: "dark",
  },
  {
    id: "leads",
    title: "Leads & Clients",
    side: "left",
    desktopImage: "services/crm",
    thumbImage: "services/crm",
    projectLabel: "StudioLedger",
    screenTone: "cream",
  },
  {
    id: "calendar",
    title: "Calendar",
    side: "left",
    desktopImage: "work/excellent-educators/hero",
    thumbImage: "work/excellent-educators/hero",
    projectLabel: "Excellent Educators",
    screenTone: "white",
  },
  {
    id: "payments",
    title: "Payments",
    side: "left",
    desktopImage: "services/saas",
    thumbImage: "services/saas",
    projectLabel: "StudioLedger",
    screenTone: "cream",
  },
  {
    id: "settings",
    title: "Settings",
    side: "left",
    desktopImage: "services/custom",
    thumbImage: "services/custom",
    projectLabel: "PB IT HUB",
    screenTone: "cream",
  },
  {
    id: "ai",
    title: "AI Assistant",
    side: "right",
    desktopImage: "services/ai",
    thumbImage: "services/ai",
    projectLabel: "PB IT HUB AI",
    screenTone: "cream",
  },
  {
    id: "reports",
    title: "Reports",
    side: "right",
    desktopImage: "services/seo",
    thumbImage: "services/seo",
    projectLabel: "Excellent Educators",
    screenTone: "cream",
  },
  {
    id: "templates",
    title: "Templates",
    side: "right",
    desktopImage: "work/mahajan-vastra/hero",
    thumbImage: "work/mahajan-vastra/hero",
    projectLabel: "Client Sites",
    screenTone: "cream",
  },
  {
    id: "team",
    title: "Team",
    side: "right",
    desktopImage: "work/excellent-educators/hero",
    thumbImage: "work/excellent-educators/hero",
    projectLabel: "Excellent Educators",
    screenTone: "white",
  },
  {
    id: "integrations",
    title: "Integrations",
    side: "right",
    desktopImage: "services/custom",
    thumbImage: "services/custom",
    projectLabel: "Custom Software",
    screenTone: "cream",
  },
  {
    id: "mobile-app",
    title: "Mobile App",
    side: "right",
    desktopImage: "services/mobile",
    thumbImage: "services/mobile",
    projectLabel: "StudioLedger Mobile",
    screenTone: "cream",
  },
];

export const leftShowcaseItems = showcaseItems.filter((i) => i.side === "left");
export const rightShowcaseItems = showcaseItems.filter((i) => i.side === "right");
