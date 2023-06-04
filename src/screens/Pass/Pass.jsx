import React from "react";
import Button from "../../components/Button/Button";
import cat1 from "../../assets/img/cat1.png";
import "./Pass.css";
const Pass = () => {
  return (
    <div className="pass_box">
      <div className="pass_box_image">
        <img src={cat1} alt="cat"/>
      </div>
      <div className="pass_box_font">
        <h4>Congratulations!</h4>
        <p>You are amazing</p>
        <span>5/10 correct answers in 35 seconds</span>
      </div>
      <div className="pass_box_Button">
        <Button btnName="Play Again" handleClick={()=>{}}/>
      </div>
    </div>
  );
};

export default Pass;
