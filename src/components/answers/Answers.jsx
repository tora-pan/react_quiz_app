import React from "react";

const Answers = ({
  answerText,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
}) => {
  const isCorrect = currentAnswer && answerText === correctAnswer;
  const isIncorrect =
    currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrect ? "correct-answer" : "";
  const wrongAnswerClass = isIncorrect ? "wrong-answer" : "";
  const disabledAnswerClass = currentAnswer ? "disabled-answer" : "";
  return (
    <div
      className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledAnswerClass}`}
      onClick={() => onSelectAnswer(answerText)}
    >
      <div className="answer-text">{answerText}</div>
    </div>
  );
};

export default Answers;
