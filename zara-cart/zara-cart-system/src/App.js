import React, { useState } from 'react';
import Header from './Header';
import Products from './Products';
import data from './data';

const App = () => {
  const [products, setProducts] = useState(data);

  // Delete Task
  const deleteTask = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className='container'>
      <Header />
      <h1>Shopping Bag</h1>
      <p>{products.length} items</p>
      <Products products={products} onDelete={deleteTask} />
      <div className='btn'>
        <button onClick={() => setProducts([])}>Empty Cart</button>
      </div>
    </div>
  );
};

export default App;
