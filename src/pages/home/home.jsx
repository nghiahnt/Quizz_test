import React from "react";
import Button from "../../components/Button/Button";
import cat1 from "../../assets/img/cat1.png";
import "./home.css";
import { Link } from "react-router-dom";
import config from "../../config";

export const Home = () => {
  return (
    <div className="home_box">
      <div className="home_image_box">
        <img src={cat1} alt="Cat" className="img" />
      </div>
      <div className="button_home">
        <Link to={config.routes.quizz}>
          <Button
            btnName="Start"
          />
        </Link>
      </div>
    </div>
  );
};
