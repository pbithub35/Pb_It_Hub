import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "PB_IT_HUB — Software Development, AI Solutions & Student Projects",
    template: "%s · PB_IT_HUB",
  },
  description:
    "PB_IT_HUB delivers custom web applications, SaaS platforms, AI solutions, and industry-grade student projects with source code for BCA, MCA, B.Tech & CS/IT students.",
  keywords: [
    "student projects with source code",
    "final year projects BCA MCA BTech",
    "computer science projects",
    "React Flutter Python Node.js projects",
    "custom software development",
    "SaaS application development",
    "AI automation solutions",
    "software development Pathankot Punjab",
    "PB_IT_HUB",
  ],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "PB_IT_HUB — Software Development, AI Solutions & Student Projects",
    description:
      "PB_IT_HUB delivers custom web applications, SaaS platforms, AI solutions, and industry-grade student projects with source code for BCA, MCA, B.Tech & CS/IT students.",
    images: [{ url: "/images/pb-it-hub-dark.jpg", alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PB_IT_HUB — Software Development, AI Solutions & Student Projects",
    description:
      "PB_IT_HUB delivers custom web applications, SaaS platforms, AI solutions, and industry-grade student projects with source code for BCA, MCA, B.Tech & CS/IT students.",
    images: ["/images/pb-it-hub-dark.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
