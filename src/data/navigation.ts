import { STRINGS } from "@/config/strings";

export interface NavItem {
  label: string;
  href: string;
}

export const primaryNav: NavItem[] = [
  { label: STRINGS.nav.home, href: "/" },
  { label: STRINGS.nav.services, href: "/services" },
  { label: STRINGS.nav.work, href: "/work" },
  { label: STRINGS.nav.learnAndBuild, href: "/learn-and-build" },
  { label: STRINGS.nav.about, href: "/about" },
  { label: STRINGS.nav.contact, href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: STRINGS.nav.services, href: "/services" },
  { label: STRINGS.nav.work, href: "/work" },
  { label: STRINGS.nav.learnAndBuild, href: "/learn-and-build" },
  { label: STRINGS.nav.locations, href: "/locations" },
  { label: STRINGS.nav.faq, href: "/faq" },
  { label: STRINGS.nav.blog, href: "/blog" },
  { label: STRINGS.nav.about, href: "/about" },
  { label: STRINGS.nav.contact, href: "/contact" },
];

export const studentBridgeNav: NavItem = {
  label: STRINGS.nav.learnAndBuild,
  href: "/learn-and-build",
};

export const legalNav: NavItem[] = [
  { label: STRINGS.nav.privacyPolicy, href: "/privacy" },
  { label: STRINGS.nav.termsConditions, href: "/terms" },
];
