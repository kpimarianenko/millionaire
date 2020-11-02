import React from 'react';
import '../styles/Menu.css';
import { Link } from 'react-router-dom';

export function BorderItem({ children, Border, ...attrs }) {
  return (
    <div {...attrs}>
      <div className="border-item">
        <Border className="border" />
        <div className="border-item__text">{children}</div>
      </div>
    </div>
  );
}

export function Menu({ title, caption, btnText, ...attrs }) {
  return (
      <div className="wrapper menu__wrapper">
        <div className="menu__wrapper_image-wrapper">
          <img src="hand.png" alt="hand" className="menu__wrapper__image" />
        </div>
        <div className="menu__wrapper-inner">
          <div>
            <h2 className="menu__wrapper__caption">{caption}</h2>
            <h1 className="menu__wrapper__title">{title}</h1>
          </div>
          <div >
            <Link to="/game">
              <button {...attrs} className="button">
                {btnText}
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
}

export function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
