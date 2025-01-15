import React, { useEffect, useState } from 'react'
import './CSS/Montre.css';



const montres=
[
  {id:"1" ,name:" Casio-LTP-1275G-9ADF" , price:"6 700 DA " , catégorie:"FEMME",image:"data:image/jpeg;base64,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"},
  {id:"2" ,name:" Casio-LTP-1130N-1ARDF" , price:"8 800 DA" , catégorie:"FEMME",image:"https://sihabdz.com/wp-content/uploads/2022/08/LTP-1130N-1ARDF-800x800.jpg.webp"},
  {id:"3" ,name:" Casio-LTP-1165A-7C2DF" , price:"7 500 DA" , catégorie:"FEMME",image:"https://d15.dz/images/detailed/27/_z3jy-a3.jpg"},
  {id:"4" ,name:" Casio-LTP-1165A-4CDF" , price:"7 500 DA" , catégorie:"FEMME",image:"https://d15.dz/images/detailed/27/LTP-1165A-4CDF.jpg"},
  {id:"5" ,name:"FESTINA Acier Argent F20603/1" , price:"26 800 DA " , catégorie:"FEMME",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNr2ln_dWEdWGy0fHJv5gg8hgGmJdqc_jb3A&s"},
  {id:"6" ,name:"FESTINA Acier Bicolor F20505/1", price:"26 700 DA" , catégorie:"FEMME",image:"https://i0.wp.com/www.lequartz-dz.com/wp-content/uploads/2023/09/F20603-1.jpg?fit=1200%2C1200&ssl=1"},
  {id:"7" ,name:"FESTINA Acier Bicolor F20604/3" , price:"30 300 DA" , catégorie:"FEMME",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTTTG7vQ6ppFMdO7wOtnbmWjUDCae-JH2nw&s"},
  {id:"8" ,name:"FESTINA Acier Plaqué Or F20609/1" , price:"36 0000 DA" , catégorie:"FEMME",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFu1IVi2CAPRT4NdlFuXtU3XD4GMH_MP-snA&s"},
  {id:"9" ,name:"Casio-LTP-1215A-7B2DF" , price:"6 900 DA" , catégorie:"HOMME",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfVeTzV82Z2J6XcxsohNwztYt-izoOdt1V8Q&s"},
  {id:"10" ,name:"Pierre Cardin - CPI.2034 PC 2642" , price:"25 100 da" , catégorie:"HOMME",image:"https://d15.dz/images/thumbnails/1834/1500/detailed/27/9ea30dd231351ab88871d94dc7e5fa82.jpg"},
  {id:"11" ,name:"Casio-F-91WM-1BDF" , price:"4 200 DA" , catégorie:"HOMME",image:"https://d15.dz/images/thumbnails/734/600/detailed/38/ezgif-4-20d67c0f71.jpg"},
  {id:"12" ,name:"Pierre Cardin - CPI.2026 PC 2637" , price:"22 600 DA" , catégorie:"HOMME",image:"https://d15.dz/images/detailed/27/1-17__1_.jpg"},
  {id:"13" ,name:"Pierre Cardin - CPI.2036 PC 2643" , price:"23 600 DA" , catégorie:"HOMME",image:"https://d15.dz/images/thumbnails/660/540/detailed/27/sll5mf0g8j8qrbrzv9z7nla86xhrequ2.jpeg"},
  {id:"14" ,name:"Daniel Klein - Dk.1.12270-4 Dk 1375" , price:"6 700 DA" , catégorie:"HOMME",image:"https://d15.dz/images/thumbnails/270/270/detailed/26/34036_21287_ceas-pentru-dama--daniel-klein-premium--dk-1-12285-3.jpg"},
  {id:"15" ,name:"Edifice - EF-539D-1A2VUDF CS 2854" , price:"23 500 DA" , catégorie:"HOMME",image:"https://d15.dz/images/detailed/27/EF-539D-1A2VUDF.gif"},
  {id:"16" ,name:"Daniel Klein - Dk.1.12330-1 Dk 1547 H" , price:"8 900 DA" , catégorie:"HOMME",image:"https://d15.dz/images/thumbnails/270/240/detailed/26/71O9s7MeOVL._UL1500_.jpg"},
  {id:"17" ,name:"DANIEL KLEIN - DK.1.12313-2 DK 1506 H" , price:"8 500 DA" , catégorie:"HOMME",image:"https://d15.dz/images/thumbnails/1834/1500/detailed/29/DK.1.12313-2.jpg"},
  {id:"18" ,name:"Edifice - ERA-110GL-1AVDF CS 1501" , price:"24 500 DA" , catégorie:"HOMME",image:"https://timer.bg/image/cache/catalog/products/Casio-Watches/ERA-110GL-1AVEF-4-600x315.jpg"},
  {id:"19" ,name:"Edifice - EFS-S550PB-1AVUDF CS 106" , price:"34 900 DA" , catégorie:"HOMME",image:"https://d15.dz/images/thumbnails/550/450/detailed/27/EFS-S550PB-1AVUDF.jpg"},
  {id:"20" ,name:" Edifice - EFV-550D-7AVUDF CS 4168" , price:"23 200 DA" , catégorie:"HOMME",image:"https://sihabdz.com/wp-content/uploads/2023/09/EFV-550D-7AVUDF-CS-4168.jpg.webp"},

]


export const Montre = () => {
  const [category, setCategory] = useState('');
  const [filteredmontres, setFilteredmontres] = useState(montres);
  const [searchTerms, setSearchTerms] = useState('');

  useEffect(() => {
    // Filtrer par catégorie et terme de recherche
    const filtered = montres.filter(montre => {
      const matchesCategory = category ? montre.catégorie === category : true;
      const matchesSearch = montre.name.toLowerCase().includes(searchTerms.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredmontres(filtered);
  }, [category, searchTerms]);

  return (
    <div>
    {/* Image bannière */}
    <img
      src="https://www.kronos360.com/img/cms/Bandeau%20montre%20luxe%20collector.jpg"
      alt="Bannière des montres"
      className="header-image"
    />

    <div className="montre-container">
      {/* Barre de filtres */}
      <div className="filterBar">
        <h3>Trouvez la montre de vos rêves</h3>

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
      <ul className="cards-montres">
        {filteredmontres.map((montre) => (
          <li key={montre.id} className="card">
            <div className="card-content">
              <h3>{montre.name}</h3>
              <p>Prix : {montre.price} DA</p>
              <p>Catégorie : {montre.catégorie}</p>
              {montre.image && (
                <img src={montre.image} alt={montre.name} />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};
export default Montre;