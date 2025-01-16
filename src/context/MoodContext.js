import React, { createContext, useState } from "react";

export const MoodContext = createContext();

const MoodProvider = ({ children }) => {
  const [moodLog, setMoodLog] = useState([
    // Example data
    { date: "2025-01-11", mood: "😊", note: "Had a great meeting!" },
    { date: "2025-01-12", mood: "😴", note: "Felt tired after a workout." },
    { date: "2025-01-13", mood: "😞", note: "Bad day at work." },
  ]);

  const addMood = (moodEntry) => setMoodLog([...moodLog, moodEntry]);
  const editMood = (date, updatedEntry) => {
    setMoodLog(
      moodLog.map((entry) => (entry.date === date ? updatedEntry : entry))
    );
  };
  const deleteMood = (date) =>
    setMoodLog(moodLog.filter((entry) => entry.date !== date));

  return (
    <MoodContext.Provider value={{ moodLog, addMood, editMood, deleteMood }}>
      {children}
    </MoodContext.Provider>
  );
};

export default MoodProvider;
