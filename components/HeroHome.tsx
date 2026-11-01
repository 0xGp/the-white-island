"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import XLink from "./XLink";
import CopyContract from "./CopyContract";
import Ornament from "./Ornament";
import StageNav from "./StageNav";
import { siteConfig } from "@/lib/site-config";

gsap.registerPlugin(useGSAP);

export default function HeroHome() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;
      const ease = "power3.out";
      gsap
        .timeline({ defaults: { ease } })
        .fromTo(
          ".hero-island",
          { "--reveal": "0%" },
          { "--reveal": "130%", duration: 1.4, ease: "power2.inOut" },
        )
        .from(".hero-waves-back", { yPercent: 30, autoAlpha: 0, duration: 1 }, 0.2)
        .from(".hero-waves-front", { yPercent: 45, autoAlpha: 0, duration: 1.1 }, 0.35)
        .from(".hero-copy > *", { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.08 }, 0.15);
    },
    { scope: root },
  );

  return (
    <div ref={root}>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-art" aria-hidden="true">
          <div className="hero-waves-back" />
          <div className="hero-island" />
          <div className="hero-waves-front" />
        </div>
        <div className="hero-copy">
          <span className="badge">
            ${siteConfig.ticker} <span aria-hidden="true">✦</span>
          </span>
          <h1 id="hero-title" className="display">
            THE WHITE
            <br />
            ISLAND
          </h1>
          <Ornament />
          <p className="hero-line">There is a shore the maps forgot.</p>
          <div className="btn-row">
            <XLink />
            <CopyContract address={siteConfig.contractAddress} />
            <Link className="btn-outline" href="/horizon">
              BEGIN THE VOYAGE <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <StageNav id="home" />
    </div>
  );
}
