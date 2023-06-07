import React from "react";
import Button from "../../components/Button/Button";
import quizz2 from "../../assets/img/quizz2.jpg";
import "./home.css";
import { Link } from "react-router-dom";
import config from "../../config";

export const Home = () => {
  return (
    <div className="home_box">
      <div className="home_image_box">
        <img src={quizz2} alt="Cat" className="img" />
      </div>
      <div className="button_home">
        <Link to={config.routes.quizz}>
          <Button 
            className="home_btn"
            btnName="Start"
          />
        </Link>
      </div>
    </div>
  );
};
