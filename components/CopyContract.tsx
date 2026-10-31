"use client";
import { useState } from "react";

/** Outline pill. Disabled ("CONTRACT — SOON") until a verified address is set in site-config. */
export default function CopyContract({ address, className = "btn-outline" }: { address: string | null; className?: string }) {
  const [copied, setCopied] = useState(false);
  const verified = typeof address === "string" && address.trim().length > 0;
  return (
    <button
      type="button"
      className={className}
      disabled={!verified}
      aria-disabled={!verified}
      title={verified ? `Copy contract ${address}` : "Contract not yet live — will appear after verification"}
      onClick={async () => {
        if (!verified) return;
        try { await navigator.clipboard.writeText(address!); setCopied(true); setTimeout(() => setCopied(false), 1600); } catch {}
      }}
    >
      {verified ? (copied ? "COPIED ✓" : "COPY CONTRACT") : "CONTRACT — SOON"}
    </button>
  );
}
