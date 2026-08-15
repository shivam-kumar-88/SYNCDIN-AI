import { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import { useNavigate } from "react-router-dom";

export default function Analysis() {
  const [data, setData] = useState(null);
  const [showResume, setShowResume] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const savedAnalysis = localStorage.getItem("analysis");

    if (savedAnalysis) {
      try {
        setData(JSON.parse(savedAnalysis));
      } catch (error) {
        console.error("Invalid analysis data:", error);
      }
    }
  }, []);

  // =========================
  // DOWNLOAD PDF
  // =========================
  const downloadPDF = () => {
    if (!data) return;

    const doc = new jsPDF();

    const atsScore = Number(data.atsScore) || 0;

    doc.setFontSize(20);
    doc.text("SyncdIn AI - Resume Analysis Report", 20, 20);

    doc.setFontSize(13);

    let y = 35;

    doc.text(`ATS Score: ${atsScore}/100`, 20, y);
    y += 12;

    doc.text("Skills Found:", 20, y);
    y += 8;

    const foundSkills =
      data.foundSkills?.length > 0
        ? data.foundSkills.join(", ")
        : "None";

    const foundLines = doc.splitTextToSize(foundSkills, 170);

    doc.text(foundLines, 20, y);
    y += foundLines.length * 7 + 8;

    doc.text("Missing Skills:", 20, y);
    y += 8;

    const missingSkills =
      data.missingSkills?.length > 0
        ? data.missingSkills.join(", ")
        : "None";

    const missingLines = doc.splitTextToSize(
      missingSkills,
      170
    );

    doc.text(missingLines, 20, y);
    y += missingLines.length * 7 + 10;

    doc.text("AI Recommendations:", 20, y);
    y += 8;

    const aiText =
      data.aiAnalysis || "No AI analysis available.";

    const aiLines = doc.splitTextToSize(aiText, 170);

    doc.text(aiLines, 20, y);

    doc.save("SyncdIn_AI_Resume_Report.pdf");
  };

  // =========================
  // NO DATA
  // =========================
  if (!data) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

        <div className="text-center max-w-lg">

          <div className="text-6xl mb-5">
            📊
          </div>

          <h1 className="text-4xl font-bold">
            No Analysis Found
          </h1>

          <p className="text-gray-400 mt-4">
            Upload your resume first to generate
            your AI-powered ATS analysis.
          </p>

          <button
            onClick={() => navigate("/resume")}
            className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-bold"
          >
            📄 Upload Resume
          </button>

        </div>

      </div>
    );
  }

  const atsScore = Math.min(
    Math.max(Number(data.atsScore) || 0, 0),
    100
  );

  const foundSkills = Array.isArray(data.foundSkills)
    ? data.foundSkills
    : [];

  const missingSkills = Array.isArray(data.missingSkills)
    ? data.missingSkills
    : [];

  const aiAnalysis =
    data.aiAnalysis || "No AI recommendations available.";

  // =========================
  // SCORE STATUS
  // =========================
  let scoreMessage = "";
  let scoreColor = "";

  if (atsScore >= 80) {
    scoreMessage =
      "Excellent! Your resume is highly ATS-friendly.";
    scoreColor = "text-green-400";
  } else if (atsScore >= 60) {
    scoreMessage =
      "Good score! A few improvements can make your resume stronger.";
    scoreColor = "text-yellow-400";
  } else {
    scoreMessage =
      "Your resume needs improvement to perform better with ATS systems.";
    scoreColor = "text-red-400";
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mb-10">

          <div>

            <p className="text-blue-500 font-bold tracking-wide">
              SYNCDIN AI
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-2">
              Resume Analysis
            </h1>

            <p className="text-gray-400 mt-3">
              AI-powered ATS analysis of your resume.
            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            <button
              onClick={() => navigate("/dashboard")}
              className="border border-gray-700 hover:border-blue-500 px-5 py-3 rounded-xl transition"
            >
              ← Dashboard
            </button>

            <button
              onClick={() => navigate("/resume")}
              className="border border-gray-700 hover:border-blue-500 px-5 py-3 rounded-xl transition"
            >
              🔄 Re-analyze
            </button>

            <button
              onClick={downloadPDF}
              className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl font-semibold transition"
            >
              📥 Download Report
            </button>

          </div>

        </div>

        {/* ================= ATS SCORE ================= */}

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 md:p-10 mb-8">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* SCORE */}

            <div className="text-center md:text-left">

              <p className="text-gray-400 text-lg">
                Your ATS Compatibility Score
              </p>

              <div className="flex items-end justify-center md:justify-start gap-3 mt-4">

                <span
                  className={`text-8xl font-bold ${
                    atsScore >= 80
                      ? "text-green-400"
                      : atsScore >= 60
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  {atsScore}
                </span>

                <span className="text-gray-500 text-2xl mb-5">
                  /100
                </span>

              </div>

              <p className={`${scoreColor} mt-4 font-semibold`}>
                {scoreMessage}
              </p>

            </div>

            {/* SCORE BAR */}

            <div>

              <div className="flex justify-between mb-3 text-gray-400">

                <span>
                  ATS Compatibility
                </span>

                <span>
                  {atsScore}%
                </span>

              </div>

              <div className="w-full h-6 bg-gray-800 rounded-full overflow-hidden">

                <div
                  className={`h-full rounded-full transition-all duration-1000 ${
                    atsScore >= 80
                      ? "bg-green-500"
                      : atsScore >= 60
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                  style={{
                    width: `${atsScore}%`,
                  }}
                />

              </div>

              <div className="flex justify-between text-xs text-gray-600 mt-2">
                <span>0</span>
                <span>50</span>
                <span>70</span>
                <span>80</span>
                <span>100</span>
              </div>

            </div>

          </div>

        </div>

        {/* ================= QUICK STATS ================= */}

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

            <div className="text-3xl">
              ✅
            </div>

            <p className="text-gray-400 mt-3">
              Skills Found
            </p>

            <h2 className="text-4xl font-bold mt-1 text-green-400">
              {foundSkills.length}
            </h2>

          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

            <div className="text-3xl">
              ⚠️
            </div>

            <p className="text-gray-400 mt-3">
              Missing Skills
            </p>

            <h2 className="text-4xl font-bold mt-1 text-red-400">
              {missingSkills.length}
            </h2>

          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

            <div className="text-3xl">
              🤖
            </div>

            <p className="text-gray-400 mt-3">
              AI Analysis
            </p>

            <h2 className="text-4xl font-bold mt-1 text-blue-400">
              Ready
            </h2>

          </div>

        </div>

        {/* ================= SKILLS ================= */}

        <div className="grid md:grid-cols-2 gap-8 mb-8">

          {/* FOUND */}

          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold">
              ✅ Skills Found
            </h2>

            <p className="text-gray-400 mt-2">
              Skills detected in your resume.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">

              {foundSkills.length > 0 ? (
                foundSkills.map((skill, index) => (

                  <span
                    key={index}
                    className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>

                ))
              ) : (

                <p className="text-gray-500">
                  No skills detected.
                </p>

              )}

            </div>

          </div>

          {/* MISSING */}

          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold">
              ⚠️ Missing Skills
            </h2>

            <p className="text-gray-400 mt-2">
              Skills that may improve your resume.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">

              {missingSkills.length > 0 ? (
                missingSkills.map((skill, index) => (

                  <span
                    key={index}
                    className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>

                ))
              ) : (

                <p className="text-gray-500">
                  🎉 No missing skills detected.
                </p>

              )}

            </div>

          </div>

        </div>

        {/* ================= AI RECOMMENDATIONS ================= */}

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 mb-8">

          <div className="flex items-center gap-3">

            <div className="text-3xl">
              🤖
            </div>

            <div>

              <h2 className="text-2xl font-bold">
                AI Recommendations
              </h2>

              <p className="text-gray-400 mt-1">
                Personalized suggestions based on your resume.
              </p>

            </div>

          </div>

          <div className="mt-7 bg-[#0b1120] border border-gray-800 rounded-2xl p-6">

            <p className="text-gray-300 whitespace-pre-wrap leading-8">
              {aiAnalysis}
            </p>

          </div>

        </div>

        {/* ================= RESUME CONTENT ================= */}

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">

          <div className="flex flex-col md:flex-row justify-between gap-5 items-start md:items-center">

            <div>

              <h2 className="text-2xl font-bold">
                📄 Resume Content
              </h2>

              <p className="text-gray-400 mt-2">
                View the text extracted from your uploaded resume.
              </p>

            </div>

            <button
              onClick={() => setShowResume(!showResume)}
              className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold"
            >
              {showResume
                ? "🙈 Hide Resume"
                : "👁️ Show Resume"}
            </button>

          </div>

          {showResume && (

            <div className="mt-6 bg-[#0b1120] border border-gray-800 rounded-2xl p-6 max-h-[600px] overflow-y-auto">

              <pre className="whitespace-pre-wrap text-gray-300 leading-7 font-sans">
                {data.resumeText ||
                  "No resume text available."}
              </pre>

            </div>

          )}

        </div>

        {/* ================= BOTTOM ACTIONS ================= */}

        <div className="flex flex-col md:flex-row gap-4 mt-8">

          <button
            onClick={() => navigate("/resume")}
            className="flex-1 bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-bold"
          >
            📄 Analyze Another Resume
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="flex-1 bg-gray-800 hover:bg-gray-700 py-4 rounded-xl font-bold"
          >
            🏠 Back to Dashboard
          </button>

        </div>

      </div>

    </div>
  );
}