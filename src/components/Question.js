import React from 'react';

function Question({ question, ...attrs }) {
  return (<h3 className="question-panel__header" {...attrs}>{question}</h3>);
}

export default Question;
