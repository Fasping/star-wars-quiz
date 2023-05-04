import { useState } from "react";
import questions from "../questions.json";
import "./Quiz.css";

function Quiz() {
  const [level, setLevel] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleLevelSelection = (selectedLevel) => {
    setLevel(selectedLevel);
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleOptionClick = (selectedOption) => {
    const isCorrect =
      selectedOption === questions[level][currentQuestion].answer;
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions[level].length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Your score is ${score}/${questions[level].length}`);
      setLevel("");
    }
  };

  return (
    <div className="quiz-container">
      {level === "" ? (
        <>
          <h1 className="quiz-title">Star Wars Quiz</h1>
          <div className="quiz-level-container">
            <button
              className="quiz-level easy"
              onClick={() => handleLevelSelection("easy")}
            >
              Easy
            </button>
            <button
              className="quiz-level medium"
              onClick={() => handleLevelSelection("medium")}
            >
              Medium
            </button>
            <button
              className="quiz-level hard"
              onClick={() => handleLevelSelection("hard")}
            >
              Hard
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="quiz-question-container">
            <p className="quiz-question-counter">
              Question {currentQuestion + 1}/{questions[level].length}
            </p>
            <h2 className="quiz-question">
              {questions[level][currentQuestion].question}
            </h2>
            <ul className="quiz-options">
              {questions[level][currentQuestion].options.map((option) => (
                <li
                  key={option}
                  className="quiz-option"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <div className="quiz-score-container">
            <p className="quiz-score">Score: {score}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
