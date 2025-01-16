import React, { useEffect } from "react";

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
      className="py-2 px-4 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded font-bold"
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
