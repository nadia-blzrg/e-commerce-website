import React from 'react';
import Vétement from './Vétement';

const Articlevétements = () => {
  // Liste des articles sous forme de tableau
  const articles = [
    {
      id: "2",
      name: "HAUT TEXTURÉ RUSTIQUE",
      price: "4 900 DA",
      genre: "HOMME",
      marque: "ZARA",
      categorie: "T-shirt",
      image: "https://static.zara.net/assets/public/756b/8cd2/46d94543aeef/5a7fe0a76ccc/03992378514-e1/03992378514-e1.jpg?ts=1723014635204&w=224"
    },
    {
      id: "3",
      name: "SWEAT JACQUARD EN RELIEF",
      price: "8 900 DA",
      genre: "HOMME",
      marque: "ZARA",
      categorie: "T-shirt",
      image: "https://static.zara.net/assets/public/70bd/8eab/c2954bf7b5c1/5c4812288481/05372322710-e1/05372322710-e1.jpg?ts=1726566865359&w=224"
    },
    {
      id: "3",
      name: "Robe midi œillets",
      price: "4 900da",
      genre: "FEMME",
      marque: "STRADIVARIUS",
      categorie: "Robe",
      image: "https://static.e-stradivarius.net/assets/public/f678/0bd9/571c4af6b925/d855a182d4a0/06253583001-c/06253583001-c.jpg?ts=1722856630281&w=298"
    },
    {
      id: "4",
      name: "Robe midi drapée avec lin",
      price: "8 900DA",
      genre: "FEMME",
      marque: "STRADIVARIUS",
      categorie: "Robe",
      image: "https://static.e-stradivarius.net/assets/public/ec41/12c7/6aaf4a9baeef/0b629ee4d60f/02302201430-c/02302201430-c.jpg?ts=1718717073461&w=298"
    },
    {
      id: "5",
      name: "T-SHIRT INTERLOCK",
      price: "4 900DA",
      genre: "HOMME",
      marque: "ZARA",
      categorie: "T-shirt",
      image: "https://static.zara.net/assets/public/1730/bc5b/cfeb4471a7c3/005ad0b9ebd7/05584414500-p/05584414500-p.jpg?ts=1730300032837&w=224"
    }
  ];

  return (
    <div>
      <Vétement articles={articles} /> {/* Passer le tableau à Vétement */}
    </div>
  );
};

export default Articlevétements;
