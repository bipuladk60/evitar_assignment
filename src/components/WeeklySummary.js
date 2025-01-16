import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export function WeeklySummary({ moodEntries }) {
  const lastWeekEntries = moodEntries.slice(-7);
  const moodCounts = {
    "😊": 0,
    "😐": 0,
    "😞": 0,
    "😡": 0,
    "😴": 0,
  };

  lastWeekEntries.forEach((entry) => {
    moodCounts[entry.mood]++;
  });

  const data = Object.entries(moodCounts).map(([mood, count]) => ({ mood, count }));

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="text-largeTitle font-bold">Weekly Summary</h2>
        <p className="text-paragraph text-textSecondary">Your mood distribution for the past week</p>
      </div>
      <div className="card-content">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="mood" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
