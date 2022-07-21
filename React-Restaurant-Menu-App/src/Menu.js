import React from 'react';
// import { useEffect, useState } from 'react';

// import sanityClient from './Client'

const Menu = ({ menuItems }) => {

  return (
    <div className="section-center">
      {menuItems && menuItems.map((item, index) => {
        return (
          <article key={ index } className="menu-item">
           <img className='photo' src={item.mainImage.asset.url} alt={item.alt} />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <h4 className="price">${item.price}</h4>
              </header>
              <p className="item-text">{item.description}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
};

export default Menu;
