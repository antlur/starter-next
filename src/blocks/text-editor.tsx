export default function TextEditor({ content }) {
  return <div className="py-12 mx-auto prose" dangerouslySetInnerHTML={{ __html: content }} />;
}
