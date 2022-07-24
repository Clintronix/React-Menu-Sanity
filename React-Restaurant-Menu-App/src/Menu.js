import React from 'react';
import { useEffect, useState } from 'react';
import sanityClient from './Client'

const Menu = (props) => {
  const [menuItemsData, setMenuData] = useState(null);
  const [queryData, setCurrCat] = useState({
    fetch: '*[_type == "menuItems"] | order(_createdAt desc) '
  });

  // const handleQuery = (cat)=> {
  //   let currCat;
  //   if ((props.data === 'Breakfast') && !(currCat == "Breakfast")) {
  //     setCurrCat('*[_type == "menuItems"] && itemCategory === ' + cat + '| order(_createdAt desc) ')
  //   }
  //   currCat = cat;
  // }
  // handleQuery(props.data)


  useEffect(() => {
      sanityClient
          .fetch(queryData.fetch + `{
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
