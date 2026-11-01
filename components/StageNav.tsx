import Link from "next/link";
import { getStage, stages, type StageId } from "@/lib/stages";

/** Previous / next stage controls for multi-page voyage. */
export default function StageNav({ id }: { id: StageId }) {
  const { prev, next, index, stage } = getStage(id);
  return (
    <nav className="stage-nav" aria-label="Stage navigation">
      <div className="stage-nav-meta">
        <p className="kicker">{stage.kicker}</p>
        <p className="stage-count">
          Stage {index + 1} of {stages.length}
        </p>
      </div>
      <div className="stage-nav-actions">
        {prev ? (
          <Link className="btn-outline" href={prev.href}>
            ← {prev.label.toUpperCase()}
          </Link>
        ) : (
          <span className="btn-outline" aria-disabled="true" style={{ opacity: 0.35 }}>
            ← START
          </span>
        )}
        {next ? (
          <Link className="btn-black" href={next.href}>
            NEXT · {next.label.toUpperCase()} <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <Link className="btn-black" href="/">
            RETURN HOME <span aria-hidden="true">↑</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
