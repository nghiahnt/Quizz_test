import React from "react";
import Button from "../../components/Button/Button";
import cat1 from "../../assets/img/cat1.png";
import "./home.css";
export const Home = () => {
  const Alert = () => {
    alert("are you ready?");
  };
  return (
    <div className="home_box">
      <div className="home_image_box">
        <img src={cat1} alt="Cat" className="img" />
      </div>
      <Button btnName="Start" handleClick={Alert} />
    </div>
  );
};
