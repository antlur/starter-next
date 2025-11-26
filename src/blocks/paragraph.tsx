import { decode } from "html-entities";
import type { BlockTunes } from "@/types/backstage";

interface ParagraphData {
  text: string;
}

interface ParagraphProps {
  data: ParagraphData;
  tunes?: BlockTunes;
}

export default function Paragraph({ data, tunes }: ParagraphProps) {
  const textAlignment = getTextAlignment(tunes);
  const className = [textAlignment].filter(Boolean).join(" ");
  // decode HTML entities
  const text = decode(data.text);

  return <p className={className} dangerouslySetInnerHTML={{ __html: text }} />;
}

function getTextAlignment(tunes?: BlockTunes): string | null {
  if (!tunes?.AlignmentTune?.alignment) return null;

  const classMap: Record<string, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return classMap[tunes.AlignmentTune.alignment] ?? null;
}
