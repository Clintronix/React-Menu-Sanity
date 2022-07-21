import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import { sanityClient } from '@sanity/client';
//import menu from './data';

//const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const App = () => {

  const [menuItemsData, setMenuData] = useState(null);

        useEffect(() => {
            sanityClient
                .fetch(`*[_type == "menuItems"] | order(_createdAt desc){
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

        const [category, setCategories] = useState(null)
        useEffect(() => {
          sanityClient
              .fetch(`*[_type == "category"] {
                  title,
              }`
          )
          .then((data) => setCategories(data))
          .catch(console.error)
      }, []);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuData(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuData(newItems)
  }

  return (
    <main>
      {menuItemsData && menuItemsData.map(
      <section className="menu section">
        <div className="title">
          <h2>
            our menu items
        </h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={category} />
        <Menu items={menuItemsData} />
      </section>
    )}
    </main>
  )
}

export default App;
