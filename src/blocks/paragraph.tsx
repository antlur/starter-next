import { decode } from "html-entities";

export default function Paragraph({ data, tunes }) {
  const textAlignment = getTextAlignment(tunes);
  const className = [textAlignment].join(" ");
  // decode HTML entities
  const text = decode(data.text);

  return <p className={className} dangerouslySetInnerHTML={{ __html: text }}></p>;
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
