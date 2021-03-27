import React from 'react';

const Product = ({ img, description, price }) => {
  return (
    <div className='products'>
      <img src={img} />
      <h1>{description}</h1>
      <h5>{price}</h5>
    </div>
  );
};

export default Product;
