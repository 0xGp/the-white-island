"use client";

import PageMotion from "./PageMotion";
import StageNav from "./StageNav";
import type { StageId } from "@/lib/stages";

type Chapter = {
  n: string;
  title: string;
  lines: string[];
};

export default function ChapterStage({
  id,
  chapter,
  art = "island",
}: {
  id: StageId;
  chapter: Chapter;
  art?: "island" | "waves";
}) {
  return (
    <PageMotion>
      <section className={`chapter chapter-${art}`} aria-labelledby={`${id}-title`}>
        <div className="chapter-art" aria-hidden="true">
          {art === "island" ? <div className="strip-island" /> : null}
          <div className="strip-waves-a" />
          <div className="strip-waves-b" />
        </div>
        <article className="strip-card chapter-card" data-rise>
          <p className="kicker">
            {chapter.n} — {chapter.title.toUpperCase()}
          </p>
          <h1 id={`${id}-title`} className="strip-title">
            {chapter.lines[0]}
          </h1>
          {chapter.lines.slice(1).map((l) => (
            <p className="body" key={l} data-rise>
              {l}
            </p>
          ))}
        </article>
      </section>
      <StageNav id={id} />
    </PageMotion>
  );
}
