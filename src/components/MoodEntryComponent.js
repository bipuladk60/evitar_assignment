import React, { useState } from "react";

export function MoodEntryComponent({ entry, updateMoodEntry, deleteMoodEntry }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMood, setEditedMood] = useState(entry.mood);
  const [editedNote, setEditedNote] = useState(entry.note || "");

  const handleSave = () => {
    updateMoodEntry(entry.date, editedMood, editedNote);
    setIsEditing(false);
  };

  const moods = ["😊", "😐", "😞", "😡", "😴"];

  return (
    <div className="flex items-center justify-between py-2 border-b last:border-b-0">
      <div className="flex items-center space-x-4">
        <span className="text-2xl">{isEditing ? editedMood : entry.mood}</span>
        <span>{new Date(entry.date).toLocaleDateString()}</span>
      </div>
      {isEditing ? (
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            {moods.map((mood) => (
              <button
                key={mood}
                onClick={() => setEditedMood(mood)}
                className={`text-2xl p-1 ${mood === editedMood ? "bg-primary" : ""}`}
              >
                {mood}
              </button>
            ))}
          </div>
          <input
            value={editedNote}
            onChange={(e) => setEditedNote(e.target.value)}
            className="input w-40"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <span>{entry.note}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteMoodEntry(entry.date)}>Delete</button>
        </div>
      )}
    </div>
  );
}
