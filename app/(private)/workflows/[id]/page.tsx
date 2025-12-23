// app/workflows/[id]/page.tsx
import Editor from "@/components/editor/Editor";
import EditorContainer from '../../../../components/editor/EditorContainer';

interface PageProps {
  params: { id: string };
}

export default async function WorkflowPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className="w-full h-full">
      <EditorContainer workflowId={id} />
    </div>
  );
}
