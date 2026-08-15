const stats = [
  {
    number: "10K+",
    title: "Resumes Built",
  },
  {
    number: "95%",
    title: "ATS Success",
  },
  {
    number: "5K+",
    title: "Interview Sessions",
  },
  {
    number: "100+",
    title: "Hiring Partners",
  },
];

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Infosys",
  "TCS",
  "Wipro",
  "Capgemini",
  "Accenture",
];

export default function Stats() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Trusted by Thousands
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Helping students and professionals build successful careers.
        </p>

        {/* Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-[#111827] rounded-2xl border border-gray-700 p-8 text-center hover:border-blue-500 transition"
            >

              <h3 className="text-5xl font-bold text-blue-500">
                {item.number}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.title}
              </p>

            </div>

          ))}

        </div>

        {/* Companies */}

        <div className="mt-24">

          <h3 className="text-center text-3xl font-bold mb-10">
            Trusted By
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {companies.map((company) => (

              <div
                key={company}
                className="bg-[#111827] rounded-xl border border-gray-700 py-6 text-center text-xl font-semibold text-gray-300 hover:text-white hover:border-blue-500 transition"
              >
                {company}
              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}