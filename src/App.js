import React, { useState, useEffect } from "react";
import { MoodPrediction } from "./components/MoodPrediction";
import { DailyMoodLog } from "./components/DailyMoodLog";
import { MoodHistory } from "./components/MoodHistory";
import { WeeklySummary } from "./components/WeeklySummary";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  const [moodEntries, setMoodEntries] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const storedEntries = localStorage.getItem("moodEntries");
    if (storedEntries) {
      setMoodEntries(JSON.parse(storedEntries));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("moodEntries", JSON.stringify(moodEntries));
  }, [moodEntries]);

  const addMoodEntry = (mood, note) => {
    const newEntry = {
      date: new Date().toISOString(),
      mood,
      note,
    };
    setMoodEntries([...moodEntries, newEntry]);
  };

  const updateMoodEntry = (date, mood, note) => {
    const updatedEntries = moodEntries.map((entry) =>
      entry.date === date ? { ...entry, mood, note } : entry
    );
    setMoodEntries(updatedEntries);
  };

  const deleteMoodEntry = (date) => {
    const updatedEntries = moodEntries.filter((entry) => entry.date !== date);
    setMoodEntries(updatedEntries);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold font-ribes">Moodie</h1>
          <ThemeToggle
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            className="text-sm md:text-base"
          />
        </header>

        {/* Top Section: Mood Prediction */}
        <div className="w-full mb-12">
          <MoodPrediction moodEntries={moodEntries} />
        </div>

        {/* Middle Section: Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Daily Mood Log */}
          <div className="glass-card">
            <DailyMoodLog addMoodEntry={addMoodEntry} />
          </div>
          {/* Mood History */}
          <div>
            <MoodHistory
              moodEntries={moodEntries}
              updateMoodEntry={updateMoodEntry}
              deleteMoodEntry={deleteMoodEntry}
            />
          </div>
        </div>

        {/* Bottom Section: Weekly Summary */}
        <div className="glass-card">
          <WeeklySummary moodEntries={moodEntries} />
        </div>
      </div>
    </div>
  );
}

export default App;
