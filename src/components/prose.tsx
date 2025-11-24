export function Prose({ children = null, html }) {
  return <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: html }} />;
}
