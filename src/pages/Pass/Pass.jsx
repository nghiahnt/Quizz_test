import React, { useState, useEffect, useContext } from "react";
import Button from "../../components/Button/Button";
import cat1 from "../../assets/img/cat1.png";
import cat2 from "../../assets/img/cat2.png";
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
              <img src={cat1} alt="cat" />
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
              <img src={cat2} alt="cat" />
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
