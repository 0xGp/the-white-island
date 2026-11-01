import Shell from "@/components/Shell";
import ChapterStage from "@/components/ChapterStage";
import { story } from "@/lib/copy";

export default function EmergencePage() {
  return (
    <Shell active="emergence">
      <ChapterStage id="emergence" chapter={story[2]} art="island" />
    </Shell>
  );
}
