import React, { useState, useEffect, useContext } from "react";
import "./Quiz.css";
import { Link } from "react-router-dom";
import { QuizContext } from "../../components/QuizzContext/quizzUseContext";
import Button from "../../components/Button/Button";

function Quizz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [ask, setAsk] = useState(false);

  const {
    score,
    totalQuestions,
    increaseScore,
    setTotal,
    time,
    setTime,
    results,
    setResults,
  } = useContext(QuizContext);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("https://opentdb.com/api.php?amount=10");
        const data = await response.json();
        setQuestions(data.results);
        setTotal(data.results.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestions();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const handleAnswer = (answer) => {
    if (!answerSelected) {
      setAnswerSelected(true);
      setSelectedAnswer(answer);
      setResults((prevAnswers) => [...prevAnswers,  {
        question: question,
        shuffledAnswers: [correct_answer, ...incorrect_answers],
        correct_answer: correct_answer,
        incorrect_answers:incorrect_answers,
        answer,
      }]);
    }
  };

  const handleNextQuestion = () => {
    if (selectedAnswer == questions[currentQuestion].correct_answer) {
      increaseScore(1);
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
  const Button_Exit = () => {
    if (!ask) {
      setAsk(true);
    } else {
      setAsk(false);
    }
  };

  if (questions.length === 0) {
    return <div style={{ color: "#fff" }}>Loading...</div>;
  }

  const { question, incorrect_answers, correct_answer } =
    questions[currentQuestion];
  const shuffledAnswers = [correct_answer, ...incorrect_answers];

  return (
    <div className="quiz-container">
      <div className="quiz_exit">
        <button className="quiz_button_exit_box" onClick={Button_Exit}>
          X
        </button>
      </div>
      {ask && (
        <div className="quiz_ask">
          <p className="title_qiz_ask">Do you want to exit?</p>

          <Link to={{ pathname: "/" }}>
            <button className="quiz_ask_green">Yes</button>
          </Link>
          <button className="quiz_ask_red" onClick={Button_Exit}>
            No
          </button>
        </div>
      )}

      <h2 className="quiz_title_box">
        Question {currentQuestion + 1}/{questions.length}
      </h2>
      <p
        className="quiz_question_box"
        dangerouslySetInnerHTML={{ __html: question }}
      ></p>
      {showAnswer ? (
        <div className="quiz_answer_check_box">
          {shuffledAnswers.map((answer, index) => {
            const isCorrect = answer === correct_answer;
            const isSelected = answer === selectedAnswer;
            const className = isCorrect
              ? "correct"
              : isSelected
              ? "incorrect"
              : "answerr";
            return (
              <p key={index} className={className}>
                {answer}
              </p>
            );
          })}
          {quizCompleted && (
            <Link
              to={{
                pathname: "/pass",
                state: { score, totalQuestions, time, results },
              }}
            >
              <div className="button_box">
                <Button btnName="Submit" handleClick={() => {}} />
              </div>
            </Link>
          )}
        </div>
      ) : (
        <div className="quiz_answer_box">
          {shuffledAnswers.map((answer, index) => (
            <ul key={index}>
              <li>
                <label htmlFor={`answer${index}`}>{answer}</label>
                <input
                  type="radio"
                  name="answer"
                  id={`answer${index}`}
                  value={answer}
                  onChange={() => handleAnswer(answer)}
                />
              </li>
            </ul>
          ))}
          <div className="button_box">
            <button
              className="Button_name"
              disabled={!answerSelected}
              onClick={handleNextQuestion}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Quizz;
