"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { primaryNav } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useContactModal } from "@/components/forms/ContactModalContext";
import { getMediaSrc } from "@/lib/media";
import { STRINGS } from "@/config/strings";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");
  const { openModal } = useContactModal();
  const reduce = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      setActiveHash(window.location.hash || "");
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Track active section when scrolling on homepage
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["services", "work", "technologies", "about"];
    const elements = sections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const handleSectionScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 200) {
        setActiveHash("");
        return;
      }

      const navOffset = 180;
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

    if (itemPath === "/about") {
      return pathname.startsWith("/about");
    }

    return pathname === itemPath;
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/8 bg-navy-deep/85 py-2.5 backdrop-blur-xl"
          : "bg-transparent py-3.5 md:py-5",
      )}
    >
      <div className="container-wide flex items-center justify-between gap-3">
        <Link
          href="/"
          className="relative z-50 flex items-center gap-2.5"
          aria-label={`${siteConfig.name} home`}
          onClick={() => setActiveHash("")}
        >
          <Image
            src={getMediaSrc("brand/logo")}
            alt={siteConfig.name}
            width={32}
            height={32}
            className="h-8 w-8 rounded-md object-cover md:h-9 md:w-9"
            priority
          />
          <span className="font-display text-xs tracking-[0.1em] text-white md:text-sm md:tracking-[0.12em]">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-4 xl:gap-6 2xl:gap-7 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            const active = isItemActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  if (item.href.includes("#")) {
                    setActiveHash("#" + item.href.split("#")[1]);
                  } else if (item.href === "/") {
                    setActiveHash("");
                  }
                }}
                className={cn(
                  "text-[10px] uppercase tracking-[0.14em] transition-all xl:text-xs xl:tracking-[0.16em] py-1",
                  active
                    ? "font-bold text-white underline underline-offset-8 decoration-2 decoration-cyan"
                    : "font-medium text-white/65 hover:text-white hover:underline hover:underline-offset-8 hover:decoration-white/30",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            size="sm"
            onClick={openModal}
            className="h-10 min-w-[9.5rem] rounded-full px-5 text-[11px] font-bold tracking-[0.14em] shadow-[0_8px_28px_rgba(59,130,246,0.4)]"
          >
            {STRINGS.hero.ctaProject}
          </Button>
        </div>

        <button
          type="button"
          className="relative z-50 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? STRINGS.nav.closeMenu : STRINGS.nav.openMenu}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">{STRINGS.nav.menu}</span>
          <div className="space-y-1.5">
            <span
              className={cn(
                "block h-px w-3.5 bg-white transition",
                menuOpen && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-3.5 bg-white transition",
                menuOpen && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-navy-deep/95 backdrop-blur-2xl lg:hidden overflow-hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Ambient Grid and Glow inside mobile drawer */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 grid-fade opacity-60" />
              <div className="absolute top-10 right-0 h-64 w-64 rounded-full bg-cyan/15 blur-[100px]" />
              <div className="absolute bottom-20 left-0 h-64 w-64 rounded-full bg-blue/15 blur-[100px]" />
            </div>

            <nav
              className="relative flex h-full flex-col px-5 pt-24 pb-8"
              aria-label="Mobile"
            >
              <div className="mb-4 flex items-center justify-between px-1">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan">
                  Navigation
                </span>
                <span className="flex items-center gap-1.5 text-[10px] text-white/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                  Online
                </span>
              </div>

              <ul className="space-y-2">
                {primaryNav.map((item, index) => {
                  const active = isItemActive(item.href);
                  return (
                    <motion.li
                      key={item.href}
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between rounded-lg border px-4 py-3.5 backdrop-blur-md transition-all active:scale-[0.98]",
                          active
                            ? "border-cyan/50 bg-cyan/15 text-white"
                            : "border-white/10 bg-white/[0.04] text-white/80 active:border-cyan/40 active:bg-white/[0.08]",
                        )}
                        onClick={() => {
                          if (item.href.includes("#")) {
                            setActiveHash("#" + item.href.split("#")[1]);
                          } else if (item.href === "/") {
                            setActiveHash("");
                          }
                          setMenuOpen(false);
                        }}
                      >
                        <span
                          className={cn(
                            "font-display text-base tracking-wide",
                            active
                              ? "font-bold text-cyan"
                              : "font-medium text-white/90",
                          )}
                        >
                          {item.label}
                        </span>
                        <span
                          className={cn(
                            "text-xs font-bold",
                            active ? "text-cyan" : "text-white/40",
                          )}
                          aria-hidden
                        >
                          {active ? "●" : "→"}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-auto space-y-3 pt-6 border-t border-white/8">
                <Button
                  className="w-full shadow-[0_0_24px_rgba(59,130,246,0.35)]"
                  size="md"
                  onClick={() => {
                    setMenuOpen(false);
                    openModal();
                  }}
                >
                  {STRINGS.hero.ctaProject}
                </Button>
                <p className="text-center text-[10px] text-white/40">
                  PB_IT_HUB · Product Engineering Partner
                </p>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
