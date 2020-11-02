import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { BorderItem } from './Utils';
import Answers from './Answers';
import { ReactComponent as MoneyBorder } from '../moneyBorder.svg';
import MenuButton from '../menuButton.svg';
import { questions } from '../config.json';
import '../styles/Game.css';

function Game() {
  const [level, setLevel] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[level]);
  const [earnedMoney, setEarnedMoney] = useState(-1);

  const redirectToFinal = (money) => {
    setEarnedMoney(money);
  };

  const increaseLevel = () => {
    if (level >= 0 && level < questions.length - 1) {
      setLevel(level + 1);
    } else if (level === questions.length - 1) {
      redirectToFinal(questions[questions.length - 1].price);
    }
  };

  useEffect(() => {
    if (level >= 0 && level < questions.length) {
      setCurrentQuestion(questions[level]);
    }
  }, [level]);

  return earnedMoney < 0 ? (<div className="main game">
    <QuestionPanel
      level={level}
      item={currentQuestion}
      increaseLevel={increaseLevel}
      redirectToFinal={redirectToFinal} />
    <LevelPanel level={level} maxLevel={questions.length} />
  </div>) : (<Redirect to={{
    pathname: '/end',
    state: {
      earnedMoney,
    },
  }} />);
}

function QuestionPanel({ level, item, increaseLevel, redirectToFinal }) {
  return (<div className="wrapper question-panel">
    <LevelPanelMobileButton />
    <Question question={item.question} />
    <Answers
      price={level > 0 ? questions[level - 1].price : 0}
      redirectToFinal={redirectToFinal}
      increaseLevel={increaseLevel}
      answers={item.answers}
      correctAnswer={item.correctAnswer} />
  </div>);
}

function Question({ question, ...attrs }) {
  return (<h3 className="question-panel__header" {...attrs}>{question}</h3>);
}

function LevelPanel({ level, maxLevel }) {
  const levels = [];
  for (let i = 0; i < maxLevel; i += 1) {
    let className = '';
    if (i < level) className = 'level-panel__money-unactive';
    else if (i === level) className = 'level-panel__money-current';
    levels.push(<Level money={questions[i].price} className={className} key={i} />);
  }
  levels.reverse();

  return (<div className="level-panel">
    {levels}
  </div>);
}

function Level({ money, className, ...attrs }) {
  return (<BorderItem Border={MoneyBorder} className={`level-panel__money ${className}`} {...attrs}>{`$${money}`}</BorderItem>);
}

function LevelPanelMobileButton() {
  return (<div className="level-panel-button-wrapper">
    <img src={MenuButton} alt="menuBtn" className="level-panel-button" />
  </div>);
}

export default Game;
