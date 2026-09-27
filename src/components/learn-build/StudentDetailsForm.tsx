"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useStudentAction } from "./StudentActionContext";
import { getStudentProjectBySlug } from "@/data/studentProjects";
import { cn } from "@/lib/utils";
import { STRINGS } from "@/config/strings";
import { openWhatsApp } from "@/lib/whatsapp";

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-cyan-600 focus:outline-none focus:ring-1 focus:ring-cyan-600";

function buildStudentWhatsAppMessage(input: {
  name: string;
  email: string;
  phone: string;
  message?: string;
  customDemand?: string;
  isCareer: boolean;
  projectName?: string;
  projectPlatform?: string;
  items: { id: string; label: string; detail?: string; offerLabel?: string }[];
  sourcePage: string;
}) {
  const lines: string[] = [];

  if (input.isCareer) {
    lines.push("Hi PB IT HUB — I want to book *Free Career Guidance*.");
  } else {
    lines.push("Hi PB IT HUB — I want to place a *Learn or Buy* order.");
  }

  lines.push("");
  lines.push(`*Name:* ${input.name}`);
  lines.push(`*Email:* ${input.email}`);
  lines.push(`*Phone:* ${input.phone}`);

  if (input.projectName) {
    const platform = input.projectPlatform
      ? ` (${input.projectPlatform})`
      : "";
    lines.push(`*Project:* ${input.projectName}${platform}`);
  }

  if (input.customDemand?.trim()) {
    lines.push(`*Custom demand:* ${input.customDemand.trim()}`);
  }

  if (input.items.length) {
    lines.push("");
    lines.push("*Selected items:*");
    for (const item of input.items) {
      const badge = item.offerLabel ? ` [${item.offerLabel}]` : "";
      lines.push(`• ${item.label}${badge}`);
    }
  }

  if (input.message?.trim()) {
    lines.push("");
    lines.push(`*Message:* ${input.message.trim()}`);
  }

  lines.push("");
  lines.push(`Source: ${input.sourcePage}`);

  return lines.join("\n");
}

export function StudentDetailsForm() {
  const pathname = usePathname();
  const { selection, plan, closeDrawer, clearAll } = useStudentAction();
  const project = selection.projectSlug
    ? getStudentProjectBySlug(selection.projectSlug)
    : undefined;

  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    customDemand: "",
  });
  const isCustomProject = project?.slug === "custom-demand";
  const isCareer = plan.isFreeFlow;

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please complete name, email and phone.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email.");
      return;
    }

    if (isCustomProject && !form.customDemand.trim()) {
      setStatus("error");
      setErrorMessage("Please describe your project demands.");
      return;
    }

    const projectName = isCustomProject
      ? "Other — Write Your Demands"
      : project?.name;

    const text = buildStudentWhatsAppMessage({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      message: form.message,
      customDemand: form.customDemand,
      isCareer,
      projectName,
      projectPlatform: project?.platform,
      items: plan.items,
      sourcePage: pathname,
    });

    clearAll();
    closeDrawer();
    openWhatsApp(text);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
        {STRINGS.form.nameLabelSimple}
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={fieldClass}
          autoComplete="name"
          placeholder={STRINGS.form.namePlaceholder}
        />
      </label>
      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
        {STRINGS.form.emailLabelSimple}
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={fieldClass}
          autoComplete="email"
          placeholder={STRINGS.form.emailPlaceholder}
        />
      </label>
      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
        {STRINGS.form.phoneLabelSimple}
        <input
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={fieldClass}
          autoComplete="tel"
          placeholder={STRINGS.form.phonePlaceholder}
        />
      </label>

      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
        {STRINGS.form.messageLabel}
        <textarea
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={cn(fieldClass, "min-h-[5rem] resize-y")}
          placeholder={STRINGS.form.messagePlaceholder}
        />
      </label>

      {isCustomProject ? (
        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
          {STRINGS.form.customDemandLabel}
          <textarea
            required
            rows={4}
            value={form.customDemand}
            onChange={(e) => setForm({ ...form, customDemand: e.target.value })}
            className={cn(fieldClass, "min-h-[6rem] resize-y")}
            placeholder={STRINGS.form.customDemandPlaceholder}
          />
        </label>
      ) : null}

      {status === "error" ? (
        <p className="text-sm font-semibold text-rose-600" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-md transition hover:bg-slate-800 active:scale-[0.99] disabled:opacity-60"
      >
        {status === "loading"
          ? STRINGS.form.submitting
          : isCareer
            ? STRINGS.career.bookGuidanceShort
            : STRINGS.buy.completeOrder}
      </button>
    </form>
  );
}
