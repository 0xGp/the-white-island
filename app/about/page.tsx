import Shell from "@/components/Shell";
import PageMotion from "@/components/PageMotion";
import StageNav from "@/components/StageNav";
import Ornament from "@/components/Ornament";
import { about } from "@/lib/copy";

export default function AboutPage() {
  return (
    <Shell active="about">
      <PageMotion>
        <section className="about about-page" id="about" aria-labelledby="about-title">
          <div className="about-panel" data-rise>
            <div className="about-inner">
              <p className="kicker kicker-light">04 — BEYOND THE SHORE</p>
              <h1 id="about-title" className="display display-md">
                {about.headline}
              </h1>
              <Ornament className="ornament-light" />
              <p className="body body-light">{about.body}</p>
              <p className="fraunces-accent">The Islands of the Blessed. Keep sailing.</p>
            </div>
          </div>
        </section>
        <StageNav id="about" />
      </PageMotion>
    </Shell>
  );
}
