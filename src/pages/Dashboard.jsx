import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        setUserName(user.name || "User");
      } catch (error) {
        console.error("User data error:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");

    navigate("/login");
  };

  const cards = [
    {
      title: "Resume Analyzer",
      icon: "📄",
      path: "/resume",
    },
    {
      title: "ATS Score",
      icon: "📊",
      path: "/analysis",
    },
    {
      title: "Cover Letter",
      icon: "✍️",
      path: "/cover-letter",
    },
    {
      title: "Interview Prep",
      icon: "🎤",
      path: "/interview",
    },
    {
      title: "Coding Practice",
      icon: "💻",
      path: "/coding",
    },
    {
      title: "Profile",
      icon: "👤",
      path: "/profile",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">

          <div>
            <h1 className="text-4xl font-bold">
              Welcome, {userName} 👋
            </h1>

            <p className="text-gray-400 mt-2">
              Manage your AI career tools from one place.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold transition"
          >
            Logout 🚪
          </button>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">

          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.path)}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 hover:scale-[1.02] transition cursor-pointer"
            >

              <div className="text-5xl">
                {card.icon}
              </div>

              <h2 className="text-2xl font-bold mt-5">
                {card.title}
              </h2>

              <p className="text-gray-400 mt-2">
                Open {card.title}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}