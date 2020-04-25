import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src='https://images.pexels.com/photos/2121063/pexels-photo-2121063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='people' />
    <div className='carousel-item__details'>
      <div>
        <a href='404.html'><img className='carousel-item__details--img' src='https://img.icons8.com/flat_round/64/000000/play--v5.png' alt='play' /></a>
        <img className='carousel-item__details--img' src='https://img.icons8.com/flat_round/64/000000/insert-button.png' alt='more' />
      </div>
      <p className='carousel-item__details--title'>Titulo descriptivo</p>
      <p className='carousel-item__details--subtitle'>2019 16+ 114minutos</p>
    </div>
  </div>
);

export default CarouselItem;
