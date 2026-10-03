"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { STRINGS } from "@/config/strings";
import { openWhatsApp, buildWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

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
    "Hi PB IT HUB — I want to *Start a Project*.",
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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: services[0]?.title ?? "Custom Web Applications",
    details: "",
  });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setMessage("Your project inquiry has been sent to our team via email! We will reply to your email shortly.");
      onSuccess?.();
    } catch (err: unknown) {
      console.error("Submission error:", err);
      // Fallback: construct mailto so user can still email directly without losing their content
      const subject = encodeURIComponent(`Project Inquiry: ${form.service} - ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nProject Details:\n${form.details}`,
      );
      const mailtoUrl = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      
      setStatus("error");
      setMessage("Could not connect to server. Click below to email directly or chat on WhatsApp.");
      window.open(mailtoUrl, "_blank");
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-navy/10 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted outline-none transition focus:border-blue/45 focus:ring-2 focus:ring-blue/15";

  if (status === "success") {
    const waText = buildBusinessWhatsAppMessage(form);
    const waUrl = buildWhatsAppUrl(waText);

    return (
      <div className={cn("space-y-5 rounded-2xl border border-emerald-500/20 bg-emerald-50/40 p-6 text-center", className)}>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-navy">
            Project Request Sent!
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-muted-strong leading-relaxed">
            Thank you, <strong className="text-ink">{form.name}</strong>. Your project brief has been emailed directly to our engineering team at <span className="font-medium text-blue">{siteConfig.email}</span>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700 active:scale-95"
          >
            <span>Continue on WhatsApp</span>
            <span>→</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setMessage("");
              setForm({
                name: "",
                email: "",
                phone: "",
                service: services[0]?.title ?? "Custom Web Applications",
                details: "",
              });
            }}
            className="inline-flex h-10 w-full sm:w-auto items-center justify-center rounded-xl border border-navy/15 bg-white px-4 text-xs font-medium text-navy transition hover:bg-off-white"
          >
            Send Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-4", className)} noValidate>
      <div className="rounded-xl border border-blue/15 bg-blue/[0.04] px-3.5 py-2.5 text-xs text-muted-strong">
        Fill the brief below — your request will be emailed directly to our team at {siteConfig.email}.
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2">
        <label className="block space-y-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
            {STRINGS.form.nameLabelSimple} <span className="text-blue">*</span>
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
            {STRINGS.form.emailLabelSimple} <span className="text-blue">*</span>
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
            {STRINGS.form.phoneLabelSimple}
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
          Project Details <span className="text-blue">*</span>
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
            Sends your project brief directly to our email.
          </p>
        )}
      </div>
    </form>
  );
}

