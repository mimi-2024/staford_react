import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  {
    name: 'Baceford',
    ingredients: 'B-complex, Zinc, Lactobacillus',
    description: 'Lactobacillus actively restores GI Flora, No belching...No regurgitation Better patient compliance',
    imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    name: 'Hype-T',
    ingredients: 'B-complex, Zinc, Lactobacillus Capsules',
    description: 'Lactobacillus actively restores GI Flora, No belching...No regurgitation Better patient compliance',
    imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    name: 'S-Coff-LS',
    ingredients: 'B-complex, Zinc, Lactobacillus Capsules',
    description: 'Lactobacillus actively restores GI Flora, No belching...No regurgitation Better patient compliance',
    imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    name: 'Reb - DSR',
    ingredients: 'B-complex, Zinc, Lactobacillus',
    description: 'Lactobacillus actively restores GI Flora, No belching...No regurgitation Better patient compliance',
    imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
];

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <i className="fa fa-arrow-right" style={{ color: 'black' }}></i>,  // Custom next arrow
    prevArrow:  <i className="fa fa-arrow-left" style={{ color: 'black' }}></i>,  // Custom previous arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div style={carouselContainerStyle}>
      <h1>Products</h1>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} style={cardContainerStyle}>
            <img src={product.imageUrl} alt={product.name} style={imageStyle} />
            <h2>{product.name}</h2>
            <h4>{product.ingredients}</h4>
            <p>{product.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const carouselContainerStyle = {
  padding: '20px',
  maxWidth: '1000px',
  margin: '0 auto',
};

const cardContainerStyle = {
  padding: '16px',
  textAlign: 'center',
  background: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '0 10px',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  marginBottom: '16px',
};

export default ProductCarousel;
