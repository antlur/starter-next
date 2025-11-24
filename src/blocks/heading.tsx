import { decode } from "html-entities";

export default function Heading({ data, tunes }) {
  const textAlignment = getTextAlignment(tunes);
  const fontSizeClass = getFontSizeClass(data.level);
  const Tag = getTag(data.level);

  const className = [textAlignment, fontSizeClass, "pt-6 text-balance"].join(" ");

  const text = decode(data.text);

  return <Tag className={className}>{text}</Tag>;
}

function getTag(level = 1) {
  return `h${level}`;
}

function getTextAlignment(tunes): string | null {
  if (!tunes?.AlignmentTune?.alignment) return null;

  const classMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return classMap[tunes.AlignmentTune.alignment];
}

function getFontSizeClass(level = 1) {
  const classMap = {
    1: "text-5xl",
    2: "text-4xl",
    3: "text-3xl",
    4: "text-2xl",
    5: "text-xl",
    6: "text-lg",
  };

  return classMap[level] + " font-bold mb-4";
}
