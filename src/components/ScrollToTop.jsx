import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 w-14 h-14 rounded-full text-white text-2xl shadow-xl transition-all duration-300 hover:scale-110 z-50"
    >
      ↑
    </button>
  );
}