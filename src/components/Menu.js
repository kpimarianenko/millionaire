import React from 'react';
import '../styles/Menu.css';
import { Link } from 'react-router-dom';

function Menu({ title, caption, btnText, ...attrs }) {
  return (
    <div className="wrapper wrapper__menu">
        <div className="wrapper wrapper__image">
          <img src="hand.png" alt="hand" className="wrapper__image" />
        </div>
        <div className="wrapper__menu-inner">
          <div>
            <h2 className="wrapper__caption">{caption}</h2>
            <h1 className="wrapper__title">{title}</h1>
          </div>
          <div >
            <Link to="/game">
              <button {...attrs} className="button wrapper__button">
                {btnText}
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default Menu;
