import React from 'react';
import './Header.jsx';
import './Footer.jsx'; 
import SwiftTools from "./SwiftTools.png";

const MDPOform = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        
        <div>
        <img src={SwiftTools} alt="Logo de l'entreprise" style={{ width: '50%', height: 'auto' }} />
        </div>

        
        <form style={{ marginBottom: '20px' }}>
          <div style={{ marginBottom: '10px' }}>
            <input type="email" placeholder="écrivez l'email lié à votre compte Swifttools afin de pouvoir réintialiser votre mot de passe" required style={{ padding: '10px', width: '100%', marginBottom: '10px' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
            <button type="submit" style={{ padding: '10px 20px', marginRight: '10px' }}>Envoyer le lien de réinitialisation</button>
          </div>
        </form>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={() => window.location.href = '/login'} style={{ padding: '10px 20px' }}>Retour à la connexion</button>
        </div>
      </div>
    </div>
  );
}

export default MDPOform;