import React, { useState } from "react";
import data from "./Data.json";

const RandomMatcher = () => {
  const [selectedName, setSelectedName] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const pickRandom = () => {
    const randomName =
      data.names[Math.floor(Math.random() * data.names.length)];
    const randomQuestion =
      data.questions[Math.floor(Math.random() * data.questions.length)];
    setSelectedName(randomName);
    setSelectedQuestion(randomQuestion);
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-950">
      {/* Left Side: Content */}
      <div className="flex flex-col items-center justify-center flex-1 px-6 py-10 bg-gradient-to-br from-teal-600 via-blue-700 to-indigo-800 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-center drop-shadow-lg mb-6">
          Random Name & Question Picker
        </h1>

        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-xl border border-white/20 w-full max-w-sm text-center transition-transform transform hover:scale-105">
          <h2 className="text-4xl font-bold text-white mb-4 animate-pulse">
            {selectedName || "?"}
          </h2>
          <p className="mt-4 text-lg font-medium text-gray-200 min-h-[48px]">
            {selectedQuestion || "Press the button to start!"}
          </p>

          <button
            onClick={pickRandom}
            className="mt-6 bg-cyan-500 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:bg-cyan-600 hover:shadow-xl transform hover:-translate-y-1 active:scale-95"
          >
            Pick Random
          </button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden md:block w-1/2 relative">
        <img
          src="/know.jpg"
          alt="Game Illustration"
          className="h-full w-full object-cover rounded-l-lg"
        />
        <div className="absolute inset-0 bg-black/50 rounded-l-lg"></div>
      </div>
    </div>
  );
};

export default RandomMatcher;
