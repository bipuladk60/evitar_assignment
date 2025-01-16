import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaSave, FaTimes } from "react-icons/fa";

export function MoodHistory({ moodEntries, updateMoodEntry, deleteMoodEntry }) {
  const [editingIndex, setEditingIndex] = useState(null); // Track the index of the entry being edited
  const [editingMood, setEditingMood] = useState(""); // Track the mood being edited
  const [editingNote, setEditingNote] = useState(""); // Track the note being edited

  const handleEdit = (index, mood, note) => {
    setEditingIndex(index);
    setEditingMood(mood);
    setEditingNote(note);
  };

  const handleSave = (date) => {
    updateMoodEntry(date, editingMood, editingNote);
    setEditingIndex(null); // Exit editing mode
  };

  const handleCancel = () => {
    setEditingIndex(null); // Exit editing mode without saving
  };

  const lastFiveDays = moodEntries.slice(-5).reverse();

  return (
    <div className="glass-card p-6 space-y-4">
      {/* Header */}
      <div>
        <h2 className="md:text-largeTitle text-[1.2rem] font-bold">Mood History</h2>
        <p className="md:text-paragraph text-textSecondary text-[0.8rem]">
          Your mood for the past 5 logs
        </p>
      </div>

      {/* Mood Entries */}
      <div className="space-y-4">
        {lastFiveDays.map((entry, index) => (
          <div
            key={entry.date}
            className="flex items-center justify-between p-4 border-b last:border-b-0"
          >
            {editingIndex === index ? (
              // Inline Editing Mode
              <div className="flex items-center space-x-4 w-full">
                <select
                  value={editingMood}
                  onChange={(e) => setEditingMood(e.target.value)}
                  className="p-2 rounded bg-gray-100"
                >
                  <option value="😊">😊 Happy</option>
                  <option value="😐">😐 Neutral</option>
                  <option value="😞">😞 Sad</option>
                  <option value="😡">😡 Angry</option>
                  <option value="😴">😴 Tired</option>
                </select>
                <input
                  type="text"
                  value={editingNote}
                  onChange={(e) => setEditingNote(e.target.value)}
                  className="p-2 flex-grow rounded bg-gray-100"
                />
                <button
                  onClick={() => handleSave(entry.date)}
                  className="text-green-500 hover:text-green-700"
                >
                  <FaSave size={20} />
                </button>
                <button
                  onClick={handleCancel}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTimes size={20} />
                </button>
              </div>
            ) : (
              // Display Mode
              <div className="flex items-center space-x-4 w-full">
                <span className="text-2xl">{entry.mood}</span>
                <span>{new Date(entry.date).toLocaleDateString()}</span>
                <span className="text-textSecondary flex-grow">{entry.note}</span>
                <button
                  onClick={() => handleEdit(index, entry.mood, entry.note)}
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
