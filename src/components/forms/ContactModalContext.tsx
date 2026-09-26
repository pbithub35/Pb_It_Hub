"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface ContactModalContextValue {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextValue | null>(
  null,
);

export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, openModal, closeModal }),
    [open, openModal, closeModal],
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return ctx;
}
