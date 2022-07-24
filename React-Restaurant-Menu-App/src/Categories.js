import React from 'react';
import { useState, useEffect } from 'react';
import sanityClient from './Client'

import Menu from './Menu';

const Categories = (props) => {

  const [categoryData, setCategory] = useState(null);
  const [newCatData, setnewCat] = useState("All");

  console.log('StateData  ' + newCatData)
  useEffect(() => {
      sanityClient
          .fetch(`*[_type == "category"] | order(title asc) {
              title,
          }`
      )
      .then((data) => setCategory(data))
      .catch(console.error)
  }, []);

  const handleClick = (event, key)=> {
    let newCat = event.target.innerText;
    console.log("handleClick  " + newCat)
    setnewCat(newCat);
  }
  
  return (
    <>
    <div className="btn-container">
      {categoryData && categoryData.map((category, index) => {
        return (
          <button
            type='button'
            className='filter-btn'
            key={ index }
            // send category clicked to filter Items
            onClick={ (event) => handleClick(event)}
          >
            {category.title}
          </button>
        )
      })}
    </div>
    <Menu data={newCatData}/>
    </>
  )
};

export default Categories;
