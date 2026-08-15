export default function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-gray-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-2">

            <h2 className="text-3xl font-bold text-blue-500">
              SyncdIn AI 🚀
            </h2>

            <p className="text-gray-400 mt-5 max-w-md leading-7">
              AI-powered platform to build ATS-friendly resumes,
              create professional cover letters, practice interviews,
              improve coding skills and build a successful career.
            </p>

            <div className="mt-6">
              <p className="text-gray-500 text-sm">
                Built with ❤️ for students and professionals.
              </p>
            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition"
                >
                  FAQ
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-lg font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>
                support@syncdin.ai
              </p>

              <p>
                Bhopal, India 🇮🇳
              </p>

              <p className="text-blue-500">
                www.syncdin.ai
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-7 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 SyncdIn AI. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-gray-500 text-sm">

            <a
              href="#"
              className="hover:text-blue-500 transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-blue-500 transition"
            >
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}