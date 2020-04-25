import React from 'react';
import '../assets/styles/components/Categories.scss';

const categories = ({ children }) => (
  <div className='categories'>
    <h3 className='categories__title'>Mi Lista</h3>
    {children}
  </div>
);

export default categories;
