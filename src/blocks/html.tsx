import ResizeIframes from "@/hooks/use-resize-iframes";

interface HtmlData {
  html: string;
}

interface HtmlProps {
  data: HtmlData;
}

export default function Html({ data }: HtmlProps) {
  return (
    <ResizeIframes>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </ResizeIframes>
  );
}
