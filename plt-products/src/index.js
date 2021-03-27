import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';
import Header from './Header';
import './index.scss';
import { products } from './products';
import Footer from './fonts/Footer';

const ProductListing = () => {
  return (
    <section class='wrapper'>
      <Header />
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
      <Footer />
    </section>
  );
};

ReactDOM.render(<ProductListing />, document.getElementById('root'));
