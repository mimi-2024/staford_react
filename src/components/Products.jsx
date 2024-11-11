import React from 'react';

const products = [
  {
    imageUrl: '../src/assets/images/productimg1.png', 
    name: 'Baceford',
    ingredients: 'B-complex, Zinc, Lactobacillus',
    description: 'Lactobacillus actively restores GI Flora, No belching...No regurgitation Better patient compliance',
  },
  {
    imageUrl: '../src/assets/images/productimg2.png', 
    name: 'Hype-T',
    ingredients: 'B-complex, Zinc, Lactobacillus Capsules',
    description: 'Lactobacillus actively restores GI Flora, No belching...No regurgitation Better patient compliance',
  },
  {
    imageUrl: '../src/assets/images/productimg3.png', 
    name: 'S-Coff-LS',
    ingredients: 'B-complex, Zinc, Lactobacillus Capsules',
    description: 'Lactobacillus actively restores GI Flora, No belching...No regurgitation Better patient compliance',
  },

  { 
    imageUrl: '../src/assets/images/productimg4.png', 
    name: 'Reb - DSR',
    ingredients: 'B-complex, Zinc, Lactobacillus',
    description: 'Lactobacillus actively restores GI Flora, No belching...No regurgitation Better patient compliance',
  },
];

const ProductCard = ({ name, ingredients, description, imageUrl }) => (
  <div style={cardStyle}>
    <img src={imageUrl} alt={name} style={imageStyle} />
    <h2>{name}</h2>
    <h4>{ingredients}</h4>
    <p>{description}</p>
  </div>
);

const ProductsSection = () => (
  <div class="productSec" >
    <div class="container">
    <div class="indexhding">
    <h1>Products</h1>
    <p>Proin ullamcorper ante eget finibus tincidunt. Mauris lacinia venenatis diam, congue sodales erat efficitur non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
    </div>
 
    
        
        <div class="row">
       
            {products.map((product, index) => (
                 <div class="col-lg-3 col-md-6 col-sm-6">
		<div class="productbx">
                <ProductCard
                key={index}
                name={product.name}
                ingredients={product.ingredients}
                description={product.description}
                imageUrl={product.imageUrl}
                />
                 </div>
                 </div>
            ))}
           
            </div>
        </div>
    </div>
  
);

const sectionStyle = {
  padding: '20px',
};

const cardsContainerStyle = {
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap',
};

const cardStyle = {
  border: 'none',
  padding: '0',
  width: '100%',
  color:'#fff',
};

const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  };

export default ProductsSection;
