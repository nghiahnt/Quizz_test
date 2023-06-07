import React, { useContext } from "react";
import { QuizContext } from "../../components/QuizzContext/quizzUseContext";
import "./Review.css";
import { Link } from "react-router-dom";

const Review = () => {
  const {
    score,
    totalQuestions,
    time,
    results,
    setResults,
    setScore,
    setTime,
  } = useContext(QuizContext);
  console.log(results);
  const handleRetry = () => {
    setResults([]);
    setScore(0);
    setTime(0);
  };

  return (
    <div className="quiz_answer_check_review_box">
      <div className="quiz_exit_box">
        <Link to={{ pathname: "/" }}>
          <p>X</p>
        </Link>
      </div>
      <div>
        {results.map((result, index) => (
          <div key={index}>
            <p style={{ margin: "1rem" }}>
              {index + 1}.{result.question}
            </p>
            {result.shuffledAnswers.map((answer, index) => {
              const isCorrect = answer === result.correct_answer;
              const isSelected = answer === result.answer;
              const className = isCorrect
                ? "corrected"
                : isSelected
                ? "incorrected"
                : "answers";
              return (
                <p key={index} className={className}>
                  {answer}
                </p>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
