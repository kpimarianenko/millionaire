import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { BorderItem, numberWithCommas } from './Utils';
import Answers from './Answers';
import { ReactComponent as MoneyBorder } from '../images/moneyBorder.svg';
import MenuButton from '../images/menuButton.svg';
import CloseButton from '../images/closeButton.svg';
import { questions } from '../config.json';
import '../styles/Game.css';

function Game() {
  const [level, setLevel] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[level]);
  const [earnedMoney, setEarnedMoney] = useState(-1);
  const [showMobilePanel, setShowMobilePanel] = useState(false);

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

  const showOrHideMobileMenu = () => setShowMobilePanel(!showMobilePanel);

  useEffect(() => {
    if (level >= 0 && level < questions.length) {
      setCurrentQuestion(questions[level]);
    }
  }, [level]);

  return earnedMoney < 0 ? (<div className="main game">
    <QuestionPanel
      level={level}
      item={currentQuestion}
      showOrHideMobileMenu={showOrHideMobileMenu}
      increaseLevel={increaseLevel}
      redirectToFinal={redirectToFinal} />
    <LevelPanel
      level={level}
      maxLevel={questions.length}
      show={showMobilePanel}
      showOrHideMobileMenu={showOrHideMobileMenu} />
  </div>) : (<Redirect to={{
    pathname: '/end',
    state: {
      earnedMoney,
    },
  }} />);
}

function QuestionPanel({ level, item, increaseLevel, redirectToFinal, showOrHideMobileMenu }) {
  return (<div className="wrapper question-panel">
    <CornerButton img={MenuButton} onClick={showOrHideMobileMenu} />
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

function LevelPanel({ level, maxLevel, show, showOrHideMobileMenu }) {
  const levels = [];
  for (let i = 0; i < maxLevel; i += 1) {
    let className = '';
    if (i < level) className = 'level-panel__money-unactive';
    else if (i === level) className = 'level-panel__money-current';
    levels.push(<Level money={questions[i].price} className={className} key={i} />);
  }
  levels.reverse();

  return (<div className={show ? 'level-panel__wrapper show' : 'level-panel__wrapper'}>
    <CornerButton img={CloseButton} onClick={showOrHideMobileMenu} />
    <div className="level-panel">
      {levels}
    </div>
  </div>);
}

function Level({ money, className, ...attrs }) {
  return (<BorderItem
    {...attrs}
    Border={MoneyBorder}
    className={`level-panel__money ${className}`}>
    {`$${numberWithCommas(money)}`}
  </BorderItem>);
}

function CornerButton({ img, ...attrs }) {
  return (<div className="corner-button-wrapper">
    <img {...attrs} src={img} alt="menuBtn" className="corner-button" />
  </div>);
}

// function LevelPanelMobile() {
//   return (<LevelPanel />);
// }

export default Game;
