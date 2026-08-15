export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload Resume",
      desc: "Upload your existing resume in PDF or DOC format.",
      icon: "📄",
    },
    {
      number: "02",
      title: "AI Analysis",
      desc: "Our AI analyzes your resume and identifies improvements.",
      icon: "🤖",
    },
    {
      number: "03",
      title: "Get Suggestions",
      desc: "Receive ATS-friendly suggestions and career guidance.",
      icon: "✨",
    },
    {
      number: "04",
      title: "Apply for Jobs",
      desc: "Download your optimized resume and apply confidently.",
      icon: "🚀",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-10">
      <h2 className="text-5xl font-bold text-center mb-5">
        How It Works
      </h2>

      <p className="text-center text-gray-400 mb-16">
        Just 4 simple steps to build your dream career with AI.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500 hover:scale-105 duration-300"
          >
            <div className="text-5xl mb-5">{step.icon}</div>

            <h3 className="text-blue-500 text-lg font-bold mb-2">
              Step {step.number}
            </h3>

            <h2 className="text-2xl font-bold mb-3">
              {step.title}
            </h2>

            <p className="text-gray-400">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}