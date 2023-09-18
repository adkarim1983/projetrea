
import React from 'react';
import Nom from './Nom'; 
import Prix from './Prix'; 
import Description from './Description'; 
import Image from './Image'; 
import './ProductCard.css';

function ProductCard() {
  return (
    <div className="product-card">
    <h1>Le Meilleur Smartphone de l'Année 2023.</h1>
      <Image />
      <Nom />
      <Description />
      <Prix />
    </div>
  );
}

export default ProductCard;
