import React from "react";
import MoodProvider from "./context/MoodContext";
import MoodHistory from "./components/MoodHistory.js";
import WeeklySummary from "./components/WeeklySummary.js";
import MoodPrediction from "./components/MoodPrediction.js";
import ThemeToggle from "./components/ThemeToggle.js";

function App() {
  return (
    <MoodProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-4">
        <header className="text-center mb-6">
          <h1 className="text-2xl font-bold">Mood Tracker App</h1>
        </header>
        <ThemeToggle />
        <main className="mt-6">
          {/* Add Feature Components */}
          <MoodPrediction />
          <MoodHistory />
          <WeeklySummary />
        </main>
      </div>
    </MoodProvider>
  );
}

export default App;
