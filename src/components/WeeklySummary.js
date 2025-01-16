import React, { useContext } from "react";
import { MoodContext } from "../context/MoodContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WeeklySummary = () => {
  const { moodLog } = useContext(MoodContext);

  const moodCounts = moodLog.reduce((acc, entry) => {
    acc[entry.mood] = (acc[entry.mood] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(moodCounts),
    datasets: [
      {
        label: "Mood Counts",
        data: Object.values(moodCounts),
        backgroundColor: ["#ffcd56", "#ff6384", "#36a2eb", "#4bc0c0", "#9966ff"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Mood Summary for the Week",
      },
    },
  };

  return (
    <div>
      <h2>Weekly Mood Summary</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default WeeklySummary;
