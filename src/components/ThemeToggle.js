import React from "react";

const ThemeToggle = () => {
  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="py-2 px-4 bg-gray-300 dark:bg-gray-700 rounded font-bold"
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
