import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Frontend Developer",
    company: "Infosys",
    review:
      "SyncdIn AI helped me improve my resume and crack my interview in just one week.",
  },
  {
    name: "Priya Verma",
    role: "Software Engineer",
    company: "TCS",
    review:
      "The AI interview practice felt like talking to a real interviewer. Highly recommended.",
  },
  {
    name: "Amit Kumar",
    role: "SDE Intern",
    company: "Wipro",
    review:
      "Coding Practice and ATS Resume Builder are my favorite features. Amazing experience!",
  },
];

export default function TestimonialsNew() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">
          What Our Users Say
        </h2>

        <p className="text-gray-400 text-center mt-4 mb-16">
          Trusted by students and professionals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-[#111827] rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={18}
                    color="#FFD700"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-300 mb-8 leading-7">
                "{item.review}"
              </p>

              {/* User */}
              <h3 className="text-xl font-bold">
                {item.name}
              </h3>

              <p className="text-gray-400">
                {item.role}
              </p>

              <p className="text-blue-400 font-medium">
                {item.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}