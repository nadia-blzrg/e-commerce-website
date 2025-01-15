import React, { useEffect, useState } from 'react'
import './CSS/Basket.css';




const baskets=
[
    {id:"1",name:"SKECHERS SKECHERS GOLD TF",price:"13 900DA",catégorie:"HOMME",image:"https://dynamicbrands.dz/upload/S252016_PUR.jpg"},
    {id:"2",name:"SKERS TRES-AIR UNO - MAGLIA AIRY",price:"14 900 DA",catégorie:'HOMME',image:"https://dynamicbrands.dz/upload/S183073_BBK.jpg"},
    {id:"3",name:"ADIDAS DURAMO SL M",price:"10 800 DA",catégorie:"HOMME",image:"https://dynamicbrands.dz/upload/1559282132.jpg"},
    {id:"4",name:"PEAK CASUAL SHOES",price:"13 900 DA",catégorie:"HOMME",image:"https://dynamicbrands.dz/upload/1495130101.jpg"},
    {id:"5",name:"PEAK X LIGHT II SLIP ON All Black",price:"8 900DA",catégorie:"HOMME",image:"https://dynamicbrands.dz/upload/475434869.jpg"},
    {id:"6",name:"CLARKS Nature X Ease Navy",price:"16 900DA",catégorie:"HOMME",image:"https://dynamicbrands.dz/upload/112095834.jpg"},
    {id:"7",name:"CLARKS Mapstone Step Beeswax Leather",price:"21 900DA",catégorie:"HOMME",image:"https://dynamicbrands.dz/upload/1159949634.jpg"},
    {id:"8",name:"CLARKS Saltway Trail Black Leather",price:"21 900DA",catégorie:"HOMME",image:"https://dynamicbrands.dz/upload/1438168519.jpg"},
    {id:"9",name:"CLARKS Flexway Step Light Brown Lea",price:"16 900DA",catégorie:"HOMME",image:"https://dynamicbrands.dz/upload/1572193949.jpg"},
    {id:"10",name:"CLARK Nature X Ease Black Combi",price:"16 900DA",catégorie:"HOMME",image:"https://dynamicbrands.dz/upload/3992881.jpg"},
    {id:"11",name:"SKECHERS UNO",price:"14 900DA",catégorie:"HOMME",image:"https://dynamicbrands.dz/upload/74535580.jpg"},
    {id:"12",name:"SKECHERS HYLAND - RATNER",price:"12 900DA",catégorie:"HOMME",image:"https://dynamicbrands.dz/upload/924973001.jpg"},
    {id:"13",name:"SKECHERS CORDOVA CLASSIC- NEW REIGN",price:"14 900DA",catégorie:"FEMME",image:"https://dynamicbrands.dz/upload/S185081_WHT.jpg"},
    {id:"14",name:"SKECHERS TRES-AIR UNO",price:"13 900DA",catégorie:"FEMME",image:"https://dynamicbrands.dz/upload/S177390_OFWT.jpg"},
    {id:"15",name:"SKECHERS JADE-BEST IN CLASS",price:"11 900DA",catégorie:"FEMME",image:"https://dynamicbrands.dz/upload/S185098_WPK.jpg"},
    {id:"16",name:"SKECHERS TRES-AIR UNO",price:"13 900DA",catégorie:"FEMME",image:"https://dynamicbrands.dz/upload/1165957211.jpg"},
    {id:"17",name:"SKECHERS JADE-BEST IN CLASS",price:"11 900DA",catégorie:"FEMME",image:"https://dynamicbrands.dz/upload/S185098_WBL.jpg"},
    {id:"18",name:"CLARKS Torhill Maple Black Leather",price:"21 900DA",catégorie:"FEMME",image:"https://dynamicbrands.dz/upload/C26173858_A.jpg"},
    {id:"19",name:"PALLADIUM SP20 HI TECH",price:"12 900DA",catégorie:"FEMME",image:"https://dynamicbrands.dz/upload/482449105.jpg"},
    {id:"20",name:"PALLADIUM PAMPA TRAVEL LITE RS BELUGA M ",price:"15 900DA",catégorie:"FEMME",image:"https://dynamicbrands.dz/upload/137880200.jpg"},
    {id:"21",name:"PALLADIUM PAMPA LITE XPLR WP OLIVE NIGHT M",price:"21 900DA",catégorie:"FEMME",image:"https://dynamicbrands.dz/upload/872868975.jpg"},
    {id:"22",name:"CLARKS Tivoli Zip Black Combi",price:"20 900DA",catégorie:"FEMME",image:"https://dynamicbrands.dz/upload/C26178732_A.jpg"},
    {id:"23",name:"CLARKS Havisham Oak Tan Leather",price:"14 900DA",catégorie:"FEMME",image:"https://dynamicbrands.dz/upload/C26178714_A.jpg"},
    {id:"24",name:"CLARKS Havisham Oak Black Leather",price:"14 900DA",catégorie:"FEMME",image:"https://dynamicbrands.dz/upload/C26178709_A.jpg"},
    {id:"25",name:"CLARKS Havisham Edge Black Leather",price:"13 900DA",catégorie:"FEMME",image:"https://dynamicbrands.dz/upload/C26178703_A.jpg"},

]



export const Basket = () => {
    const [category, setCategory] = useState('');
    const [filteredbaskets, setfilteredbaskets] = useState(baskets);
    const [searchTerms, setSearchTerms] = useState('');
  
    useEffect(() => {
      // Filtrer par catégorie et terme de recherche
      const filtered = baskets.filter(basket=> {
        const matchesCategory = category ? basket.catégorie === category : true;
        const matchesSearch = basket.name.toLowerCase().includes(searchTerms.toLowerCase());
        return matchesCategory && matchesSearch;
      });
      setfilteredbaskets(filtered);
    }, [category, searchTerms]);
  
    return (
      <div>
    {/* Image bannière */}
    <img
      src="https://timelinecovers.pro/facebook-cover/download/adidas-shoes-facebook-cover.jpg"
      alt="Bannière des montres"
      className="header-image"
    />

    <div className="basket-container">
      {/* Barre de filtres */}
      <div className="filterBar">
        <h3>Trouvez la basket de vos rêves</h3>

        <h2>Catégorie</h2>
        <button
          className={category === 'FEMME' ? 'active' : ''}
          onClick={() => setCategory('FEMME')}
        >
          Femme
        </button>
        <button
          className={category === 'HOMME' ? 'active' : ''}
          onClick={() => setCategory('HOMME')}
        >
          Homme
        </button>
        <button
          className={category === '' ? 'active' : ''}
          onClick={() => setCategory('')}
        >
          Tout afficher
        </button>

        <h2>Spécifiez la marque</h2>
        <input
          type="text"
          placeholder="Recherchez votre marque"
          value={searchTerms}
          onChange={(e) => setSearchTerms(e.target.value)}
        />
      </div>

      {/* Liste des cartes */}
      <ul className="cards-baskets">
        {filteredbaskets.map((basket) => (
          <li key={basket.id} className="card">
            <div className="card-content">
              <h3>{basket.name}</h3>
              <p>Prix : {basket.price} DA</p>
              <p>Catégorie : {basket.catégorie}</p>
              {basket.image && (
                <img src={basket.image} alt={basket.name} />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
      
    );
}

export default Basket;