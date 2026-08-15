import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResumeUpload() {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    setError("");

    if (!selectedFile) return;

    // PDF only
    if (selectedFile.type !== "application/pdf") {
      setError("Please upload a PDF resume only.");
      setFile(null);
      return;
    }

    // Maximum 5 MB
    if (selectedFile.size > 5 * 1024 * 1024) {
      setError("Resume size must be less than 5 MB.");
      setFile(null);
      return;
    }

    setFile(selectedFile);
  };

  const uploadResume = async () => {
    setError("");

    if (!file) {
      setError("Please select your resume first.");
      return;
    }

    if (!jobDescription.trim()) {
      setError("Please enter the Job Description.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("resume", file);
      formData.append(
        "jobDescription",
        jobDescription.trim()
      );

      const res = await axios.post(
  "https://syncdin-ai.onrender.com/upload",
  formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Resume Analysis:", response.data);

      // Save result
      localStorage.setItem(
        "analysis",
        JSON.stringify(response.data)
      );

      // Save job description separately
      localStorage.setItem(
        "jobDescription",
        jobDescription.trim()
      );

      navigate("/analysis");

    } catch (error) {
      console.error("Resume Upload Error:", error);

      if (error.response) {
        setError(
          error.response.data?.message ||
            `Server Error: ${error.response.status}`
        );
      } else if (error.request) {
        setError(
          "Backend server is not responding. Please make sure the server is running on port 8000."
        );
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-4xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-start mb-10">

          <div>
            <p className="text-blue-500 font-semibold">
              SYNCdIN AI
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-2">
              Resume Analyzer
            </h1>

            <p className="text-gray-400 mt-3">
              Analyze your resume against a job description using AI.
            </p>
          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="border border-gray-700 hover:border-blue-500 px-5 py-3 rounded-xl transition"
          >
            ← Dashboard
          </button>

        </div>

        {/* Main Card */}

        <div className="bg-[#111827] border border-gray-700 rounded-3xl p-8 md:p-10">

          {/* Resume Upload */}

          <div>

            <label className="block text-lg font-semibold mb-3">
              Upload Resume
            </label>

            <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-700 rounded-2xl cursor-pointer bg-[#0b1120] hover:border-blue-500 transition">

              <div className="text-5xl mb-3">
                📄
              </div>

              <p className="text-gray-300 font-semibold">
                Click to upload your resume
              </p>

              <p className="text-gray-500 text-sm mt-2">
                PDF only • Maximum 5 MB
              </p>

              <input
                type="file"
                accept=".pdf,application/pdf"
                className="hidden"
                onChange={handleFileChange}
              />

            </label>

            {/* Selected File */}

            {file && (
              <div className="mt-4 bg-green-500/10 border border-green-500/30 rounded-xl p-4">

                <p className="text-green-400 font-semibold">
                  ✅ Resume Selected
                </p>

                <p className="text-gray-300 mt-1 break-all">
                  {file.name}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>

              </div>
            )}

          </div>

          {/* Job Description */}

          <div className="mt-8">

            <label className="block text-lg font-semibold mb-3">
              Job Description
            </label>

            <textarea
              rows="9"
              value={jobDescription}
              onChange={(e) => {
                setJobDescription(e.target.value);
                setError("");
              }}
              placeholder="Paste the complete job description here..."
              className="w-full bg-[#0b1120] p-5 rounded-2xl border border-gray-700 focus:border-blue-500 focus:outline-none resize-none text-white placeholder-gray-500"
            />

            <div className="flex justify-between mt-2">

              <p className="text-gray-500 text-sm">
                💡 Add the complete job description for better matching.
              </p>

              <p className="text-gray-500 text-sm">
                {jobDescription.length} characters
              </p>

            </div>

          </div>

          {/* Error */}

          {error && (
            <div className="mt-6 bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl">
              ⚠️ {error}
            </div>
          )}

          {/* Analyze Button */}

          <button
            onClick={uploadResume}
            disabled={!file || !jobDescription.trim() || loading}
            className={`w-full mt-8 py-4 rounded-xl font-bold text-lg transition ${
              !file || !jobDescription.trim() || loading
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading
              ? "🤖 AI Analyzing Resume..."
              : "🚀 Analyze Resume"}
          </button>

          {/* Features */}

          <div className="grid md:grid-cols-3 gap-4 mt-8">

            <div className="bg-[#0b1120] border border-gray-700 p-5 rounded-2xl text-center">
              <div className="text-3xl">
                📊
              </div>

              <h3 className="font-semibold mt-3">
                ATS Score
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Measure resume compatibility
              </p>
            </div>

            <div className="bg-[#0b1120] border border-gray-700 p-5 rounded-2xl text-center">
              <div className="text-3xl">
                🔍
              </div>

              <h3 className="font-semibold mt-3">
                Skill Matching
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Find matching and missing skills
              </p>
            </div>

            <div className="bg-[#0b1120] border border-gray-700 p-5 rounded-2xl text-center">
              <div className="text-3xl">
                🤖
              </div>

              <h3 className="font-semibold mt-3">
                AI Suggestions
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Get personalized improvements
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}