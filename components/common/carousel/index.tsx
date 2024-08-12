'use client';
import React, { ReactNode } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CustomCarousel = ({
  children,
  breakpoint,
  totalItems = 3
}: {
  children: ReactNode;
  breakpoint?: any;
  totalItems?: number;
}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: totalItems < 3 ? totalItems : 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel
      className='custom-carousel'
      itemClass="custom-carousel-item"
      responsive={breakpoint || responsive}
    >
      {children}
    </Carousel>
  );
};

export default CustomCarousel;
