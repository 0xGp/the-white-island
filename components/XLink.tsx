import { siteConfig } from "@/lib/site-config";
export default function XLink({ label = "Join on X", className = "btn btn-dark" }: { label?: string; className?: string }) {
  const p = siteConfig.xUrl ? { href: siteConfig.xUrl, target: "_blank", rel: "noopener noreferrer" } : { href: "#links", title: "[X LINK] — not linked yet" };
  return <a className={className} {...p}>{label} <span className="arrow" aria-hidden>↗</span></a>;
}
