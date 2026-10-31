import { siteConfig } from "@/lib/site-config";
const XGlyph = () => (<svg viewBox="0 0 24 24" className="x-glyph" aria-hidden="true"><path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" /></svg>);

export default function XLink({ className = "btn-outline", label = "JOIN ON" }: { className?: string; label?: string }) {
  if (siteConfig.xUrl)
    return <a className={className} href={siteConfig.xUrl} target="_blank" rel="noopener noreferrer">{label} <XGlyph /></a>;
  return <a className={className} href="#footer" title="[X LINK] — official account not linked yet">{label} <XGlyph /></a>;
}
