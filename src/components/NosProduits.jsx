import "./Header.jsx";
import "./Footer.jsx";
import React from 'react';
import './NosProduits.css';
import ScanX from './ScanxLogo.png';
import Opta from './Opta Logo.png';
import SysTx from './SysTx Logo.png';
import Merio from './Merio Logo.png';
import StoreX from './StoreX Logo.png';
import Koppl from './Koppl Logo.png';
import "./Footer.css";


const products = [
  { id: 'Scanx', description: 'Logiciel de scan intuitif', date: '17/01/2022', version: '1.0', price: '15€/mois' , image: ScanX},
  { id: 'Opta', description: 'Logiciel de gestion et optimisation de données', date: '24/02/2022', version: '1.1.3', price: '20€/mois', image: Opta},
  { id: 'SysTx', description: 'Logiciel de gestion système (registres)', date: '05/03/2022', version: '4.2', price: '20€/mois', image: SysTx},
  { id: 'Merio', description: 'Logiciel de conception artistique', date: '09/04/2022', version: '3.2.3', price: '10€/mois', image: Merio},
  { id: 'StoreX', description: 'Logiciel de gestion de stockage', date: '11/05/2022', version: '3.4', price: '35€/mois', image: StoreX},
  { id: 'Koppl', description: 'Logiciel de retouche photo', date: '20/06/2022', version: '2.5', price: '13€/mois', image: Koppl},
];

const NosProduits = () => {
  return (
    <div className="products-page">
      <h1>Nos Produits</h1>
      <div className="products-container">
        {products.map(product => (
          <div key={product.id} className="product">
            <div className="product-image">
          
              <img src={product.image} alt={product.id} />
            </div>
            <div className="product-details">
              <h2>{product.id}</h2>
              <p>{product.description}</p>
              <p>Date de création: {product.date}</p>
              <p>Version: {product.version}</p>
              <p>Prix: {product.price}</p>
              <button>Commander</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NosProduits;



