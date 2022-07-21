import React from 'react';
import { useState, useEffect } from 'react';

import sanityClient from './Client'

const Categories = ({ filterItems }) => {

  const [categoryData, setCategory] = useState(null);

  useEffect(() => {
      sanityClient
          .fetch(`*[_type == "category"] {
              title,
          }`
      )
      .then((data) => setCategory(data))
      .catch(console.error)
  }, []);
  console.log("category: " +  categoryData)
  return (
    <div className="btn-container">
      {categoryData && categoryData.map((category, index) => {
        return (
          <button
            type='button'
            className='filter-btn'
            key={ index }
            onClick={() => filterItems(category.title)}
          >
            {category.title}
          </button>
        )
      })}
    </div>
  )
};

export default { Categories };
