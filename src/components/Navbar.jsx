import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800 text-white">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold text-blue-500"
          >
            SyncdIn AI 🚀
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <Link
              to="/"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              Home
            </Link>

            <a
              href="#features"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              Features
            </a>

            <a
              href="#about"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              About
            </a>

            <a
              href="#pricing"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              Pricing
            </a>

            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-xl font-semibold transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="border border-blue-500 hover:bg-blue-500/10 px-6 py-2.5 rounded-xl font-semibold transition"
            >
              Get Started
            </Link>

          </div>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-300"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-6 pb-4 flex flex-col gap-5">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-blue-400"
            >
              Home
            </Link>

            <a
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-blue-400"
            >
              Features
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-blue-400"
            >
              About
            </a>

            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-blue-400"
            >
              Pricing
            </a>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-center font-semibold"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="border border-blue-500 px-6 py-3 rounded-xl text-center font-semibold"
            >
              Get Started
            </Link>

          </div>
        )}

      </div>

    </nav>
  );
}