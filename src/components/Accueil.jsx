import "./Header.jsx";
import "./Footer.jsx";
import React from 'react';
import MonImage from './SwiftTools.png';

function Accueil() {

  return (
<div style={{ display: 'flex', flexWrap: 'wrap', padding: '20px', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Section Texte */}
      <div style={{ flexBasis: '100%', flexShrink: 0, maxWidth: '600px', textAlign: 'center' }}>
        <h1>Bienvenue chez Swift Tools</h1>
        <p>Le projet Swift Tools vise à offrir des softwares efficaces pour la collaboration et la gestion de projets en équipe. 
          Avec une planification soignée et une exécution méthodique, nos logiciels ont le potentiel de devenir des outils indispensables 
          pour les équipes modernes. Faciliter la communication et la collaboration au sein des équipes distantes ou hybrides, 
          en offrant des outils intuitifs pour la gestion de projets, la communication et le partage de ressources, 
          tel est le maître mot de notre startup</p>
      </div>

      {/* Section Image */}
      <div style={{ flexBasis: '100%', flexShrink: 0, maxWidth: '600px' }}>
        <img src={MonImage} alt="Description de l'image" style={{ width: '100%', height: 'auto' }} />
      </div>
      </div>
  );
};

export default Accueil; 

