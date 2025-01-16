import React, { useState } from "react";

export function DailyMoodLog({ addMoodEntry }) {
  const [note, setNote] = useState("");

  const moods = ["😊", "😐", "😞", "😡", "😴"];

  const handleMoodSelect = (mood) => {
    addMoodEntry(mood, note);
    setNote("");
  };

  return (
    <div className="card flex flex-col h-full">
      <div className="card-header">
        <h2 className="lg:text-largeTitle font-bold text-[1.2rem]">How are you feeling today?</h2>
        <p className="md:text-paragraph text-[0.8rem] text-textSecondary">Enter a note and select your mood</p>
      </div>
      <div className="mt-10 card-content flex flex-col flex-grow space-y-4">
        <textarea
          placeholder="Tell me what's going on!"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full flex-grow bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl text-black placeholder-gray-500 dark:text-white dark:placeholder-gray-400 input"
        />
        <div className="flex justify-between">
          {moods.map((mood) => (
            <button
              key={mood}
              onClick={() => handleMoodSelect(mood)}
              className="text-4xl p-2"
            >
              {mood}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
