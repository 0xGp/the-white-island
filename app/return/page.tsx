import Shell from "@/components/Shell";
import PageMotion from "@/components/PageMotion";
import StageNav from "@/components/StageNav";
import { returnLines } from "@/lib/copy";

export default function ReturnPage() {
  return (
    <Shell active="return">
      <PageMotion>
        <section className="return return-page" aria-label="The return to the sea">
          <p className="kicker" data-rise>
            06 — THE RETURN TO THE SEA
          </p>
          {returnLines.map((l) => (
            <p key={l} className="fraunces-accent center" data-rise>
              {l}
            </p>
          ))}
          <div className="return-waves" aria-hidden="true" />
        </section>
        <StageNav id="return" />
      </PageMotion>
    </Shell>
  );
}
