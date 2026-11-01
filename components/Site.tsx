"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { siteConfig as c } from "@/lib/site-config";
import XLink from "./XLink";
import CopyContract from "./CopyContract";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ph = (v: string | null, p: string) => v ?? p;
const ticker = [
  ["Contract", c.contractAddress ? "Live" : "Not live yet"],
  ["Trade", c.tradingUrl ? "Open" : "[TRADING LINK]"],
  ["Type", "Community meme"],
  ["Ticker", "$" + c.ticker],
  ["X", c.xUrl ? "@ official" : "[X LINK]"],
];
const chapters = [
  { n: "01", t: "The Horizon", img: "/ink/ch1.png", d: ["Every sailor has seen it once.", "A pale shape at the edge of the world, there and then not."] },
  { n: "02", t: "The Rising Tide", img: "/ink/ch2.png", d: ["The sea grows tall.", "Old voices call it Oceanus, the river that circles everything.", "Hold your course."] },
  { n: "03", t: "The Emergence", img: "/ink/ch3.png", d: ["White cliffs rise out of the mist, older than the songs that named them.", "The island does not appear. It allows itself to be seen."] },
];
const principles = [
  { n: "01", t: "A meme, not a product", d: "Built around a story. No utility or financial return is promised." },
  { n: "02", t: "Verified links only", d: "Contract, X and trading links appear here only after verification." },
  { n: "03", t: "The island keeps its silence", d: "The sea carries you there, and you hold your course." },
];
const faq = [
  ["What is $ELYSIUM?", "A community meme token built around the story of The White Island. It is not an investment product and promises nothing."],
  ["Where is the contract address?", "It is not published yet. It will appear on this page only after it is verified from official channels. Until then, treat any address you see elsewhere with caution."],
  ["Will it go up? Are there returns?", "No promises. Meme tokens are highly volatile and you can lose everything you put in. Never spend more than you can afford to lose."],
  ["How do I join?", "Follow the official X account once it is linked here. Links that are not yet verified are shown as placeholders."],
];

