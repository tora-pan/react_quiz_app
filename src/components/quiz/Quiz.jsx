import React, { useContext } from "react";
import { QuizContext } from "../../context/quizContext";
import Question from "../question/Question";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="quiz-wrapper">
      {quizState.showResults && (
        <div className="results-wrapper">
          <div className="congrats">Contgratulations!</div>
          <div className="results-info">
            You've managed to get {quizState.correctAnswerCount} out of{" "}
            {quizState.questions.length} correct.
          </div>
          <div
            className="next-button"
            onClick={() => dispatch({ type: "RESTART" })}
          >
            Restart Quiz
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1} /{" "}
            {quizState.questions.length}
          </div>
          <Question />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next Question
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
