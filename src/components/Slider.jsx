import React from 'react';
import Slider from 'react-slick';
import Bannerimg from '../assets/images/bnerimg.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <Slider {...settings}>
      <div>
        <img src={Bannerimg} alt="Image 1" />
      </div>
      <div>
      <img src={Bannerimg} alt="Image 1" />
      </div>
      <div>
      <img src={Bannerimg} alt="Image 1" />
      </div>
    </Slider>
  )
}

export default ImageSlider