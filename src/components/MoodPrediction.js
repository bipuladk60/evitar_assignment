import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function MoodPrediction({ moodEntries }) {
  const predictMood = (entries) => {
    if (entries.length === 0) return null; // Return null if no entries

    const emojiToMood = {
      "😊": { label: "happy(😊)", weight: 5 },
      "😐": { label: "neutral(😐)", weight: 3 },
      "😞": { label: "sad(😞)", weight: 1 },
      "😡": { label: "angry(😡)", weight: 2 },
      "😴": { label: "tired(😴)", weight: 1 },
    };

    const moodScores = entries.reduce((acc, entry, index) => {
      const moodData = emojiToMood[entry.mood];
      const weight = moodData.weight * (index + 1);
      acc[entry.mood] = (acc[entry.mood] || 0) + weight;
      return acc;
    }, {});

    const predictedMoodEmoji = Object.keys(moodScores).reduce((a, b) =>
      moodScores[a] > moodScores[b] ? a : b
    );

    return emojiToMood[predictedMoodEmoji].label;
  };

  const predictedMood = predictMood(moodEntries);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center h-full space-y-6 lg:space-y-0 lg:space-x-12">
      {/* Left Section: Greeting and Prediction */}
      <div className="space-y-12 text-center lg:text-left">
        <div>
          <h2 className="text-largeTitle font-bold">Hey, Welcome Back!</h2>
          <p className="text-paragraph text-textSecondary">Hope you are feeling good!</p>
        </div>
        <div>
          {predictedMood ? (
            <p className="text-paragraph">
              Based on your past moods, your mood might be{" "}
              <span className="font-bold">{predictedMood}</span>{" "}
              tomorrow unless you make some changes!
            </p>
          ) : (
            <p className="text-paragraph">
              No data to predict your mood. Start logging now!
            </p>
          )}
        </div>
      </div>

      {/* Right Section: Animation */}
      <div className="flex items-center justify-center w-full lg:w-1/3 h-full">
        <DotLottieReact
          src="https://lottie.host/5d7cef87-7b9c-409f-9e63-1cbe56b1467a/CUmr3DL0Hs.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
}
