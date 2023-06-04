import React, { useState, useEffect } from "react";
import Cart from "../../components/Card/Cart";
import "./Quiz.css";

import axios from "axios";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=10"
        );
        setQuestions(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const currentQuestionData = questions[currentQuestion];
  return (
    <div className="quizz_box">
      <Cart data={currentQuestionData}/>
    </div>
  );
};

export default Quiz;
