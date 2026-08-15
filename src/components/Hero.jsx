import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center text-center h-[85vh] px-6">

      <span className="bg-blue-600/20 text-blue-400 px-5 py-2 rounded-full mb-8">
        🚀 AI Powered Career Platform
      </span>

      <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
        Build Your{" "}
        <span className="text-blue-500">
          Dream Career
        </span>
        <br />
        with AI
      </h1>

      <p className="text-gray-400 text-xl mt-8 max-w-3xl">
        Create ATS-friendly resumes, generate cover letters,
        prepare for interviews, practice coding, and land your
        dream job using Artificial Intelligence.
      </p>

      <div className="flex gap-6 mt-12">
        <button
          onClick={() => navigate("/resume")}
          className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold"
        >
          Get Started 🚀
        </button>

        <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl text-lg">
          Learn More
        </button>
      </div>

    </section>
  );
}

export default Hero;