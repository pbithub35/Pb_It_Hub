import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "PB IT HUB Pathankot — Best IT Company for Software, Websites & Student Projects",
    template: "%s · PB IT HUB",
  },
  description:
    "PB IT HUB is an IT company in Pathankot, Punjab — custom websites, apps, SaaS, AI solutions and final-year student projects with source code for BCA, MCA & B.Tech.",
  keywords: [
    "PB IT HUB",
    "PB IT HUB Pathankot",
    "pbithub",
    "pb it hub punjab",
    "best IT company in Pathankot",
    "best IT company in Punjab",
    "IT company Pathankot",
    "software company in Pathankot",
    "website development company Pathankot",
    "web design Pathankot",
    "app development Pathankot",
    "best software company Punjab",
    "IT services Jammu Himachal",
    "final year projects Pathankot",
    "student projects with source code",
    "final year projects BCA MCA BTech",
    "computer science projects",
    "React Flutter Python Node.js projects",
    "custom software development",
    "SaaS application development",
    "AI automation solutions",
    "software development Pathankot Punjab",
  ],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/icon.png"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "PB IT HUB Pathankot — Best IT Company for Software, Websites & Student Projects",
    description:
      "PB IT HUB is an IT company in Pathankot, Punjab — custom websites, apps, SaaS, AI solutions and final-year student projects with source code for BCA, MCA & B.Tech.",
    images: [{ url: "/images/pb-it-hub-dark.jpg", alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PB IT HUB Pathankot — Best IT Company for Software, Websites & Student Projects",
    description:
      "PB IT HUB is an IT company in Pathankot, Punjab — custom websites, apps, SaaS, AI solutions and final-year student projects with source code for BCA, MCA & B.Tech.",
    images: ["/images/pb-it-hub-dark.jpg"],
  },
  robots: { index: true, follow: true },
  verification: {
    google: "9HS6OMGZ7q_bgWuMfXBvHaroK7kWizbVzY4mfMU4ovI",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
