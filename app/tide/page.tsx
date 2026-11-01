import Shell from "@/components/Shell";
import ChapterStage from "@/components/ChapterStage";
import { story } from "@/lib/copy";

export default function TidePage() {
  return (
    <Shell active="tide">
      <ChapterStage id="tide" chapter={story[1]} art="waves" />
    </Shell>
  );
}
