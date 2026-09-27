"use client";

import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { STRINGS } from "@/config/strings";

export function FloatingWhatsApp() {
  const href = buildWhatsAppUrl(
    "Hi PB IT HUB — I’d like to connect on WhatsApp.",
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={STRINGS.footer.whatsapp}
      className="fixed bottom-20 right-4 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.45)] transition hover:scale-105 hover:bg-[#1ebe57] active:scale-95 lg:bottom-6 lg:right-6"
    >
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.86 11.86 0 0 0 5.74 1.46h.01c6.54 0 11.88-5.34 11.88-11.9 0-3.18-1.24-6.16-3.41-8.43ZM12.05 21.1h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.22-3.74.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.26C2.17 6.45 6.6 2 12.05 2a9.82 9.82 0 0 1 9.88 9.9c0 5.45-4.43 9.9-9.88 9.9Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
