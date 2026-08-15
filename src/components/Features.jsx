import { useNavigate } from "react-router-dom";

export default function Features() {
  const navigate = useNavigate();

  const features = [
    {
      title: "AI Resume Builder",
      desc: "Create ATS-friendly resumes in minutes.",
      icon: "📄",
      path: "/resume",
    },
    {
      title: "Cover Letter",
      desc: "Generate professional cover letters instantly.",
      icon: "✉️",
      path: "/cover-letter",
    },
    {
      title: "Interview Prep",
      desc: "Practice HR and Technical interviews with AI.",
      icon: "🎤",
      path: "/interview",
    },
    {
      title: "Coding Practice",
      desc: "Improve DSA and coding interview skills.",
      icon: "💻",
      path: "/coding-practice",
    },
  ];

  const handleClick = (feature) => {
    if (feature.path) {
      navigate(feature.path);
    } else {
      alert(`${feature.title} Coming Soon 🚀`);
    }
  };

  return (
    <section className="py-24 px-10 bg-black text-white">
      <h2 className="text-5xl font-bold text-center mb-16">
        Our Features
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            onClick={() => handleClick(feature)}
            className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 hover:scale-105 duration-300 cursor-pointer"
          >
            <div className="text-5xl mb-5">{feature.icon}</div>

            <h3 className="text-2xl font-bold mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-400">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}