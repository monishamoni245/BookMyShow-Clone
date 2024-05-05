import React from 'react';
import Slider from 'react-slick';
import { NextArrow } from './HeroCarousal/Arrows.component';
const CastSlider = ({ images }) => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          nextArrow: <NextArrow />,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {images.map((Cast, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-32 mb-2">
            <img
              src={Cast.src}
              alt={Cast.alt}
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          
          <h3 className="text-center text-lg font-semibold">{Cast.title}</h3>
          <p className="text-center text-sm text-gray-500">{Cast.subtitle}</p>
        </div>
      ))}
    </Slider>
  );
};

export default CastSlider;
