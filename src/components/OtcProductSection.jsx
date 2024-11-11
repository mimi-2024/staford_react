import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const OtcProductSection = () => {
  const products = [
    {
      id: 1,
      image: '/src/assets/images/otcproductimg1.png',
      title: 'Hype-T',
      subtitle: 'B-complex, Zinc, Lactobacillus Capsules',
      description: 'Lactobacillus actively restores GI Flora, No belching...No regurgitation Better patient compliance',
      link: '#url',
    },
    {
      id: 2,
      image: '../src/assets/images/otcproductimg2.png',
      title: 'Hype-T',
      subtitle: 'B-complex, Zinc, Lactobacillus Capsules',
      description: 'Lactobacillus actively restores GI Flora, No belching...No regurgitation Better patient compliance',
      link: '#url',
    },
    {
      id: 3,
      image: '../src/assets/images/otcproductimg3.png',
      title: 'Hype-T',
      subtitle: 'B-complex, Zinc, Lactobacillus Capsules',
      description: 'Lactobacillus actively restores GI Flora, No belching...No regurgitation Better patient compliance',
      link: '#url',
    },
  ];

  const carouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div className="otcproductSec" id="otcproductSec">
      <div className="container">
        <div
          className="indexhding wow fadeInDown animated"
          style={{ visibility: 'visible', animationName: 'fadeInDown' }}
        >
          <h2>OTC Products</h2>
          <p>
            Proin ullamcorper ante eget finibus tincidunt. Mauris lacinia
            venenatis diam, congue sodales erat efficitur non. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>
        <div
          className="otcproductsldr wow fadeInUp animated"
          style={{ visibility: 'visible', animationName: 'fadeInUp' }}
        >
          <OwlCarousel className="owl-theme" {...carouselOptions}>
            {products.map((product) => (
              <div className="item" key={product.id}>
                <div className="otcproduct">
                  <div className="otcproductimg">
                    <a href={product.link}>
                      <img src={product.image} alt={product.title} />
                    </a>
                  </div>
                  <div className="otcproductcon">
                    <h3>
                      <a href={product.link}>{product.title}</a>
                    </h3>
                    <em>{product.subtitle}</em>
                    <p>{product.description}</p>
                    <a href={product.link} className="productarw">
                      <span>Buy Now</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default OtcProductSection;
