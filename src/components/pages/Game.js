import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { getQuestionsQuantity } from '../../helpers';
import QuestionPanel from '../QuestionPanel';
import LevelPanel from '../LevelPanel';
import { questions, prices } from '../../config.json';
import '../../styles/Game.css';

function Game() {
  const [level, setLevel] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[level]);
  const [earnedMoney, setEarnedMoney] = useState(-1);
  const [showMobilePanel, setShowMobilePanel] = useState(false);

  const finishGame = (money) => {
    setEarnedMoney(money);
  };

  const getFinalPrice = () => prices[Math.min(getQuestionsQuantity(), prices.length) - 1];

  const increaseLevel = () => {
    const questionsQuantity = getQuestionsQuantity();
    if (level >= 0 && level < questionsQuantity - 1) {
      setLevel(level + 1);
    } else if (level === questionsQuantity - 1) {
      finishGame(getFinalPrice());
    }
  };

  const toggleMobileMenu = () => setShowMobilePanel(!showMobilePanel);

  useEffect(() => {
    if (level >= 0 && level < questions.length) {
      setCurrentQuestion(questions[level]);
    }
  }, [level]);

  useEffect(() => {
    if (getQuestionsQuantity() <= 0) setEarnedMoney(0);
  }, []);

  return earnedMoney < 0 ? (<div className="main game">
    <QuestionPanel
      level={level}
      question={currentQuestion}
      toggleMobileMenu={toggleMobileMenu}
      increaseLevel={increaseLevel}
      finishGame={finishGame} />
    <LevelPanel
      level={level}
      show={showMobilePanel}
      toggleMobileMenu={toggleMobileMenu} />
  </div>) : (<Redirect to={{
    pathname: '/end',
    state: {
      earnedMoney,
    },
  }} />);
}

export default Game;
