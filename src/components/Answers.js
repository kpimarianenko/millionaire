import React, { useState } from 'react';
import { BorderItem } from './Utils';
import { ReactComponent as ButtonBorder } from '../images/buttonBorder.svg';
import config from '../config.json';

function Answers({ answers, correctAnswer, price, increaseLevel, redirectToFinal }) {
  const [isAnswered, setIsAnswered] = useState(false);

  const highlightCorrectAnswers = () => {

  };

  const newAnswers = [];
  for (let i = 0; i < config.maxAnswerQuantity && i < answers.length; i += 1) {
    const letter = String.fromCharCode(i + 65); // 65-90 ASCII codes of uppercase Roman alphabet
    const ans = <Answer
      price={price}
      increaseLevel={increaseLevel}
      redirectToFinal={redirectToFinal}
      highlightCorrectAnswers={highlightCorrectAnswers}
      isAnswered={isAnswered}
      setIsAnswered={setIsAnswered}
      letter={letter}
      answer={answers[i]}
      isCorrect={correctAnswer === i}
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
  price, isCorrect, ...attrs
}) {
  const [className, setClassName] = useState('');

  const answerOnQuestion = () => {
    let nextMove;
    if (isCorrect) {
      setClassName('border-button-correct');
      nextMove = increaseLevel;
    } else {
      setClassName('border-button-wrong');
      nextMove = redirectToFinal;
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
    setClassName('border-button-selected');

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
