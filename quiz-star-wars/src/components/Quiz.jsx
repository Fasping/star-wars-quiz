import { useState } from "react";
import questions from "../questions.json";

function Quiz() {
  const [level, setLevel] = useState("easy");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

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
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  return (
    <div>
      <h1>Star Wars Quiz</h1>
      <div>
        <label>
          <input
            type="radio"
            name="level"
            value="easy"
            checked={level === "easy"}
            onChange={() => setLevel("easy")}
          />
          Easy
        </label>
        <label>
          <input
            type="radio"
            name="level"
            value="medium"
            checked={level === "medium"}
            onChange={() => setLevel("medium")}
          />
          Medium
        </label>
        <label>
          <input
            type="radio"
            name="level"
            value="hard"
            checked={level === "hard"}
            onChange={() => setLevel("hard")}
          />
          Hard
        </label>
      </div>
      <div>
        <p>
          Question {currentQuestion + 1}/{questions[level].length}
        </p>
        <h2>{questions[level][currentQuestion].question}</h2>
        <ul>
          {questions[level][currentQuestion].options.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
