import { decode } from "html-entities";
import type { BlockTunes } from "@/types/backstage";
import type { ElementType } from "react";

interface HeadingData {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

interface HeadingProps {
  data: HeadingData;
  tunes?: BlockTunes;
}

export default function Heading({ data, tunes }: HeadingProps) {
  const textAlignment = getTextAlignment(tunes);
  const fontSizeClass = getFontSizeClass(data.level);
  const Tag = getTag(data.level);

  const className = [textAlignment, fontSizeClass, "pt-6 text-balance"].filter(Boolean).join(" ");

  const text = decode(data.text);

  return <Tag className={className}>{text}</Tag>;
}

function getTag(level = 1) {
  const tags = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6",
  } as const;
  return tags[level as keyof typeof tags] ?? "h1";
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

function getFontSizeClass(level = 1): string {
  const classMap: Record<number, string> = {
    1: "text-5xl",
    2: "text-4xl",
    3: "text-3xl",
    4: "text-2xl",
    5: "text-xl",
    6: "text-lg",
  };

  return classMap[level] ?? "text-xl";
}
