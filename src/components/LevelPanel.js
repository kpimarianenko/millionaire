import React from 'react';
import CornerButton from './CornerButton';
import Level from './Level';
import CloseButton from '../images/closeButton.svg';
import { getQuestionsQuantity } from '../helpers';
import { prices } from '../config.json';

function LevelPanel({ level, show, toggleMobileMenu }) {
  const levels = [];
  const questionsQuantity = getQuestionsQuantity();

  const getClassName = (index) => {
    switch (true) {
      case (index < level):
        return 'level-panel__level-unactive';
      case (index === level):
        return 'level-panel__level-current';
      default:
        return '';
    }
  };

  for (let i = 0; i < questionsQuantity; i += 1) {
    const className = getClassName(i);
    levels.push(<Level
      money={prices[i] || prices[prices.length - 1]}
      className={className}
      key={i} />);
  }

  return (<div className={show ? 'wrapper__level-panel show' : 'wrapper__level-panel'}>
    <CornerButton img={CloseButton} onClick={toggleMobileMenu} />
    <div className="level-panel">
      {levels}
    </div>
  </div>);
}

export default LevelPanel;
