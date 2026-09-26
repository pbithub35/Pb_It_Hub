"use client";

import { useState } from "react";
import type { ResourceCodeBlock } from "@/types/student-resource";

export function ResourceCodeBlock({ block }: { block: ResourceCodeBlock }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(block.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950/80">
      <div className="flex items-center justify-between gap-3 border-b border-slate-800 px-4 py-2.5">
        <p className="truncate font-mono text-xs text-slate-300">
          {block.filename}
          <span className="ml-2 text-slate-500">{block.language}</span>
        </p>
        <button
          type="button"
          onClick={handleCopy}
          className="shrink-0 rounded-md border border-slate-700 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-300"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="max-h-[28rem] overflow-auto p-4 text-[12px] leading-relaxed text-slate-200 md:text-[13px]">
        <code>{block.code}</code>
      </pre>
    </div>
  );
}
