import React from 'react';
import { Menu, numberWithCommas } from './Utils';

function End(props) {
  const earnedMoneyNumber = props.location.state ? props.location.state.earnedMoney : 0;
  const earnedMoney = numberWithCommas(earnedMoneyNumber);
  const caption = 'Total score:';
  const title = `$${earnedMoney} earned`;
  const btnText = 'Try again';
  return (<div className="main menu">
    <Menu title={title} caption={caption} btnText={btnText} />
  </div>);
}

export default End;
