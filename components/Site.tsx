"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lighthouse from "./Lighthouse";
import XLink from "./XLink";
import CopyContract from "./CopyContract";
import { siteConfig } from "@/lib/site-config";
import { story, about, monument, returnLines, faq, disclaimer } from "@/lib/copy";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Ornament = ({ className = "" }: { className?: string }) => (
  <div className={`ornament ${className}`} aria-hidden="true"><span /><b>✦</b><span /></div>
);

export default function Site() {
  const root = useRef<HTMLDivElement>(null);
  const heroCta = useRef<HTMLDivElement>(null);
  const [showBar, setShowBar] = useState(false);
  useEffect(() => {
    const el = heroCta.current;
    if (!el || !("IntersectionObserver" in window)) { setShowBar(true); return; }
    const io = new IntersectionObserver(([e]) => setShowBar(!e.isIntersecting && e.boundingClientRect.top < 0), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add({ desktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)", mobile: "(max-width: 767px) and (prefers-reduced-motion: no-preference)" }, (ctx) => {
      const { mobile } = ctx.conditions as { mobile: boolean };
      const ease = "power3.out";

      // hero intro: ink draws in, waves crash up, type presses on
      const intro = gsap.timeline({ defaults: { ease } });
      intro.fromTo(".hero-island", { "--reveal": "0%" }, { "--reveal": "130%", duration: 1.4, ease: "power2.inOut" })
        .from(".hero-waves-back", { yPercent: 30, autoAlpha: 0, duration: 1 }, 0.2)
        .from(".hero-waves-front", { yPercent: 45, autoAlpha: 0, duration: 1.1 }, 0.35)
        .from(".hero-copy > *", { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.08 }, 0.15);

      // hero parallax on scroll (scrubbed, reversible)
      gsap.timeline({ scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.6 } })
        .to(".hero-island", { yPercent: -10, ease: "none" }, 0)
        .to(".hero-waves-back", { yPercent: -4, xPercent: -3, ease: "none" }, 0)
        .to(".hero-waves-front", { yPercent: -22, xPercent: 4, ease: "none" }, 0)
        .to(".hero-copy", { yPercent: -14, autoAlpha: 0.2, ease: "none" }, 0);

      // pinned ink strip: three chapters, waves sweep across
      const cards = gsap.utils.toArray<HTMLElement>(".strip-card");
      const tl = gsap.timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: ".strip", start: "top top", end: mobile ? "+=160%" : "+=260%", pin: true, scrub: 0.8, invalidateOnRefresh: true } });
      tl.addLabel("horizon").fromTo(".strip-waves-a", { xPercent: 0 }, { xPercent: -30, duration: 3 }, 0)
        .fromTo(".strip-waves-b", { xPercent: -30 }, { xPercent: 0, duration: 3 }, 0)
        .fromTo(".strip-island", { yPercent: 40, scale: 0.7, "--reveal": "0%" }, { yPercent: 0, scale: 1, "--reveal": "130%", duration: 2.4 }, 0.3);
      gsap.set(cards.slice(1), { autoAlpha: 0, y: 30 });
      cards.forEach((c, i) => {
        if (i > 0) tl.addLabel(`ch${i}`, i).to(cards[i - 1], { autoAlpha: 0, y: -30, duration: 0.3 }, i - 0.15).to(c, { autoAlpha: 1, y: 0, duration: 0.3 }, i);
      });
      tl.to({}, { duration: 0.4 }, 3);

      gsap.from(".about-panel", { clipPath: "inset(12% 6% 12% 6% round 40px)", scrollTrigger: { trigger: ".about", start: "top 85%", end: "top 25%", scrub: 0.6 } });
      gsap.from(".about-inner > *", { y: 30, autoAlpha: 0, stagger: 0.1, duration: 0.7, ease, scrollTrigger: { trigger: ".about", start: "top 60%", toggleActions: "play none none reverse" } });
      gsap.from(".stamp", { scale: 1.6, rotate: -18, autoAlpha: 0, duration: 0.5, ease: "back.out(2)", scrollTrigger: { trigger: ".monument", start: "top 65%", toggleActions: "play none none reverse" } });
      gsap.from(".faq-item", { y: 20, autoAlpha: 0, stagger: 0.08, duration: 0.5, ease, scrollTrigger: { trigger: ".faq", start: "top 70%", toggleActions: "play none none reverse" } });
      gsap.to(".return-waves", { xPercent: -12, ease: "none", scrollTrigger: { trigger: ".return", start: "top bottom", end: "bottom top", scrub: true } });
      return () => intro.kill();
    });
  }, { scope: root });

  return (
    <div ref={root} className="site" id="top">
      <a className="skip" href="#main">Skip to content</a>
      <header className="nav">
        <a href="#top" className="brand" aria-label="Elysium home"><Lighthouse className="brand-icon" /><span>ELYSIUM</span></a>
        <nav aria-label="Primary" className="nav-links">
          <a href="#top">HOME</a><a href="#about">ABOUT</a><a href="#faq">FAQ</a>
        </nav>
        {siteConfig.xUrl
          ? <a className="btn-black" href={siteConfig.xUrl} target="_blank" rel="noopener noreferrer">JOIN THE ISLAND <span aria-hidden="true">↗</span></a>
          : <a className="btn-black" href="#footer" title="[X LINK] — not linked yet">JOIN THE ISLAND <span aria-hidden="true">↗</span></a>}
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-art" aria-hidden="true">
            <div className="hero-waves-back" />
            <div className="hero-island" />
            <div className="hero-waves-front" />
          </div>
          <div className="hero-copy">
            <span className="badge">$ELYSIUM <span aria-hidden="true">✦</span></span>
            <h1 id="hero-title" className="display">THE WHITE<br />ISLAND</h1>
            <Ornament />
            <p className="hero-line">There is a shore the maps forgot.</p>
            <div className="btn-row" ref={heroCta}>
              <XLink />
              <CopyContract address={siteConfig.contractAddress} />
            </div>
          </div>
        </section>

        <section className="strip" aria-label="The story">
          <div className="strip-art" aria-hidden="true">
            <div className="strip-island" />
            <div className="strip-waves-a" />
            <div className="strip-waves-b" />
          </div>
          <div className="strip-cards">
            {story.map((s) => (
              <article className="strip-card" key={s.n}>
                <p className="kicker">{s.n} — {s.title.toUpperCase()}</p>
                <h2 className="strip-title">{s.lines[0]}</h2>
                {s.lines.slice(1).map((l) => <p className="body" key={l}>{l}</p>)}
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="about-panel">
            <div className="about-inner">
              <p className="kicker kicker-light">04 — BEYOND THE SHORE</p>
              <h2 id="about-title" className="display display-md">{about.headline}</h2>
              <Ornament className="ornament-light" />
              <p className="body body-light">{about.body}</p>
              <p className="fraunces-accent">The Islands of the Blessed. Keep sailing.</p>
            </div>
          </div>
        </section>

        <section className="monument" aria-labelledby="stamp-title">
          <p className="kicker">05 — THE ISLAND&rsquo;S MONUMENT</p>
          <div className="stamp" role="img" aria-label="$ELYSIUM stamp">
            <div className="stamp-ring"><span>✦ THE WHITE ISLAND ✦ NOT BUILT. REMEMBERED.</span></div>
            <h2 id="stamp-title" className="stamp-word">{monument.word}</h2>
          </div>
          {monument.lines.map((l, i) => <p key={l} className={i ? "body center" : "fraunces-accent center"}>{l}</p>)}
        </section>

        <section className="faq" id="faq" aria-labelledby="faq-title">
          <h2 id="faq-title" className="display display-md">FAQ</h2>
          <div className="faq-list">
            {faq.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}<span aria-hidden="true">+</span></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="return" aria-label="The return to the sea">
          <p className="kicker">06 — THE RETURN TO THE SEA</p>
          {returnLines.map((l) => <p key={l} className="fraunces-accent center">{l}</p>)}
          <div className="return-waves" aria-hidden="true" />
        </section>
      </main>

      <footer className="footer" id="footer">
        <div className="postcard">
          <div className="postcard-left">
            <a href="#top" className="brand"><Lighthouse className="brand-icon" /><span>ELYSIUM</span></a>
            <p className="postcard-title">THE WHITE ISLAND — $ELYSIUM</p>
            <p className="small">{disclaimer}</p>
          </div>
          <div className="postcard-right">
            <dl className="postcard-rows">
              <div><dt>X</dt><dd>{siteConfig.xUrl ? <a href={siteConfig.xUrl} target="_blank" rel="noopener noreferrer">{siteConfig.xUrl}</a> : "[X LINK]"}</dd></div>
              {siteConfig.telegramUrl ? <div><dt>Telegram</dt><dd><a href={siteConfig.telegramUrl} target="_blank" rel="noopener noreferrer">{siteConfig.telegramUrl}</a></dd></div> : null}
              <div><dt>Contract</dt><dd><code>{siteConfig.contractAddress ?? "[CONTRACT ADDRESS — after verification]"}</code></dd></div>
              <div><dt>Trade</dt><dd>{siteConfig.tradingUrl ? <a href={siteConfig.tradingUrl} target="_blank" rel="noopener noreferrer">Trade</a> : "[TRADING LINK — only once live]"}</dd></div>
            </dl>
            <div className="btn-row"><CopyContract address={siteConfig.contractAddress} /><a className="btn-outline" href="#top">↑ RETURN TO THE HORIZON</a></div>
          </div>
        </div>
      </footer>

      <div className={`mobile-bar${showBar ? " is-visible" : ""}`} aria-label="Quick actions" aria-hidden={!showBar} inert={!showBar}>
        <XLink className="btn-black" label="JOIN ON" />
        <CopyContract address={siteConfig.contractAddress} className="btn-outline btn-outline-solid" />
      </div>
    </div>
  );
}
