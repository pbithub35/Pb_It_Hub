"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { STRINGS } from "@/config/strings";
import { openWhatsApp } from "@/lib/whatsapp";

interface ProjectInquiryFormProps {
  className?: string;
  onSuccess?: () => void;
}

function buildBusinessWhatsAppMessage(form: {
  name: string;
  email: string;
  phone: string;
  service: string;
  details: string;
}) {
  const lines = [
    "Hi PB_IT_HUB — I want to *Start a Project*.",
    "",
    `*Name:* ${form.name.trim()}`,
    `*Email:* ${form.email.trim()}`,
  ];
  if (form.phone.trim()) {
    lines.push(`*Phone:* ${form.phone.trim()}`);
  }
  lines.push(`*Service:* ${form.service}`);
  lines.push("");
  lines.push("*Project details:*");
  lines.push(form.details.trim());
  return lines.join("\n");
}

export function ProjectInquiryForm({
  className,
  onSuccess,
}: ProjectInquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: services[0]?.title ?? "Custom Web Applications",
    details: "",
  });

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    if (!form.name.trim() || !form.email.trim() || !form.details.trim()) {
      setStatus("error");
      setMessage("Please complete the required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus("error");
      setMessage("Please enter a valid work email.");
      return;
    }

    const text = buildBusinessWhatsAppMessage(form);
    onSuccess?.();
    openWhatsApp(text);
    setStatus("idle");
  }

  const fieldClass =
    "w-full rounded-xl border border-navy/10 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted outline-none transition focus:border-blue/45 focus:ring-2 focus:ring-blue/15";

  return (
    <form onSubmit={onSubmit} className={cn("space-y-4", className)} noValidate>
      <div className="rounded-xl border border-blue/15 bg-blue/[0.04] px-3.5 py-2.5 text-xs text-muted-strong">
        Fill the brief below — we continue on WhatsApp with your details ready.
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2">
        <label className="block space-y-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
            {STRINGS.form.nameLabel} <span className="text-blue">*</span>
          </span>
          <input
            required
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className={fieldClass}
            placeholder={STRINGS.form.namePlaceholder}
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
            {STRINGS.form.emailLabel} <span className="text-blue">*</span>
          </span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className={fieldClass}
            placeholder={STRINGS.form.emailPlaceholder}
          />
        </label>
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2">
        <label className="block space-y-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
            {STRINGS.form.phoneLabel}
          </span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className={fieldClass}
            placeholder="+91 9XXXXXXXXX"
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
            {STRINGS.form.serviceLabel}
          </span>
          <div className="relative">
            <select
              name="service"
              value={form.service}
              onChange={(e) =>
                setForm((f) => ({ ...f, service: e.target.value }))
              }
              className={cn(fieldClass, "appearance-none pr-10")}
            >
              {services.map((service) => (
                <option
                  key={service.slug}
                  value={service.title}
                  className="text-ink"
                >
                  {service.title}
                </option>
              ))}
            </select>
            <span
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted"
              aria-hidden
            >
              ▾
            </span>
          </div>
        </label>
      </div>

      <label className="block space-y-1.5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
          {STRINGS.form.projectDetailsLabel}{" "}
          <span className="text-blue">*</span>
        </span>
        <textarea
          required
          name="details"
          rows={5}
          value={form.details}
          onChange={(e) => setForm((f) => ({ ...f, details: e.target.value }))}
          className={cn(fieldClass, "min-h-[130px] resize-y")}
          placeholder={STRINGS.form.projectDetailsPlaceholder}
        />
      </label>

      <div className="flex flex-col gap-3 border-t border-navy/8 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={status === "loading"}
          className="w-full shrink-0 sm:w-auto sm:min-w-[240px]"
        >
          {status === "loading"
            ? STRINGS.form.sending
            : STRINGS.form.sendProjectRequest}
        </Button>
        {message ? (
          <p
            role="status"
            className={cn(
              "text-sm",
              status === "error" ? "text-red-600" : "text-blue",
            )}
          >
            {message}
          </p>
        ) : (
          <p className="text-xs leading-snug text-muted sm:max-w-[200px] sm:text-right">
            Opens WhatsApp with your brief pre-filled.
          </p>
        )}
      </div>
    </form>
  );
}
