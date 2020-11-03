import React from 'react';

function CornerButton({ Image, ...attrs }) {
  return (<div className="corner-button-wrapper">
    <Image {...attrs} className="corner-button" />
  </div>);
}

export default CornerButton;
