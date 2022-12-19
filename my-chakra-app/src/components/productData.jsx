import React from 'react';
import { render } from 'react-dom';

import ProductPage from './ProductPage';

const productData = {
  id: 1,
  categories: ['electronics', 'computers'],
  title: 'Macbook Pro',
  price: '$1,299',
  realPrice: '$1,499',
  brand: 'Apple',
  description: 'The latest Macbook Pro with a stunning Retina display',
  color: 'Space Gray',
  discount: '$200 off',
  rating: 4.5,
  reviews: ['Great laptop', 'Love the Retina display'],
  Images: [
    {
      imageFront: 'https://example.com/macbook-front.jpg',
      imageBack: 'https://example.com/macbook-back.jpg'
    }
  ]
};

render(
  <ProductPage productData={productData} />,
  document.getElementById('root')
);
