import ResizeIframes from "@/hooks/use-resize-iframes";

export default function Html({ data }) {
  return (
    <>
      <ResizeIframes />
      <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
    </>
  );
}
