import React, { useState, useEffect, useRef } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export function WeeklySummary({ moodEntries }) {
  const [isInView, setIsInView] = useState(false);
  const chartRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing once the element is visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (observer && chartRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="md:text-largeTitle text-[1.2rem] font-bold">Weekly Summary</h2>
        <p className="md:text-paragraph text-[0.8rem] text-textSecondary">Your mood distribution for the past week</p>
      </div>
      <div className="card-content" ref={chartRef}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="mood" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="count"
              fill="#8884d8"
              animationDuration={1500} // Animation duration in milliseconds
              animationBegin={0}       // No delay
              isAnimationActive={isInView} // Animate only when in view
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
