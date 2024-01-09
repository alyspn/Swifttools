import React from 'react';
import "./Header.jsx";
import "./Footer.jsx";
import './Mescommandes.css'; 
import ScanX from './ScanxLogo.png';
import Opta from './Opta Logo.png';
import SysTx from './SysTx Logo.png';
import Merio from './Merio Logo.png';
import StoreX from './StoreX Logo.png';
import Koppl from './Koppl Logo.png';

const commandes = [
  { 
    id: 1,
    produit: 'StoreX',
    dateCommande: '21/12/2023',
    prix: '35€',
    client: 'M.DUBOIS Pierre',
    imageUrl: StoreX 
  },
  { 
    id: 2,
    produit: 'Opta',
    dateCommande: '25/12/2023',
    prix: '20€',
    client: 'M.DUBOIS Pierre',
    imageUrl: Opta 
  },
  { 
    id: 2,
    produit: 'SysTx',
    dateCommande: '02/01/2024',
    prix: '20€',
    client: 'M.DUBOIS Pierre',
    imageUrl: SysTx 
  },
  { 
    id: 2,
    produit: 'Koppl',
    dateCommande: '05/01/2024',
    prix: '13€',
    client: 'M.DUBOIS Pierre',
    imageUrl: Koppl 
  },
];

const MesCommandes = () => {
  return (
    <div className="orders-page">
      <h1>Mes Commandes</h1>
      <div className="orders-container">
        {commandes.map((commande) => (
          <div key={commande.id} className="order">
            <div className="order-details">
              <h2>{commande.produit}</h2>
              <p>Date de commande: {commande.dateCommande}</p>
              <p>Prix: {commande.prix}</p>
              <p>Client: {commande.client}</p>
            </div>
            <div className="order-image">
              <img src={commande.imageUrl} alt={`Commande ${commande.id}`} /><br />
              <button>Suivi de commande</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MesCommandes;