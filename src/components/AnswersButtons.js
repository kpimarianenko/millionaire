import React, { useState } from 'react';
import AnswerButton from './AnswerButton';
import config from '../config.json';

function AnswersButtons({ answers, correctAnswers, price, increaseLevel, finishGame }) {
  const [isAnswered, setIsAnswered] = useState(false);
  const [isHighlight, setIsHighlight] = useState(false);
  const highlightCorrectAnswers = () => setIsHighlight(!isHighlight);
  // console.log(answers);
  const newAnswers = [];
  for (let i = 0; i < config.maxAnswerQuantity && i < answers.length; i += 1) {
    let isCorrect;
    if (config.multipleAnswers) {
      isCorrect = correctAnswers.includes(i);
    } else {
      isCorrect = i === correctAnswers[0];
    }
    const letter = String.fromCharCode(i + 65); // 65-90 ASCII codes of uppercase Latin alphabet
    const ans = <AnswerButton
      price={price}
      increaseLevel={increaseLevel}
      finishGame={finishGame}
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

export default AnswersButtons;
