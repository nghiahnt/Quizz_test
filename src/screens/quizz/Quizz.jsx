import React, { useState } from "react";
import "./Quiz.css";
import Button from "../../components/Button/Button";

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="quizz_box">
      <div className="quizz_box_title">
        <h4>Question 1/10</h4>
        <p>In any programming language, what is...?</p>
        <ul>
          <li>
            <label htmlFor="option1">Option 1</label>
            <input
              type="radio"
              id="option1"
              name="options"
              value="option1"
              className="check_box"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
          </li>
          <li>
            <label htmlFor="option2">Option 2</label>
            <input
              type="radio"
              className="check_box"
              id="option2"
              name="options"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
          </li>
          <li>
            <label htmlFor="option3">Option 3</label>
            <input
              type="radio"
              id="option3"
              className="check_box"
              name="options"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={handleOptionChange}
            />
          </li>
          <li>
            <label htmlFor="option4">Option 4</label>
            <input
              type="radio"
              className="check_box"
              id="option4"
              name="options"
              value="option4"
              checked={selectedOption === "option4"}
              onChange={handleOptionChange}
            />
          </li>
        </ul>
      </div>
      <div className="button_box">
        <Button btnName="Next" handleClick={() => {}} />
      </div>
    </div>
  );
};

export default Quiz;
