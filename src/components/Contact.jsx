import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold mb-3">
            CONTACT US
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Get In Touch
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a question, suggestion, or need help?
            Our team is always ready to help you.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-[#111827] border border-gray-700 rounded-3xl p-8 md:p-10">

            <h3 className="text-3xl font-bold mb-3">
              Let's Talk
            </h3>

            <p className="text-gray-400 mb-10">
              Reach out to us and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-7">

              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 flex items-center justify-center">
                  <Mail className="text-blue-500" size={22} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Email
                  </p>
                  <p className="font-medium mt-1">
                    support@syncdin.ai
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 flex items-center justify-center">
                  <Phone className="text-blue-500" size={22} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Phone
                  </p>
                  <p className="font-medium mt-1">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 flex items-center justify-center">
                  <MapPin className="text-blue-500" size={22} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Location
                  </p>
                  <p className="font-medium mt-1">
                    Bhopal, Madhya Pradesh, India
                  </p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 flex items-center justify-center">
                  <Globe className="text-blue-500" size={22} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Website
                  </p>
                  <p className="font-medium mt-1">
                    www.syncdin.ai
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#111827] border border-gray-700 rounded-3xl p-8 md:p-10">

            <h3 className="text-3xl font-bold mb-8">
              Send Us a Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#0b1120] border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#0b1120] border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-[#0b1120] border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full bg-[#0b1120] border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3"
              >
                Send Message
                <Send size={20} />
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}