import React from 'react';

function CornerButton({ img, ...attrs }) {
  return (<div className="corner-button-wrapper">
    <img {...attrs} src={img} alt="cornerBtn" className="corner-button" />
  </div>);
}

export default CornerButton;
