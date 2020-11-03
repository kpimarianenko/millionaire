import React from 'react';

function AnswerButtonCaption({ letter, text }) {
  return (<div className="answer__caption">
    <span className="caption__letter">{letter}</span>
    <span className="caption__text">{text}</span>
  </div>);
}

export default AnswerButtonCaption;
