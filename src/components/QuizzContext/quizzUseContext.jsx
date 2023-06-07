import React, { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [time, setTime] = useState(0);
  const [results, setResults] = useState([]);

  const increaseScore = (amount) => {
    setScore(score + amount);
  };

  const setTotal = (amount) => {
    setTotalQuestions(amount);
  };

  const contextValue = {
    score,
    totalQuestions,
    increaseScore,
    setTotal,
    setScore,
    time,
    setTime,
    setResults,
    results,

  };

  return (
    <QuizContext.Provider value={contextValue}>
      {children}
    </QuizContext.Provider>
  );
};