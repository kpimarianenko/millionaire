import React, { useState, useEffect } from 'react';
import BorderItem from './BorderItem';
import { ReactComponent as ButtonBorder } from '../images/buttonBorder.svg';
import config from '../config.json';
import AnswerButtonCaption from './AnswerButtonCaption';

function AnswerButton({
  isAnswered, setIsAnswered, increaseLevel,
  finishGame, answer, letter, highlightCorrectAnswers,
  price, isCorrect, isHighlight, ...attrs
}) {
  const { delays } = config;

  const correctClassName = 'border-button-correct';
  const wrongClassName = 'border-button-wrong';
  const selectedClassName = 'border-button-selected';

  const [className, setClassName] = useState('');

  useEffect(() => {
    if (isHighlight && isCorrect) {
      setClassName(correctClassName);
    }
  }, [isHighlight]);

  const answerOnQuestion = () => {
    let nextMove;
    if (isCorrect) {
      setClassName(correctClassName);
      nextMove = increaseLevel;
    } else {
      setClassName(wrongClassName);
      nextMove = finishGame;
      highlightCorrectAnswers();
    }
    setTimeout(() => {
      setIsAnswered(false);
      nextMove(price);
      setClassName('');
    }, delays.beforeNextLevelDelay);
  };

  const selectAnswer = () => {
    if (isAnswered) return;
    setIsAnswered(true);
    setClassName(selectedClassName);
    setTimeout(answerOnQuestion, delays.afterAnswerDelay);
  };

  return (<BorderItem {...attrs} onClick={selectAnswer} Border={ButtonBorder} className={`border-button ${className}`}>
    <AnswerButtonCaption letter={letter} text={answer} />
  </BorderItem>);
}

export default AnswerButton;
