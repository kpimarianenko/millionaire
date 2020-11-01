import React from 'react';
import { Menu } from './Utils';
import '../styles/Start.css';

function Start() {
  const title = 'Who wants to be a millionaire?';
  const btnText = 'Start';
  return (<div className="start main menu">
    <Menu title={title} btnText={btnText} />
  </div>);
}

export default Start;
