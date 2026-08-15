export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Software Engineer",
      review:
        "SyncdIn AI helped me improve my resume and I got interview calls within a week.",
    },
    {
      name: "Priya Singh",
      role: "Frontend Developer",
      review:
        "The AI cover letter generator saved me hours of work.",
    },
    {
      name: "Aman Verma",
      role: "Data Analyst",
      review:
        "Interview preparation feature is amazing. Highly recommended.",
    },
  ];

  return (
    <section className="py-24 px-10 bg-black text-white">
      <h2 className="text-5xl font-bold text-center mb-16">
        What Users Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, index) => {
          return (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-800"
            >
              <h3 className="text-2xl font-bold">{review.name}</h3>

              <p className="text-blue-500 mb-4">{review.role}</p>

              <p className="text-gray-400">
                "{review.review}"
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}