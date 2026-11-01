"use client";
import { useState } from "react";
export default function CopyContract({ address }: { address: string | null }) {
  const [copied, setCopied] = useState(false);
  const ok = !!address && address.trim().length > 0;
  return (
    <button type="button" className="mono" disabled={!ok} title={ok ? "Copy contract" : "Contract not yet live"}
      onClick={async () => { if (!ok) return; try { await navigator.clipboard.writeText(address!); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {} }}>
      {ok ? (copied ? "Copied ✓" : address) : "[CONTRACT ADDRESS — after verification]"}
    </button>
  );
}
