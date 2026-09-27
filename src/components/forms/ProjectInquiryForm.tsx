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
  }

  const fieldClass =
    "w-full rounded-[var(--radius-md)] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-blue/60 focus:bg-white/8";

  return (
    <form onSubmit={onSubmit} className={cn("space-y-4", className)} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-xs uppercase tracking-[0.14em] text-white/50">
            {STRINGS.form.nameLabel}
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
        <label className="block space-y-2">
          <span className="text-xs uppercase tracking-[0.14em] text-white/50">
            {STRINGS.form.emailLabel}
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

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-xs uppercase tracking-[0.14em] text-white/50">
            {STRINGS.form.phoneLabel}
          </span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className={fieldClass}
            placeholder="+91 ..."
          />
        </label>
        <label className="block space-y-2">
          <span className="text-xs uppercase tracking-[0.14em] text-white/50">
            {STRINGS.form.serviceLabel}
          </span>
          <select
            name="service"
            value={form.service}
            onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
            className={cn(fieldClass, "appearance-none")}
          >
            {services.map((service) => (
              <option key={service.slug} value={service.title} className="text-navy">
                {service.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block space-y-2">
        <span className="text-xs uppercase tracking-[0.14em] text-white/50">
          {STRINGS.form.projectDetailsLabel}
        </span>
        <textarea
          required
          name="details"
          rows={5}
          value={form.details}
          onChange={(e) => setForm((f) => ({ ...f, details: e.target.value }))}
          className={cn(fieldClass, "resize-y min-h-[120px]")}
          placeholder={STRINGS.form.projectDetailsPlaceholder}
        />
      </label>

      <div className="flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          size="lg"
          disabled={status === "loading"}
          className="w-full sm:w-auto sm:min-w-[240px]"
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
              status === "error" ? "text-red-300" : "text-cyan",
            )}
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
