import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Quiz from './components/quiz/Quiz';
import { QuizProvider } from './context/quizContext';

ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

