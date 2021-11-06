import React,{useState} from 'react';
import "./App.css";

function App() {
  const questions = [
    {
      questionText: "CSS stands for - ",
      answerOptions: [
        { answerText: "Color and Sheets", isCorrect: false },
        { answerText: "Cascade Style Sheets", isCorrect: false },
        { answerText: "Cascading Style Sheets", isCorrect: true },
        { answerText: "None of the above", isCorrect: false },
      ],
    },
    {
      questionText:
        "The property in CSS used to change the background color of an element is -",
      answerOptions: [
        { answerText: "bg-color", isCorrect: false },
        { answerText: "background-color", isCorrect: true },
        { answerText: "color", isCorrect: false },
        { answerText: "None of these", isCorrect: false },
      ],
    },
    {
      questionText:
        " Which of the following is the correct syntax to display the hyperlinks without any underline?",
      answerOptions: [
        { answerText: "a {text-decoration : none;}", isCorrect: true },
        { answerText: "a {text-decoration : underline;}", isCorrect: false },
        { answerText: "a {decoration : no-underline;}", isCorrect: false },
        { answerText: "None of these", isCorrect: false },
      ],
    },
    {
      questionText: "Are the negative values allowed in padding property?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: true },
        { answerText: "Cant say", isCorrect: false },
        { answerText: "Maybe", isCorrect: false },
      ],
    },
    {
      questionText:
        "The CSS property used to specify the transparency of an element is -",
      answerOptions: [
        { answerText: "filter", isCorrect: false },
        { answerText: "visibility", isCorrect: false },
        { answerText: "overlay", isCorrect: false },
        { answerText: "opacity", isCorrect: true },
      ],
    },
    {
      questionText:
        "Which of the following class in Bootstrap is used to provide a responsive fixed width container?",
      answerOptions: [
        { answerText: ".container=fixed", isCorrect: false },
        { answerText: ".container-fluid", isCorrect: false },
        { answerText: ".container", isCorrect: true },
        { answerText: "none of these", isCorrect: false },
      ],
    },
    {
      questionText:
        " Which of the following is the correct syntax of creating a standard navigation tab?",
      answerOptions: [
        { answerText: '<ul class="nav nav-tabs">', isCorrect: true },
        { answerText: '<ul class="navigation nav-tabs">', isCorrect: false },
        { answerText: '<ul class="navigation tabs">', isCorrect: false },
        { answerText: '<ul class="nav tab">', isCorrect: false },
      ],
    },
    {
      questionText: "Which type of JavaScript language is ",
      answerOptions: [
        { answerText: "Object-Oriented", isCorrect: false },
        { answerText: "Object-based", isCorrect: true },
        { answerText: "Assembly-language", isCorrect: false },
        { answerText: "High Level", isCorrect: true },
      ],
    },
    {
      questionText:
        " When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints",
      answerOptions: [
        { answerText: "Prints an exception error", isCorrect: false },
        { answerText: "Prints an overflow error", isCorrect: false },
        { answerText: "Prints the value as such", isCorrect: false },
        { answerText: 'MaybeDisplays "Infinity"', isCorrect: true },
      ],
    },
    {
      questionText:
        "Which of the following given functions of the Number Object formats a number with a different number of digits to the right of the decimal?",
      answerOptions: [
        { answerText: "toExponential()", isCorrect: false },
        { answerText: "toFixed()", isCorrect: true },
        { answerText: "toPrecision()", isCorrect: false },
        { answerText: "toLocaleString()", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
