export default function QuestionPanel({
  questions,
  selectedQuestion,
  setSelectedQuestion,
}) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">
        Generated Questions
      </h2>

      <div className="space-y-2">
        {questions.map((q, index) => (
          <button
            key={index}
            onClick={() => setSelectedQuestion(q)}
            className={`block w-full text-left p-3 rounded ${
              selectedQuestion?.question === q.question
                ? "bg-blue-600"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {index + 1}. {q.question}
          </button>
        ))}
      </div>

      {selectedQuestion && (
        <div className="mt-6 bg-gray-800 p-5 rounded">
          <h2 className="text-2xl font-bold mb-3">
            Selected Question
          </h2>

          <p><b>Question:</b> {selectedQuestion.question}</p>
          <p><b>Problem:</b> {selectedQuestion.problem}</p>
          <p><b>Input:</b> {selectedQuestion.input}</p>
          <p><b>Output:</b> {selectedQuestion.output}</p>
          <p><b>Hint:</b> {selectedQuestion.hint}</p>
          <p><b>Time:</b> {selectedQuestion.timeComplexity}</p>
          <p><b>Space:</b> {selectedQuestion.spaceComplexity}</p>
        </div>
      )}
    </>
  );
}