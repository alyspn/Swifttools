import React from 'react';
import './Header.jsx';
import './Footer.jsx'; 
import SwiftTools from "./SwiftTools.png";

const LoginForm = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        
        <div>
        <img src={SwiftTools} alt="Logo de l'entreprise" style={{ width: '50%', height: 'auto' }} />
        </div>

        
        <form style={{ marginBottom: '20px' }}>
          <div style={{ marginBottom: '10px' }}>
            <input type="email" placeholder="Email" required style={{ padding: '10px', width: '100%', marginBottom: '10px' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input type="password" placeholder="Mot de passe" required style={{ padding: '10px', width: '100%' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
            <button type="submit" style={{ padding: '10px 20px', marginRight: '10px' }}>Se connecter</button>
          </div>
        </form>

        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={() => window.location.href = '/forgot-password'} style={{ padding: '10px 20px', marginRight: '10px' }}>Mot de passe oublié ?</button>
          <button onClick={() => window.location.href = '/signup'} style={{ padding: '10px 20px' }}>Pas de compte ? Inscrivez-vous</button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;


