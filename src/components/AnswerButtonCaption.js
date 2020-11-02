import React from 'react';

function AnswerButtonCaption({ letter, text }) {
  return (<div className="answer__caption">
    <span className="answer__caption__letter">{letter}</span>
    <span className="answer__caption__text">{text}</span>
  </div>);
}

export default AnswerButtonCaption;
