import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import cat1 from "../../assets/img/cat1.png";
import "./Pass.css";
import { useLocation } from "react-router-dom"

const Pass = () => {
  const location = useLocation();
  // const { score, totalQuestions } = location.state;
  console.log(location.state);
  // return (
  //   <div className="pass_box">
  //     <div className="pass_box_image">
  //       <img src={cat1} alt="cat" />
  //     </div>
  //     <div className="pass_box_font">
  //       <h4>Congratulations!</h4>
  //       <p>You are amazing</p>
  //       <span>{score}/{totalQuestions} correct answers in 35 seconds</span>
  //     </div>
  //     <div className="pass_box_Button">
  //       <Button btnName="Play Again" handleClick={() => {}} />
  //     </div>
  //   </div>
  // );
};

export default Pass;
