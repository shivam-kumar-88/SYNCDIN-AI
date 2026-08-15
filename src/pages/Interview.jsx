import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Interview() {
  const navigate = useNavigate();

  const [jobRole, setJobRole] = useState("");
  const [experience, setExperience] = useState("");
  const [interviewType, setInterviewType] = useState("Technical");

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [feedback, setFeedback] = useState({});

  const [loading, setLoading] = useState(false);
  const [evaluating, setEvaluating] = useState({});
  const [error, setError] = useState("");

  // Generate Questions
  const generateQuestions = async () => {
    if (!jobRole || !experience) {
      setError("Please enter your job role and experience.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setQuestions([]);
      setAnswers({});
      setFeedback({});

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/interview`,
        {
          jobRole,
          experience,
          interviewType,
        }
      );

      const text = response.data.questions;

      const questionList = text
        .split(/\n(?=\d+\.)/)
        .map((q) => q.trim())
        .filter(Boolean);

      setQuestions(questionList);

    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.message ||
        "Unable to connect to backend."
      );

    } finally {
      setLoading(false);
    }
  };

  // Save Answer
  const handleAnswerChange = (index, value) => {
    setAnswers((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  // Evaluate Answer
  const evaluateAnswer = async (question, index) => {
    const answer = answers[index];

    if (!answer || !answer.trim()) {
      setError("Please write your answer first.");
      return;
    }

    try {
      setEvaluating((prev) => ({
        ...prev,
        [index]: true,
      }));

      setError("");

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/YOUR_ENDPOINT`,
        {
          question,
          answer,
          jobRole,
          interviewType,
        }
      );

      setFeedback((prev) => ({
        ...prev,
        [index]: response.data.feedback,
      }));

    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.message ||
        "Failed to evaluate answer."
      );

    } finally {
      setEvaluating((prev) => ({
        ...prev,
        [index]: false,
      }));
    }
  };

  // Reset
  const resetInterview = () => {
    setJobRole("");
    setExperience("");
    setInterviewType("Technical");
    setQuestions([]);
    setAnswers({});
    setFeedback({});
    setError("");
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mb-10">

          <div>
            <p className="text-blue-500 font-semibold">
              SYNCdIN AI
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-2">
              AI Interview Preparation
            </h1>

            <p className="text-gray-400 mt-3">
              Practice interview questions and get AI feedback.
            </p>
          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="border border-gray-700 hover:border-blue-500 px-5 py-3 rounded-xl"
          >
            ← Dashboard
          </button>

        </div>

        {/* Setup */}

        <div className="bg-[#111827] border border-gray-700 rounded-3xl p-8">

          <h2 className="text-2xl font-bold">
            Setup Your Interview
          </h2>

          <p className="text-gray-400 mt-2 mb-8">
            Tell us about the position you're preparing for.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2">
                Job Role
              </label>

              <input
                type="text"
                placeholder="Frontend Developer"
                value={jobRole}
                onChange={(e) => {
                  setJobRole(e.target.value);
                  setError("");
                }}
                className="w-full p-4 rounded-xl bg-[#0b1120] border border-gray-700 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2">
                Experience
              </label>

              <input
                type="text"
                placeholder="Fresher / 2 Years"
                value={experience}
                onChange={(e) => {
                  setExperience(e.target.value);
                  setError("");
                }}
                className="w-full p-4 rounded-xl bg-[#0b1120] border border-gray-700 outline-none focus:border-blue-500"
              />
            </div>

          </div>

          <div className="mt-6">

            <label className="block mb-2">
              Interview Type
            </label>

            <select
              value={interviewType}
              onChange={(e) => setInterviewType(e.target.value)}
              className="w-full p-4 rounded-xl bg-[#0b1120] border border-gray-700 outline-none"
            >
              <option value="Technical">
                Technical Interview
              </option>

              <option value="HR">
                HR Interview
              </option>

              <option value="Behavioral">
                Behavioral Interview
              </option>

              <option value="Mixed">
                Mixed Interview
              </option>
            </select>

          </div>

          {error && (
            <div className="mt-6 bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl">
              {error}
            </div>
          )}

          <button
            onClick={generateQuestions}
            disabled={loading}
            className={`w-full mt-8 py-4 rounded-xl font-semibold ${
              loading
                ? "bg-gray-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading
              ? "🤖 Generating Questions..."
              : "Generate Questions 🚀"}
          </button>

        </div>

        {/* Questions */}

        {questions.length > 0 && (

          <div className="mt-10">

            <div className="flex justify-between items-center mb-6">

              <div>
                <p className="text-blue-500 font-semibold">
                  AI GENERATED
                </p>

                <h2 className="text-3xl font-bold">
                  Interview Questions
                </h2>
              </div>

              <button
                onClick={resetInterview}
                className="border border-gray-700 hover:border-blue-500 px-5 py-3 rounded-xl"
              >
                🔄 New Interview
              </button>

            </div>

            <div className="space-y-8">

              {questions.map((question, index) => (

                <div
                  key={index}
                  className="bg-[#111827] border border-gray-700 rounded-3xl p-7"
                >

                  {/* Question */}

                  <div className="bg-[#0b1120] border border-gray-700 rounded-2xl p-6">

                    <p className="text-blue-400 font-semibold mb-3">
                      Question {index + 1}
                    </p>

                    <p className="text-xl leading-8">
                      {question.replace(/^\d+\.\s*/, "")}
                    </p>

                  </div>

                  {/* Answer */}

                  <textarea
                    rows="6"
                    placeholder="Write your answer here..."
                    value={answers[index] || ""}
                    onChange={(e) =>
                      handleAnswerChange(index, e.target.value)
                    }
                    className="w-full mt-6 p-5 rounded-2xl bg-[#0b1120] border border-gray-700 outline-none focus:border-blue-500 resize-none"
                  />

                  {/* Evaluate */}

                  <button
                    onClick={() =>
                      evaluateAnswer(question, index)
                    }
                    disabled={evaluating[index]}
                    className={`w-full mt-5 py-4 rounded-xl font-semibold ${
                      evaluating[index]
                        ? "bg-gray-700"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    {evaluating[index]
                      ? "🤖 AI Evaluating..."
                      : "Evaluate Answer 🤖"}
                  </button>

                  {/* Feedback */}

                  {feedback[index] && (

                    <div className="mt-6">

                      <p className="text-blue-500 font-semibold">
                        🤖 AI FEEDBACK
                      </p>

                      <div className="mt-3 bg-[#0b1120] border border-blue-500/30 rounded-2xl p-6">

                        <pre className="whitespace-pre-wrap font-sans text-gray-300 leading-8">
                          {feedback[index]}
                        </pre>

                      </div>

                    </div>

                  )}

                </div>

              ))}

            </div>

          </div>

        )}

      </div>

    </div>
  );
}