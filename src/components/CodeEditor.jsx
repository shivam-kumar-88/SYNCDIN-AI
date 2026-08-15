import Editor from "@monaco-editor/react";

export default function CodeEditor({ language, code, setCode }) {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-3">
        Code Editor
      </h2>

      <Editor
        height="500px"
        theme="vs-dark"
        language={language.toLowerCase()}
        value={code}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
}