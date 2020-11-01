import React from 'react';
import { Menu } from './Utils';

function End(props) {
  const { earnedMoney } = props.location.state;
  const caption = 'Total score:';
  const title = `$${earnedMoney} earned`;
  const btnText = 'Try again';
  return (<div className="main menu">
    <Menu title={title} caption={caption} btnText={btnText} />
  </div>);
}

export default End;
