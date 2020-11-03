import React from 'react';
import Menu from '../Menu';
import { strings } from '../../config.json';
import { numberWithCommas } from '../../helpers';

function End(props) {
  const { end } = strings;
  const earnedMoneyNumber = props.location.state ? props.location.state.earnedMoney : 0;
  const earnedMoney = numberWithCommas(earnedMoneyNumber);
  return (<div className="main menu">
    <Menu title={end.title.replace('{earnedMoney}', earnedMoney)} caption={end.caption} btnText={end.buttonText} />
  </div>);
}

export default End;
