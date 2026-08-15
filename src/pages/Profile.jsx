import { useEffect, useState } from "react";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const [saved, setSaved] = useState(false);

  // Load saved profile
  useEffect(() => {
    const savedProfile = localStorage.getItem("profile");

    if (savedProfile) {
      const profile = JSON.parse(savedProfile);

      setName(profile.name || "");
      setEmail(profile.email || "");
      setPhone(profile.phone || "");
      setSkills(profile.skills || "");
      setGithub(profile.github || "");
      setLinkedin(profile.linkedin || "");
    }
  }, []);

  // Save profile
  const saveProfile = () => {
    const profile = {
      name,
      email,
      phone,
      skills,
      github,
      linkedin,
    };

    localStorage.setItem("profile", JSON.stringify(profile));

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">

      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            👤 My Profile
          </h1>

          <p className="text-gray-400 mt-2">
            Manage your career information.
          </p>

        </div>

        {/* Profile Card */}
        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">

          {/* Profile Preview */}
          <div className="flex items-center gap-5 mb-8">

            <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-4xl">
              👤
            </div>

            <div>

              <h2 className="text-2xl font-bold">
                {name || "Your Name"}
              </h2>

              <p className="text-gray-400">
                {email || "Your Email"}
              </p>

            </div>

          </div>

          {/* Form */}
          <div className="grid md:grid-cols-2 gap-5">

            {/* Name */}
            <div>
              <label className="block mb-2 font-semibold">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-semibold">
                Email
              </label>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 font-semibold">
                Phone
              </label>

              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
              />
            </div>

            {/* Skills */}
            <div>
              <label className="block mb-2 font-semibold">
                Skills
              </label>

              <input
                type="text"
                placeholder="Java, Python, React, SQL"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
              />
            </div>

          </div>

          {/* GitHub */}
          <div className="mt-5">

            <label className="block mb-2 font-semibold">
              GitHub
            </label>

            <input
              type="text"
              placeholder="GitHub Profile"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
            />

          </div>

          {/* LinkedIn */}
          <div className="mt-5">

            <label className="block mb-2 font-semibold">
              LinkedIn
            </label>

            <input
              type="text"
              placeholder="LinkedIn Profile"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
            />

          </div>

          {/* Save */}
          <button
            onClick={saveProfile}
            className="w-full mt-8 bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-bold transition"
          >
            Save Profile 💾
          </button>

          {/* Success */}
          {saved && (
            <div className="mt-4 p-3 bg-green-900/40 border border-green-700 rounded-lg text-green-400 text-center">
              ✅ Profile Saved Successfully!
            </div>
          )}

        </div>

      </div>

    </div>
  );
}