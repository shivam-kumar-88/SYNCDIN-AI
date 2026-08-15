import { useState } from "react";
import axios from "axios";
import CodeEditor from "../components/CodeEditor";
import QuestionPanel from "../components/Coding/QuestionPanel";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";


export default function CodingPractice() {
  const [role, setRole] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [language, setLanguage] = useState("JavaScript");
  const [count, setCount] = useState(5);
  const [company, setCompany] = useState("Google");

  const [loading, setLoading] = useState(false);
  const [solving, setSolving] = useState(false);
const [solution, setSolution] = useState("");
const [code, setCode] = useState("");

const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [output, setOutput] = useState("");
const [running, setRunning] = useState(false);

  const generateQuestions = async () => {
    if (!role) {
  alert("Please enter a Job Role");
  return;
}

    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/YOUR_ENDPOINT`,
        {
          role,
          difficulty,
          language,
          count,
          company,
        }
      );

      setQuestions(res.data.questions);
    } catch (err) {
      console.log("Full Error:", err);

      if (err.response) {
        console.log("Response:", err.response.data);
        alert(err.response.data.message);
      } else {
        alert(err.message);
      }
    } finally {
      setLoading(false);
    }
  };
const solveQuestion = async (question) => {
    console.log("🔥 solveQuestion called");
    
console.log(question);
  if (!selectedQuestion) {
    alert("Please select a question first.");
    return;
  }

  try {
    setSolving(true);

    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/YOUR_ENDPOINT`,
      {
        question: question.question,
        language,
      }
    );

    setSolution(res.data.solution);
  } catch (err) {
    console.log(err);
    alert("Failed to generate solution");
  } finally {
    setSolving(false);
  }
};
const runCode = async () => {

  if (!code.trim()) {
    alert("Write some code first");
    return;
  }

  try {

    setRunning(true);

    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/YOUR_ENDPOINT`,
      {
        language,
        code,
      }
    );

    setOutput(res.data.output);

  } catch (err) {

    console.log(err);
    alert("Failed to run code");

  } finally {

    setRunning(false);

  }
};
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-xl">

        <h1 className="text-4xl font-bold text-center mb-8">
          💻 AI Coding Practice
        </h1>

        <label className="block mb-2 font-semibold">
          Job Role
        </label>

        <input
          type="text"
          placeholder="Frontend Developer"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 mb-6"
        />

        <label className="block mb-2 font-semibold">
          Difficulty
        </label>

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 mb-6"
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <label className="block mb-2 font-semibold">
          Programming Language
        </label>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 mb-6"
        >
          <option>JavaScript</option>
          <option>Java</option>
          <option>Python</option>
          <option>C++</option>
          <option>C</option>
          <option>SQL</option>
          <option>React</option>
          <option>Node.js</option>
        </select>

        <label className="block mb-2 font-semibold">
          Number of Questions
        </label>

        <select
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="w-full p-3 rounded bg-gray-800 mb-6"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>

        <label className="block mb-2 font-semibold">
          Target Company
        </label>

        <select
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 mb-6"
        >
          <option>Google</option>
          <option>Microsoft</option>
          <option>Amazon</option>
          <option>Meta</option>
          <option>Apple</option>
          <option>TCS</option>
          <option>Infosys</option>
          <option>Wipro</option>
          <option>Capgemini</option>
          <option>Accenture</option>
        </select>

        <button
          onClick={generateQuestions}
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-bold"
        >
          {loading ? "Generating..." : "Generate Coding Questions 🚀"}
        </button>

        {questions.length > 0 && (
  <QuestionPanel
    questions={questions}
    selectedQuestion={selectedQuestion}
    setSelectedQuestion={setSelectedQuestion}
    solution={solution}
    solving={solving}
    solveQuestion={solveQuestion}
  />
)}
            
    
<CodeEditor
  language={language}
  code={code}
  setCode={setCode}
/>
<button
onClick={runCode}
className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 py-3 rounded font-bold"
>
{running ? "Running..." : "▶ Run Code"}
</button>
{output && (
  <div className="mt-6">
    <h2 className="text-2xl font-bold mb-3">
      Output
    </h2>
<div className="bg-gray-800 p-5 rounded-xl border border-gray-700">
  <pre className="whitespace-pre-wrap text-green-400">
    {output}
  </pre>
</div>
  </div>
)}
            <button
  onClick={() => {
  console.log("✅ Button Clicked");
 solveQuestion(selectedQuestion);
}}
  className="mt-4 w-full bg-green-600 hover:bg-green-700 py-3 rounded font-bold"
>
  {solving ? "Generating Solution..." : "🤖 Solve with AI"}
</button>

                   {solution && (
  <div className="mt-6">
    <h2 className="text-2xl font-bold mb-3">
      AI Solution
    </h2>

    <div className="bg-gray-800 p-5 rounded prose prose-invert max-w-none">
  <ReactMarkdown
    components={{
      code({ inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || "");

        return !inline && match ? (
          <SyntaxHighlighter
            style={oneDark}
            language={match[1]}
            PreTag="div"
            {...props}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        );
      },
    }}
  >
    {solution}
  </ReactMarkdown>
</div>
</div>
)}
</div>
</div>
);
}