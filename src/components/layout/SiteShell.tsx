"use client";

import { ContactModalProvider } from "@/components/forms/ContactModalContext";
import { ContactModal } from "@/components/forms/ContactModal";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <ContactModalProvider>
      <Navbar />
      <main className="flex-1 pb-16 lg:pb-0">{children}</main>
      <Footer />
      <ContactModal />
      <MobileBottomBar />
    </ContactModalProvider>
  );
}
