import Shell from "@/components/Shell";
import PageMotion from "@/components/PageMotion";
import StageNav from "@/components/StageNav";
import { monument } from "@/lib/copy";

export default function MonumentPage() {
  return (
    <Shell active="monument">
      <PageMotion>
        <section className="monument monument-page" aria-labelledby="stamp-title">
          <p className="kicker" data-rise>
            05 — THE ISLAND&rsquo;S MONUMENT
          </p>
          <div className="stamp" role="img" aria-label={`${monument.word} stamp`} data-rise>
            <div className="stamp-ring">
              <span>✦ THE WHITE ISLAND ✦ NOT BUILT. REMEMBERED.</span>
            </div>
            <h1 id="stamp-title" className="stamp-word">
              {monument.word}
            </h1>
          </div>
          {monument.lines.map((l, i) => (
            <p key={l} className={i ? "body center" : "fraunces-accent center"} data-rise>
              {l}
            </p>
          ))}
        </section>
        <StageNav id="monument" />
      </PageMotion>
    </Shell>
  );
}
