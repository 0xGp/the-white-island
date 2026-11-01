import Shell from "@/components/Shell";
import ChapterStage from "@/components/ChapterStage";
import { story } from "@/lib/copy";

export default function HorizonPage() {
  return (
    <Shell active="horizon">
      <ChapterStage id="horizon" chapter={story[0]} art="waves" />
    </Shell>
  );
}
