import React, { useState, useEffect, useContext } from "react";
import Button from "../../components/Button/Button";
import quizz from "../../assets/img/quizz.jpg";
import quizz2 from "../../assets/img/quizz2.jpg";
import "./Pass.css";
import { QuizContext } from "../../components/QuizzContext/quizzUseContext";
import { Link } from "react-router-dom";
import Review from "../Review/Review";

const Pass = () => {
  const {
    score,
    totalQuestions,
    time,
    setScore,
    increaseScore,
    results,
    setResults,
    setTime,
  } = useContext(QuizContext);

  const resetGame = () => {
    setResults([]);
    setScore(0);
    setTime(0);
  };

  return (
    <div className="box_pass_top">
      <div className="pass_box">
        {score >= 5 ? (
          <div>
            <div className="pass_box_image">
              <img src={quizz} alt="cat" />
            </div>
            <div className="pass_box_font">
              <h4>Congratulations!</h4>
              <p>You are amazing</p>
              <span>
                {score}/{totalQuestions} correct answers in {time} seconds
              </span>
            </div>
            <div className="pass_box_Button">
              <Link to={{ pathname: "/quizz" }}>
                <Button btnName="Play Again" handleClick={resetGame} />
              </Link>
              <Link to={{ pathname: "/review" }}>
                <Button btnName="Review" handleClick={() => {}} />
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="pass_box_image">
              <img src={quizz2} alt="cat" />
            </div>
            <div className="pass_box_font">
              <h4>Completed!</h4>
              <p>Better luck nexttime!</p>
              <span>
                {score}/{totalQuestions} correct answers in {time} seconds
              </span>
            </div>
            <div className="pass_box_Button">
              <Link to={{ pathname: "/quizz" }}>
                <Button btnName="Play Again" handleClick={resetGame} />
              </Link>
              <Link to={{ pathname: "/review" }}>
                <Button btnName="Review" handleClick={() => {}} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pass;
