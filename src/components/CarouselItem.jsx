import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={cover} alt={title} />
    <div className='carousel-item__details'>
      <div>
        <a href='404.html'><img className='carousel-item__details--img' src='https://img.icons8.com/flat_round/64/000000/play--v5.png' alt='play' /></a>
        <img className='carousel-item__details--img' src='https://img.icons8.com/flat_round/64/000000/insert-button.png' alt='more' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>{` ${year} ${contentRating} ${duration}`}</p>
    </div>
  </div>
);

export default CarouselItem;
