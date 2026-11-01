import Link from "next/link";
import XLink from "./XLink";
import type { StageId } from "@/lib/stages";
import { siteConfig } from "@/lib/site-config";

export default function Shell({
  active,
  children,
}: {
  active: StageId;
  children: React.ReactNode;
}) {
  return (
    <div className="page shell">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="nav">
        <Link href="/" className="brand">
          <span className="dot" />
          {siteConfig.name}
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link href="/horizon" aria-current={active === "horizon" ? "page" : undefined}>
            Story
          </Link>
          <Link href="/about" aria-current={active === "about" ? "page" : undefined}>
            About
          </Link>
          <Link href="/faq" aria-current={active === "faq" ? "page" : undefined}>
            FAQ
          </Link>
          <Link href="/monument" aria-current={active === "monument" ? "page" : undefined}>
            Monument
          </Link>
        </nav>
        <XLink label="Join" className="btn btn-dark btn-sm" />
      </header>
      <main id="main">{children}</main>
    </div>
  );
}
