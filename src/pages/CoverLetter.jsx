import { useState } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";
import { useNavigate } from "react-router-dom";

export default function CoverLetter() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    skills: "",
    experience: "",
    additionalInfo: "",
  });

  const [loading, setLoading] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleGenerate = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.role || !formData.company) {
      setError("Please enter your name, job role and company name.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        "http://localhost:8000/cover-letter",
        formData
      );

      setCoverLetter(response.data.coverLetter);
    } catch (error) {
      console.error("Cover Letter Error:", error);

      if (error.response) {
        setError(
          error.response.data?.message ||
            "Server failed to generate the cover letter."
        );
      } else {
        setError(
          "Unable to connect to the server. Make sure your backend is running on port 8000."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(coverLetter);
      alert("Cover Letter Copied Successfully ✅");
    } catch (error) {
      console.error(error);
      alert("Unable to copy the cover letter.");
    }
  };

  const downloadPDF = () => {
    if (!coverLetter) return;

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("SyncdIn AI - Cover Letter", 20, 20);

    doc.setFontSize(12);

    const lines = doc.splitTextToSize(coverLetter, 170);

    doc.text(lines, 20, 35);

    doc.save("SyncdIn_AI_Cover_Letter.pdf");
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
              AI Cover Letter Generator
            </h1>

            <p className="text-gray-400 mt-3">
              Create a professional, personalized cover letter in seconds.
            </p>
          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="border border-gray-700 hover:border-blue-500 px-5 py-3 rounded-xl transition"
          >
            ← Dashboard
          </button>

        </div>

        {/* Generator Form */}
        <div className="bg-[#111827] border border-gray-700 rounded-3xl p-8 md:p-10">

          <h2 className="text-2xl font-bold mb-2">
            Tell us about the job
          </h2>

          <p className="text-gray-400 mb-8">
            Provide some details and our AI will create your cover letter.
          </p>

          <form onSubmit={handleGenerate} className="space-y-5">

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-[#0b1120] border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
              />

              <input
                type="text"
                name="role"
                placeholder="Job Role"
                value={formData.role}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-[#0b1120] border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
              />

            </div>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-[#0b1120] border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
              />

              <input
                type="text"
                name="experience"
                placeholder="Experience (Fresher / 2 Years)"
                value={formData.experience}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-[#0b1120] border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
              />

            </div>

            <input
              type="text"
              name="skills"
              placeholder="Skills (React, Node.js, Java...)"
              value={formData.skills}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-[#0b1120] border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
            />

            <textarea
              rows="6"
              name="additionalInfo"
              placeholder="Additional Information, projects, achievements, certifications..."
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-[#0b1120] border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition resize-none"
            ></textarea>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-5 py-4 rounded-xl">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-xl text-lg font-semibold transition ${
                loading
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading
                ? "🤖 Generating Cover Letter..."
                : "Generate Cover Letter 🚀"}
            </button>

          </form>

        </div>

        {/* Generated Cover Letter */}
        {coverLetter && (
          <div className="mt-10 bg-[#111827] border border-gray-700 rounded-3xl p-8 md:p-10">

            <div className="flex flex-col md:flex-row justify-between gap-5 items-start md:items-center">

              <div>
                <p className="text-blue-500 font-semibold">
                  AI GENERATED
                </p>

                <h2 className="text-3xl font-bold mt-1">
                  Your Cover Letter
                </h2>
              </div>

              <div className="flex gap-3">

                <button
                  onClick={copyToClipboard}
                  className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl font-semibold transition"
                >
                  📋 Copy
                </button>

                <button
                  onClick={downloadPDF}
                  className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold transition"
                >
                  📥 PDF
                </button>

              </div>

            </div>

            <div className="mt-8 bg-[#0b1120] border border-gray-700 rounded-2xl p-7">

              <pre className="whitespace-pre-wrap text-gray-300 leading-8 font-sans">
                {coverLetter}
              </pre>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}