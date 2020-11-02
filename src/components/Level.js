import React from 'react';
import BorderItem from './BorderItem';
import { ReactComponent as LevelBorder } from '../images/levelBorder.svg';
import { numberWithCommas } from '../helper';

function Level({ money, className, ...attrs }) {
  return (<BorderItem
    {...attrs}
    Border={LevelBorder}
    className={`level-panel__money ${className}`}>
    {`$${numberWithCommas(money)}`}
  </BorderItem>);
}

export default Level;