export default function Site() {
  const root = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".h-badge", { y: 14, opacity: 0, duration: .6 })
        .from(".h-line", { yPercent: 110, duration: 1, stagger: .12 }, "-=.3")
        .from(".h-fade", { y: 18, opacity: 0, duration: .7, stagger: .08 }, "-=.6")
        .from(".hero-card", { y: 50, opacity: 0, scale: .98, duration: 1.1 }, "-=.6");
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) =>
        gsap.from(el, { y: 40, opacity: 0, duration: .9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } }));
      gsap.utils.toArray<HTMLElement>(".parallax img").forEach((img) =>
        gsap.fromTo(img, { yPercent: -6 }, { yPercent: 6, ease: "none", scrollTrigger: { trigger: img.parentElement, scrub: true } }));
      const track = document.querySelector(".ticker-track");
      if (track) gsap.to(track, { xPercent: -50, duration: 30, ease: "none", repeat: -1 });
    });
  }, { scope: root });

  return (
    <div ref={root} className="page">
      <a className="skip" href="#main">Skip to content</a>
      <header className="nav">
        <a href="#top" className="brand"><span className="dot" />The White Island</a>
        <nav className="nav-links"><a href="#story">Story</a><a href="#about">About</a><a href="#faq">FAQ</a><a href="#links">Links</a></nav>
        <XLink label="Join" className="btn btn-dark btn-sm" />
      </header>

      <main id="main">
        <section id="top" className="hero">
          <div className="glow" aria-hidden />
          <p className="h-badge pill-row"><span className="badge">$ELYSIUM</span><span className="mute">Contract not live yet</span></p>
          <h1 className="display">
            <span className="mask"><span className="h-line">The White Island,</span></span>
            <span className="mask"><em className="h-line grey">beyond the horizon.</em></span>
          </h1>
          <p className="h-fade lead">There is a shore the maps forgot. A community meme token for the Islands of the Blessed.</p>
          <div className="h-fade ctas"><XLink /><a href="#story" className="btn btn-light">Continue → story</a></div>
          <p className="h-fade tiny mute">Meme token · No promised returns · Not financial advice</p>
          <div className="hero-card parallax">
            <span className="badge tag-l">✦ Islands of the Blessed</span>
            <span className="tag-r">Keep sailing →</span>
            <img src="/ink/hero.png" alt="Ink illustration of a lighthouse on a rocky island above crashing waves" />
          </div>
        </section>

        <section className="ticker" aria-label="Status at a glance">
          <p className="tiny mute center">Status at a glance — placeholders until verified</p>
          <div className="ticker-wrap"><div className="ticker-track">
            {[...ticker, ...ticker, ...ticker, ...ticker].map(([k, v], i) => <span key={i} className="chip"><b>{k}</b>{v}</span>)}
          </div></div>
        </section>

        <section id="story" className="sec center">
          <span className="label reveal">The story</span>
          <h2 className="h2 reveal">Three chapters,<br /><em className="grey">one shoreline.</em></h2>
          <p className="mute sub reveal">Every sailor has seen it once. Here is how the island lets itself be seen.</p>
          <div className="grid3">
            {chapters.map((ch) => (
              <article key={ch.n} className="card reveal">
                <div className="card-img parallax"><img src={ch.img} alt={`Ink illustration for ${ch.t}`} /></div>
                <div className="card-body"><span className="num">{ch.n}</span><h3>{ch.t}</h3>{ch.d.map((l) => <p key={l}>{l}</p>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="sec">
          <div className="feature reveal">
            <div className="feature-img parallax"><img src="/ink/feature.png" alt="Ink lighthouse island on a sand-coloured ground" /></div>
            <div className="feature-copy">
              <span className="badge">⚲ Beyond the shore</span>
              <h2 className="h2 light">Beyond the horizon,<br /><em className="lav">another world.</em></h2>
              <p>The ancients wrote of the Islands of the Blessed, a place past the western sea where winds are soft and the light never hardens. They never drew the way there. They only said: keep sailing.</p>
              <a href="#faq" className="btn btn-sand">Read the FAQ <span className="arrow">↗</span></a>
            </div>
          </div>
        </section>

        <section className="sec statement">
          <h2 className="h2 reveal">Not built.<br />Remembered.<br /><em className="grey">A monument of salt and stone.</em></h2>
          <div className="reveal"><p className="ticker-big">${c.ticker}</p><p className="mute">A monument of salt and stone, standing where the story ends and begins again.</p></div>
        </section>

        <section className="sec">
          <div className="principles">
            {principles.map((p) => <div key={p.n} className="pcard reveal"><span className="num mute">{p.n}</span><h3>{p.t}</h3><p className="mute">{p.d}</p></div>)}
          </div>
        </section>

        <section id="faq" className="sec center">
          <span className="label reveal">FAQ</span>
          <h2 className="h2 reveal">Questions from <em className="grey">the shore.</em></h2>
          <div className="faq">
            {faq.map(([q, a]) => <details key={q} className="reveal"><summary>{q}<span aria-hidden>+</span></summary><p>{a}</p></details>)}
          </div>
        </section>

        <section id="links" className="sec">
          <div className="cta reveal">
            <div>
              <h2 className="h2 light">The mist closes.<br /><em className="grey2">Hold your course.</em></h2>
              <div className="ctas left"><XLink className="btn btn-white" /><a href="#top" className="btn btn-ghost">Back to the horizon ↑</a></div>
            </div>
            <dl className="links">
              <div><dt>X</dt><dd>{c.xUrl ? <a href={c.xUrl} target="_blank" rel="noopener noreferrer">{c.xUrl}</a> : "[X LINK]"}</dd></div>
              <div><dt>Telegram</dt><dd>{c.telegramUrl ? <a href={c.telegramUrl} target="_blank" rel="noopener noreferrer">{c.telegramUrl}</a> : "[TELEGRAM LINK — only if supplied]"}</dd></div>
              <div><dt>Contract</dt><dd><CopyContract address={c.contractAddress} /></dd></div>
              <div><dt>Trade</dt><dd>{c.tradingUrl ? <a href={c.tradingUrl} target="_blank" rel="noopener noreferrer">Trade ↗</a> : ph(null, "[TRADING LINK — only once live]")}</dd></div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="foot">
        <span className="brand"><span className="dot" />The White Island</span>
        <p className="tiny mute">$ELYSIUM is a community meme token with no promised utility or financial return. Nothing here is financial advice. Only trust links verified on this page.</p>
      </footer>
    </div>
  );
}
