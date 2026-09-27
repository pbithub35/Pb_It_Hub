"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { primaryNav } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { STRINGS } from "@/config/strings";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");
  const reduce = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
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

  const isHomeHero = pathname === "/" && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-navy/10 bg-paper/95 py-2 shadow-[0_4px_20px_rgba(15,23,42,0.07)] backdrop-blur-xl"
          : isHomeHero
            ? "border-transparent bg-transparent py-3"
            : "border-navy/8 bg-paper/95 py-2.5 backdrop-blur-md",
      )}
    >
      <motion.div
        className="container-wide"
        initial={reduce ? false : { y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between gap-3">
          <BrandLogo
            tone={isHomeHero ? "dark" : "light"}
            onClick={() => setActiveHash("")}
          />

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
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
                    "rounded-full px-3.5 py-1.5 text-[11px] font-medium tracking-[0.04em] transition-all xl:px-4 xl:text-xs",
                    active
                      ? "bg-blue text-white shadow-[0_8px_18px_rgba(29,78,216,0.32)]"
                      : isHomeHero
                        ? "text-white/75 hover:bg-white/10 hover:text-white"
                        : "text-navy/65 hover:bg-surface/70 hover:text-navy",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className={cn(
              "relative z-50 flex h-9 w-9 items-center justify-center rounded-full lg:hidden",
              isHomeHero
                ? "border border-white/25 bg-white/10 text-white"
                : "border border-navy/12 bg-off-white text-navy",
            )}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? STRINGS.nav.closeMenu : STRINGS.nav.openMenu}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">{STRINGS.nav.menu}</span>
            <div className="space-y-1.5">
              <span
                className={cn(
                  "block h-px w-3.5 transition",
                  isHomeHero ? "bg-white" : "bg-navy",
                  menuOpen && "translate-y-[3.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-px w-3.5 transition",
                  isHomeHero ? "bg-white" : "bg-navy",
                  menuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-px w-3.5 transition",
                  isHomeHero ? "bg-white" : "bg-navy",
                  menuOpen && "-translate-y-[3.5px] -rotate-45",
                )}
              />
            </div>
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 overflow-hidden bg-off-white/98 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="relative flex h-full flex-col px-5 pt-24 pb-8">
              <ul className="space-y-1">
                {primaryNav.map((item, index) => {
                  const active = isItemActive(item.href);
                  return (
                    <motion.li
                      key={item.href}
                      initial={reduce ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 * index }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={cn(
                          "block rounded-xl px-4 py-3 font-display text-base tracking-wide",
                          active
                            ? "bg-blue/10 font-semibold text-blue"
                            : "text-navy/80",
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-auto space-y-3 border-t border-navy/8 pt-6">
                <p className="text-center text-[10px] text-navy/40">
                  PB IT HUB · Product Engineering Partner
                </p>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
