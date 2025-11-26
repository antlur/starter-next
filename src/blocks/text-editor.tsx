interface TextEditorProps {
  content: string;
}

export default function TextEditor({ content }: TextEditorProps) {
  return <div className="py-12 mx-auto prose" dangerouslySetInnerHTML={{ __html: content }} />;
}
