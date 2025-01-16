import React, { useContext } from "react";
import { MoodContext } from "../context/MoodContext";

const MoodPrediction = () => {
  const { moodLog } = useContext(MoodContext);

  const predictedMood = predictMood(moodLog);

  return (
    <div className="mood-prediction">
      <h2>Tomorrow's Predicted Mood</h2>
      <p className="text-lg">
        Based on recent trends, you might feel <span className="font-bold">{predictedMood}</span> tomorrow!
      </p>
    </div>
  );
};

const predictMood = (moodLog) => {
  if (moodLog.length < 3) return "😐";
  const recentMoods = moodLog.slice(-3).map((entry) => entry.mood);
  const mostFrequentMood = recentMoods.sort(
    (a, b) =>
      recentMoods.filter((v) => v === a).length -
      recentMoods.filter((v) => v === b).length
  ).pop();
  return mostFrequentMood || "😐";
};

export default MoodPrediction;
