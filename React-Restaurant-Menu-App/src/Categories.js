import React from 'react';
import { useState, useEffect } from 'react';
import sanityClient from './Client'

import Menu from './Menu';

const filterItems = (cat)=> {
  if (cat == 'all') {
    
    return;
  }
}

const Categories = () => {

  const [categoryData, setCategory] = useState(null);

  useEffect(() => {
      sanityClient
          .fetch(`*[_type == "category"] | order(title asc) {
              title,
          }`
      )
      .then((data) => setCategory(data))
      .catch(console.error)
  }, []);


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
            //onClick={ filterItems(category[index]) }
          >
            {category.title}
          </button>
        )
      })}
    </div>
    <Menu />
    </>
  )
};

export default Categories;
