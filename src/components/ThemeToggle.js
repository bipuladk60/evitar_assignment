import React, { useEffect } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

export function ThemeToggle({ isDarkMode, setIsDarkMode }) {
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, [setIsDarkMode]);

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-yellow-500 dark:to-orange-500 text-white shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out fixed top-4 right-4 z-50"
    >
      {isDarkMode ? (
        <MdOutlineLightMode size={32} />
      ) : (
        <MdDarkMode size={32} />
      )}
    </button>
  );
}
