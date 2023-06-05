import React, { useState, useEffect } from "react";
import "./Quiz.css";
import * as loadQuestions from "../../services/loadQuestions";
import { Link } from "react-router-dom";
import config from "../../config";

function Quizz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("https://opentdb.com/api.php?amount=10");
        const data = await response.json();
        setQuestions(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestions();
  }, []);

  const handleAnswer = (answer) => {
    if (!answerSelected) {
      setAnswerSelected(true);
      setSelectedAnswer(answer);
    }

    
  };

  const handleNextQuestion = () => {
    console.log(selectedAnswer);

    if (selectedAnswer == questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setAnswerSelected(false);
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setShowAnswer(false);
      }, 1000);
    } else {
      setQuizCompleted(true);
    }
    setShowAnswer(true);
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const { question, incorrect_answers, correct_answer } =
    questions[currentQuestion];
  const shuffledAnswers = [correct_answer, ...incorrect_answers]

  return (
    <div className="quiz-container">
      <h2>Question {currentQuestion + 1}</h2>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      {showAnswer ? (
        <div>
          {shuffledAnswers.map((answer, index) => (
            <p
              key={index}
              className={
                answer === correct_answer
                  ? "answer correct"
                  : "answer incorrect"
              }
            >
              {answer}
            </p>
          ))}
          {quizCompleted ? (
            <Link
              to={{
                pathname:"/pass",
                state: { score: score, totalQuestions: questions.length },
              }}
            >
              <button>Submit</button>
            </Link>
          ) : (
            <button onClick={handleNextQuestion}>Next</button>
          )}
        </div>
      ) : (
        <div>
          {shuffledAnswers.map((answer, index) => (
            <ul key={index}>
              <li>
                <input
                  type="radio"
                  name="answer"
                  id={`answer${index}`}
                  value={answer}
                  onChange={() => handleAnswer(answer)}
                />
                <label htmlFor={`answer${index}`}>{answer}</label>
              </li>
            </ul>
          ))}
          <button disabled={!answerSelected} onClick={handleNextQuestion}>
            Next
          </button>
        </div>
      )}
      <p>
        Score: {score}/{questions.length}
      </p>
    </div>
  );
}
export default Quizz;
