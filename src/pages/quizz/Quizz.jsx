import React, { useState, useEffect } from "react";
import Cart from "../../components/Card/Cart";
import "./Quiz.css";
import * as loadQuestions from "../../services/loadQuestions"

function Quizz() {
  const [loadValue, setLoadValue] = useState(10)
  const [question, setQuestion] = useState([])

  //load questions
  const fetchApi = async () => {
    const result = await loadQuestions.load(loadValue)
    setQuestion(result)
  }

  console.log(loadValue);

  fetchApi()

  console.log(question);

  return (
    <div className="quizz_box">
      <Cart />
    </div>
  );
};

export default Quizz;
