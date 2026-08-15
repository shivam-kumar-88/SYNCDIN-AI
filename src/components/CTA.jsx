export default function CTA() {
  return (
    <section className="relative py-28 bg-black overflow-hidden">
      <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl bottom-0 right-0"></div>

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="bg-[#111827] border border-blue-600/30 rounded-3xl p-14 text-center">

          <h2 className="text-5xl font-bold text-white">
            Ready to Build Your Dream Career?
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto">
            Create an ATS-friendly resume, generate professional cover letters,
            practice AI interviews, solve coding challenges, and apply for your dream job.
          </p>

          <div className="flex justify-center gap-6 mt-12 flex-wrap">

            <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold text-lg">
              Get Started →
            </button>

            <button className="border border-gray-600 hover:border-blue-500 transition px-8 py-4 rounded-xl font-semibold text-lg">
              Learn More
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}