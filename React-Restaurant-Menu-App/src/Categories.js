import React from 'react';
import { useState, useEffect } from 'react';
import sanityClient from './Client'

const filterItems = (cat)=> {
  if (cat == 'all') {
    
    return;
  }
}

const Categories = () => {

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
  return (
    <div className="btn-container">
      {categoryData && categoryData.map((category, index) => {
        return (
          <button
            type='button'
            className='filter-btn'
            key={ index }
            // onClick={ filterItems(category[index]) }
          >
            {category.title}
          </button>
        )
      })}
    </div>
  )
};

export default Categories;
