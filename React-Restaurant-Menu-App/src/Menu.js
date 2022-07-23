import React from 'react';
import { useEffect, useState } from 'react';
import sanityClient from './Client'

const Menu = () => {
  const [menuItemsData, setMenuData] = useState(null);

  useEffect(() => {
      sanityClient
          .fetch(`*[_type == "menuItems"] | order(_createdAt desc) {
              title,
              itemCategory,
              mainImage{
                asset->{
                    _id,
                    url
                },
                alt
              },
              categories,
              price,
              description,
          }`
      )
      .then((data) => setMenuData(data))
      .catch(console.error)
  }, []);

  const filterItems = (cat)=> {
    if (cat == 'all') {
      
      return;
    }
  }

  return (
    <div className="section-center">
      {menuItemsData && menuItemsData.map((item, index) => {
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
