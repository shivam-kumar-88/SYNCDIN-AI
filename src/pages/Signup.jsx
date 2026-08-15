import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("Please fill all fields.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    const existingUser = JSON.parse(
      localStorage.getItem("syncdInUser")
    );

    if (existingUser && existingUser.email === email) {
      setError("Account already exists. Please login.");
      return;
    }

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("syncdInUser", JSON.stringify(user));

    alert("Account created successfully! 🎉");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="bg-[#111827] p-10 rounded-3xl w-full max-w-md border border-gray-700">

        <h1 className="text-4xl font-bold text-white text-center">
          Create Account 🚀
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Join SyncdIn AI today
        </p>

        <form onSubmit={handleSignup}>

          {/* Name */}
          <div className="mt-8">
            <label className="text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full mt-2 p-4 rounded-xl bg-[#0b1120] border border-gray-700 text-white outline-none focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mt-5">
            <label className="text-gray-300">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-2 p-4 rounded-xl bg-[#0b1120] border border-gray-700 text-white outline-none focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mt-5">
            <label className="text-gray-300">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create password"
              className="w-full mt-2 p-4 rounded-xl bg-[#0b1120] border border-gray-700 text-white outline-none focus:border-blue-500"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-400 text-sm mt-4">
              {error}
            </p>
          )}

          {/* Signup */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 mt-8 py-4 rounded-xl text-white font-semibold text-lg transition"
          >
            Create Account 🚀
          </button>

        </form>

        <p className="text-gray-400 text-center mt-6">
          Already have an account?{" "}

          <Link
            to="/login"
            className="text-blue-500 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}