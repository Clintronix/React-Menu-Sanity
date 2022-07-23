import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
//import items from './data';
import sanityClient from './Client';
//import menu from './data';

//const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const App = () => {
  return (
    <main>
     
      <section className="menu section">
        <div className="title">
          <h2>
            our menu items
        </h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu />
      </section>
      
    </main>
  )
}

export default App;
