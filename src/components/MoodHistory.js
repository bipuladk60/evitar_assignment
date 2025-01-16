import React, { useContext } from "react";
import { MoodContext } from "../context/MoodContext";

const MoodHistory = () => {
  const { moodLog } = useContext(MoodContext);

  // Sort and get the last 5 days
  const lastFiveDays = moodLog.slice(-5).reverse();

  return (
    <div className="mood-history">
      <h2>Past 5 Days</h2>
      <ul>
        {lastFiveDays.map((entry) => (
          <li key={entry.date} className="mb-2">
            <span className="font-bold">{entry.date}</span>: {entry.mood} -{" "}
            {entry.note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoodHistory;
