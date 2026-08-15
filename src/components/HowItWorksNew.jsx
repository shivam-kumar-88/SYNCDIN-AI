import {
  FaFileUpload,
  FaBrain,
  FaFileAlt,
  FaComments,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const steps = [
  {
    icon: FaFileUpload,
    title: "Upload Resume",
    desc: "Upload your PDF or DOCX resume.",
  },
  {
    icon: FaBrain,
    title: "AI Analysis",
    desc: "Get ATS score and suggestions.",
  },
  {
    icon: FaFileAlt,
    title: "Resume Builder",
    desc: "Generate ATS-friendly resume.",
  },
  {
    icon: FaComments,
    title: "Interview Prep",
    desc: "Practice interviews with AI.",
  },
  {
    icon: FaCode,
    title: "Coding Practice",
    desc: "Solve coding questions.",
  },
  {
    icon: FaRocket,
    title: "Apply for Jobs",
    desc: "Download and apply confidently.",
  },
];

export default function HowItWorksNew() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">
          How SyncdIn AI Works
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Everything you need to land your dream job.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="bg-[#111827] border border-gray-700 rounded-xl p-8 hover:border-blue-500 transition"
              >
                <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}