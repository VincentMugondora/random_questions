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
    <div className="md:flex md:justify-between w-full bg-black">
      <div className="flex w-[50vw] flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 via-purple-700 to-pink-500 text-white px-6">
        {/* Left Side: Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-extrabold tracking-wide text-center drop-shadow-lg mb-6">
            Random Name & Question Picker
          </h1>

          <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-center border border-white/30 w-[350px] transition-transform transform hover:scale-105">
            <h2 className="text-4xl font-bold text-white mb-4 animate-pulse">
              {selectedName || "?"}
            </h2>
            <p className="mt-4 text-lg font-medium text-gray-200 min-h-[48px]">
              {selectedQuestion || "Press the button to start!"}
            </p>

            <button
              onClick={pickRandom}
              className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-110 active:scale-95"
            >
              Pick Random
            </button>
          </div>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden md:block mt-8 h-[100vh] fixed right-0 top-0 w-[50vw] md:mt-0">
        <img
          src="/know.jpg"
          alt="Game Illustration"
          className="rounded-r-lg shadow-lg h-[100%] w-full object-cover"
        />
      </div>
    </div>
  );
};

export default RandomMatcher;
