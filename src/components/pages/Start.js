import React from 'react';
import Menu from '../Menu';
import '../../styles/Start.css';
import { strings } from '../../config.json';

function Start() {
  const { start } = strings;
  return (<div className="start main menu">
    <Menu title={start.title} btnText={start.buttonText} />
  </div>);
}

export default Start;
