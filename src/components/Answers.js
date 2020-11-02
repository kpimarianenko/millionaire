import React, { useState, useEffect } from 'react';
import { BorderItem } from './Utils';
import { ReactComponent as ButtonBorder } from '../images/buttonBorder.svg';
import config from '../config.json';

function Answers({ answers, correctAnswers, price, increaseLevel, redirectToFinal }) {
  const [isAnswered, setIsAnswered] = useState(false);
  const [isHighlight, setIsHighlight] = useState(false);
  const highlightCorrectAnswers = () => setIsHighlight(!isHighlight);

  const newAnswers = [];
  for (let i = 0; i < config.maxAnswerQuantity && i < answers.length; i += 1) {
    let isCorrect;
    if (config.multipleAnswers && Array.isArray(correctAnswers)) {
      isCorrect = correctAnswers.includes(i);
    } else {
      isCorrect = i === correctAnswers;
    }
    const letter = String.fromCharCode(i + 65); // 65-90 ASCII codes of uppercase Latin alphabet
    const ans = <Answer
      price={price}
      increaseLevel={increaseLevel}
      redirectToFinal={redirectToFinal}
      isHighlight={isHighlight}
      highlightCorrectAnswers={highlightCorrectAnswers}
      isAnswered={isAnswered}
      setIsAnswered={setIsAnswered}
      letter={letter}
      answer={answers[i]}
      isCorrect={isCorrect}
      key={i} />;
    newAnswers.push(ans);
  }

  return (<div className="question-panel__answers">
    {newAnswers}
  </div>);
}

function Answer({
  isAnswered, setIsAnswered, increaseLevel,
  redirectToFinal, answer, letter, highlightCorrectAnswers,
  price, isCorrect, isHighlight, ...attrs
}) {
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
      nextMove = redirectToFinal;
      highlightCorrectAnswers();
    }
    setTimeout(() => {
      setIsAnswered(false);
      nextMove(price);
      setClassName('');
    }, config.beforeNextLevelDelay);
  };

  const selectAnswer = () => {
    if (isAnswered) return;
    setIsAnswered(true);
    setClassName(selectedClassName);
    setTimeout(answerOnQuestion, config.afterAnswerDelay);
  };

  return (<BorderItem {...attrs} onClick={selectAnswer} Border={ButtonBorder} className={`border-button ${className}`}>
    <AnswerCaption letter={letter} text={answer} />
  </BorderItem>);
}

function AnswerCaption({ letter, text }) {
  return (<div className="answer__caption">
    <span className="answer__caption__letter">{letter}</span>
    <span className="answer__caption__text">{text}</span>
  </div>);
}

export default Answers;
