import React from 'react';
import Question from './Question';
import AnswersButtons from './AnswersButtons';
import CornerButton from './CornerButton';
import MenuButton from '../images/menuButton.svg';
import { prices } from '../config.json';

function QuestionPanel({ level, question, increaseLevel, finishGame, toggleMobileMenu }) {
  return (<div className="wrapper question-panel">
    <CornerButton img={MenuButton} onClick={toggleMobileMenu} />
    <Question question={question.text} />
    <AnswersButtons
      price={level > 0 ? prices[level - 1] : 0}
      finishGame={finishGame}
      increaseLevel={increaseLevel}
      answers={question.answers}
      correctAnswers={question.correctAnswersIndexes} />
  </div>);
}

export default QuestionPanel;
