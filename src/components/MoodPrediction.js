import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function MoodPrediction({ moodEntries }) {
  const predictMood = () => {
    if (moodEntries.length < 3) return null;

    const lastThreeMoods = moodEntries.slice(-3).map((entry) => entry.mood);
    const allSame = lastThreeMoods.every((mood) => mood === lastThreeMoods[0]);

    return allSame ? lastThreeMoods[0] : null;
  };

  const predictedMood = predictMood();

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center h-full space-y-6 lg:space-y-0 lg:space-x-12">
      {/* Left Section: Greeting and Prediction */}
      <div className="space-y-12 text-center lg:text-left">
        {/* Greeting */}
        <div>
          <h2 className="text-largeTitle font-bold">Hey, Welcome Back!</h2>
          <p className="text-paragraph text-textSecondary">Hope you are feeling good!</p>
        </div>

        {/* Prediction */}
        <div>
          {predictedMood ? (
            <p className="text-paragraph">
              You might feel{" "}
              <span className="font-bold text-highlight">{predictedMood}</span>{" "}
              tomorrow unless you make some changes!
            </p>
          ) : (
            <p className="text-paragraph">
              Not enough data to predict your mood. Keep logging!
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
