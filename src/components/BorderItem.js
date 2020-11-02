import React from 'react';

function BorderItem({ children, Border, ...attrs }) {
  return (
    <div {...attrs}>
      <div className="border-item">
        <Border className="border" />
        <div className="border-item__text">{children}</div>
      </div>
    </div>
  );
}

export default BorderItem;
