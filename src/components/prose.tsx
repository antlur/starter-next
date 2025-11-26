import { ReactNode } from "react";

interface ProseProps {
  children?: ReactNode;
  html: string;
}

export function Prose({ children = null, html }: ProseProps) {
  return <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: html }} />;
}
