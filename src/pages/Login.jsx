import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
  e.preventDefault();

  setError("");

  if (!email || !password) {
    setError("Please enter email and password.");
    return;
  }

  const savedUser = localStorage.getItem("userAccount");

  if (!savedUser) {
    setError("No account found. Please create an account first.");
    return;
  }

  const user = JSON.parse(savedUser);

  if (email !== user.email || password !== user.password) {
    setError("Invalid email or password.");
    return;
  }

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("userEmail", user.email);
  localStorage.setItem("userName", user.name);

  navigate("/dashboard");
};

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="bg-[#111827] p-10 rounded-3xl w-full max-w-md border border-gray-700">

        <h1 className="text-4xl font-bold text-white text-center">
          Welcome Back 👋
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Login to your SyncdIn AI account
        </p>

        <form onSubmit={handleLogin}>

          {/* Email */}
          <div className="mt-8">

            <label className="text-gray-300">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder="Enter your email"
              className="w-full mt-2 p-4 rounded-xl bg-[#0b1120] border border-gray-700 text-white outline-none focus:border-blue-500"
            />

          </div>

          {/* Password */}
          <div className="mt-5">

            <label className="text-gray-300">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder="Enter your password"
                className="w-full mt-2 p-4 pr-16 rounded-xl bg-[#0b1120] border border-gray-700 text-white outline-none focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-5 text-gray-400 hover:text-white"
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

          </div>

          {/* Error */}
          {error && (
            <div className="mt-4 bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Login */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 mt-8 py-4 rounded-xl text-white font-semibold text-lg transition"
          >
            Login 🚀
          </button>

        </form>

        {/* Signup */}
        <p className="text-gray-400 text-center mt-6">

          Don't have an account?{" "}

          <Link
            to="/signup"
            className="text-blue-500 hover:underline"
          >
            Sign Up
          </Link>

        </p>

        {/* Home */}
        <p className="text-center mt-4">

          <Link
            to="/"
            className="text-gray-500 hover:text-blue-400 text-sm"
          >
            ← Back to Home
          </Link>

        </p>

      </div>

    </div>
  );
}