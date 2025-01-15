import React, { useEffect, useState, useContext } from 'react';
import './CSS/Vétement.css';
import { CartContext } from './Context/CartContext';

const articles = [
  { id: "2", name: "HAUT TEXTURÉ RUSTIQUE", price: "4 900 DA", genre: "HOMME", marque: "ZARA", catégorie: "T-shirt", image: "https://static.zara.net/assets/public/756b/8cd2/46d94543aeef/5a7fe0a76ccc/03992378514-e1/03992378514-e1.jpg?ts=1723014635204&w=224" },
  { id: "3", name: "SWEAT JACQUARD EN RELIEF", price: "8 900 DA", genre: "HOMME", marque: "ZARA", catégorie: "T-shirt", image: "https://static.zara.net/assets/public/70bd/8eab/c2954bf7b5c1/5c4812288481/05372322710-e1/05372322710-e1.jpg?ts=1726566865359&w=224" },
  { id: "4", name: "Robe midi œillets", price: "4 900 DA", genre: "FEMME", marque: "STRADIVARIUS", catégorie: "Robe", image: "https://static.e-stradivarius.net/assets/public/f678/0bd9/571c4af6b925/d855a182d4a0/06253583001-c/06253583001-c.jpg?ts=1722856630281&w=298" },
  { id: "5", name: "Robe midi drapée avec lin", price: "8 900 DA", genre: "FEMME", marque: "STRADIVARIUS", catégorie: "Robe", image: "https://static.e-stradivarius.net/assets/public/ec41/12c7/6aaf4a9baeef/0b629ee4d60f/02302201430-c/02302201430-c.jpg?ts=1718717073461&w=298" },
  { id: "6", name: "T-SHIRT INTERLOCK", price: "4 900 DA", genre: "HOMME", marque: "ZARA", catégorie: "T-shirt", image: "https://static.zara.net/assets/public/1730/bc5b/cfeb4471a7c3/005ad0b9ebd7/05584414500-p/05584414500-p.jpg?ts=1730300032837&w=224" }
];

const Vétement = () => {
  const [selectedGenres, setSelectedGenres] = useState(null);
  const [selectedMarques, setSelectedMarques] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const result = articles.filter((article) => {
      const matchesGenre = selectedGenres ? article.genre === selectedGenres : true;
      const matchesMarque = selectedMarques ? article.marque === selectedMarques : true;
      const matchesCategorie = selectedCategories ? article.catégorie === selectedCategories : true;
      return matchesGenre && matchesMarque && matchesCategorie;
    });
    setFilteredArticles(result);
  }, [selectedGenres, selectedMarques, selectedCategories]);

  return (
    <div className="vetement-container">
      <aside className="sidebar">
        <h3>Découvrez nos magnifiques vêtements</h3>

        <div>
          <h2>Genre</h2>
          <label>
            <input type="checkbox" value="FEMME" checked={selectedGenres === "FEMME"} onChange={(e) => setSelectedGenres(selectedGenres === e.target.value ? null : e.target.value)} />
            Femme
          </label>
          <br />
          <label>
            <input type="checkbox" value="HOMME" checked={selectedGenres === "HOMME"} onChange={(e) => setSelectedGenres(selectedGenres === e.target.value ? null : e.target.value)} />
            Homme
          </label>
        </div>

        <div>
          <h2>Marque</h2>
          <label>
            <input type="checkbox" value="ZARA" checked={selectedMarques === "ZARA"} onChange={(e) => setSelectedMarques(selectedMarques === e.target.value ? null : e.target.value)} />
            Zara
          </label>
          <br />
          <label>
            <input type="checkbox" value="STRADIVARIUS" checked={selectedMarques === "STRADIVARIUS"} onChange={(e) => setSelectedMarques(selectedMarques === e.target.value ? null : e.target.value)} />
            Stradivarius
          </label>
        </div>

        <div>
          <h2>Catégorie</h2>
          <label>
            <input type="checkbox" value="T-shirt" checked={selectedCategories === "T-shirt"} onChange={(e) => setSelectedCategories(selectedCategories === e.target.value ? null : e.target.value)} />
            T-shirt
          </label>
          <br />
          <label>
            <input type="checkbox" value="Robe" checked={selectedCategories === "Robe"} onChange={(e) => setSelectedCategories(selectedCategories === e.target.value ? null : e.target.value)} />
            Robe
          </label>
        </div>
      </aside>

      <main className="articles">
        <div className="products-grid">
          {filteredArticles.map((article) => (
            <div key={article.id} className="product-card">
              <img src={article.image} alt={article.name} />
              <h3>{article.name}</h3>
              <p>Prix : {article.price}</p>
              <p>Genre : {article.genre}</p>
              <p>Marque : {article.marque}</p>
              <p>Catégorie : {article.catégorie}</p>
              <div className="panier">
                <button onClick={() => addToCart(article)}>Ajouter au panier</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Vétement;
