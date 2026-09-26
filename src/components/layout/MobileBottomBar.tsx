"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { STRINGS } from "@/config/strings";

interface BottomNavItem {
  id: string;
  label: string;
  href: string;
  icon: (active: boolean) => React.ReactNode;
}

const bottomNavItems: BottomNavItem[] = [
  {
    id: "home",
    label: STRINGS.nav.home,
    href: "/",
    icon: (active) => (
      <svg
        className={cn("h-5 w-5 transition-transform", active && "scale-110")}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={active ? "2.2" : "1.8"}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    id: "services",
    label: STRINGS.nav.services,
    href: "/#services",
    icon: (active) => (
      <svg
        className={cn("h-5 w-5 transition-transform", active && "scale-110")}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={active ? "2.2" : "1.8"}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    id: "learn-and-build",
    label: STRINGS.nav.learnAndBuild,
    href: "/learn-and-build",
    icon: (active) => (
      <svg
        className={cn("h-5 w-5 transition-transform", active && "scale-110")}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={active ? "2.2" : "1.8"}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5"
        />
      </svg>
    ),
  },
  {
    id: "work",
    label: STRINGS.nav.work,
    href: "/#work",
    icon: (active) => (
      <svg
        className={cn("h-5 w-5 transition-transform", active && "scale-110")}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={active ? "2.2" : "1.8"}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
  },
  {
    id: "contact",
    label: STRINGS.nav.contact,
    href: "/contact",
    icon: (active) => (
      <svg
        className={cn("h-5 w-5 transition-transform", active && "scale-110")}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={active ? "2.2" : "1.8"}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
];

export function MobileBottomBar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    const onHashChange = () => {
      setActiveHash(window.location.hash || "");
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Track active section on homepage scroll
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["services", "work"];
    const elements = sections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const handleSectionScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 200) {
        setActiveHash("");
        return;
      }

      const navOffset = 220;
      for (let i = elements.length - 1; i >= 0; i--) {
        const el = elements[i];
        if (scrollY >= el.offsetTop - navOffset) {
          setActiveHash(`#${el.id}`);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleSectionScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleSectionScroll);
  }, [pathname]);

  const isItemActive = (href: string) => {
    const [itemPath, itemHash] = href.split("#");
    const targetHash = itemHash ? `#${itemHash}` : "";

    if (pathname === "/") {
      if (targetHash) {
        return activeHash === targetHash;
      }
      return href === "/" && (!activeHash || activeHash === "#hero");
    }

    if (href === "/") {
      return pathname === "/";
    }

    if (itemPath === "/learn-and-build") {
      return pathname.startsWith("/learn-and-build");
    }

    if (itemPath === "/contact") {
      return pathname.startsWith("/contact");
    }

    if (itemPath === "/services") {
      return pathname.startsWith("/services");
    }

    if (itemPath === "/work") {
      return pathname.startsWith("/work");
    }

    return pathname === itemPath;
  };

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy-deep/92 backdrop-blur-xl shadow-[0_-8px_30px_rgba(0,0,0,0.45)] lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="grid h-14 grid-cols-5 items-center px-1">
        {bottomNavItems.map((item) => {
          const active = isItemActive(item.href);
          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => {
                if (item.href.includes("#")) {
                  setActiveHash("#" + item.href.split("#")[1]);
                } else if (item.href === "/") {
                  setActiveHash("");
                }
              }}
              className={cn(
                "relative flex h-full flex-col items-center justify-center gap-1 transition-colors active:scale-95",
                active ? "text-cyan" : "text-white/50 hover:text-white/80",
              )}
            >
              {/* Icon */}
              <div className={cn("transition-colors", active ? "text-cyan" : "text-white/50")}>
                {item.icon(active)}
              </div>

              {/* Label */}
              <span
                className={cn(
                  "text-[9px] tracking-tight transition-all",
                  active
                    ? "font-bold text-cyan"
                    : "font-medium text-white/55",
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
