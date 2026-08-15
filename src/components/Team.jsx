const team = [
  {
    name: "Shivam Kumar",
    role: "Founder & Full Stack Developer",
    image: "https://i.pravatar.cc/300?img=12",
    description:
      "Building SyncdIn AI to help students and professionals create better careers with AI-powered tools.",
  },
  {
    name: "AI Assistant",
    role: "AI Career Mentor",
    image: "https://i.pravatar.cc/300?img=32",
    description:
      "Helping users improve resumes, prepare for interviews, and get personalized career guidance.",
  },
  {
    name: "Development Team",
    role: "Backend & AI Engineers",
    image: "https://i.pravatar.cc/300?img=15",
    description:
      "Developing reliable backend systems and intelligent AI features for a better career experience.",
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold mb-3">
            OUR TEAM
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Meet Our Team
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Passionate people building the future of AI-powered careers.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-gray-700 rounded-3xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Profile Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-blue-600"
              />

              {/* Name */}
              <h3 className="text-2xl font-bold mt-6">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-blue-400 font-medium mt-2">
                {member.role}
              </p>

              {/* Description */}
              <p className="text-gray-400 mt-5 leading-7">
                {member.description}
              </p>

              {/* Buttons */}
              <div className="flex justify-center gap-4 mt-7">

                <button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-xl transition"
                >
                  LinkedIn
                </button>

                <button
                  type="button"
                  className="border border-gray-600 hover:border-blue-500 px-5 py-2.5 rounded-xl transition"
                >
                  GitHub
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}