import React from "react";
import { MoodEntryComponent } from "./MoodEntryComponent";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export function MoodHistory({ moodEntries, updateMoodEntry, deleteMoodEntry }) {
  const lastFiveDays = moodEntries.slice(-5).reverse();

  return (
    <div className="glass-card p-6 space-y-4">
      {/* Header */}
      <div className="">
        <h2 className="md:text-largeTitle text-[1.2rem] font-bold">Mood History</h2>
        <p className="md:text-paragraph text-textSecondary text-[0.8rem]">
          Your mood for the past 5 logs
        </p>
      </div>

      {/* Mood Entries */}
      <div className="space-y-4">
        {lastFiveDays.map((entry) => (
          <div
            key={entry.date}
            className="flex items-center justify-between p-4 border-b last:border-b-0"
          >
            <div className="flex items-center space-x-4">
              <span className="text-2xl">{entry.mood}</span>
              <span>{new Date(entry.date).toLocaleDateString()}</span>
              <span className="text-textSecondary">{entry.note}</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => updateMoodEntry(entry.date, entry.mood, entry.note)}
                className="text-blue-500 hover:text-blue-700"
              >
                <FaEdit size={20} />
              </button>
              <button
                onClick={() => deleteMoodEntry(entry.date)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrashAlt size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
