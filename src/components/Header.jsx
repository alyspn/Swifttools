import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Header.css'; 
import SwiftToolsLogo from './SwiftTools.png';

function Header({ bgColor }) {
  const navigate = useNavigate(); 

  
  const navigateTo = (url) => {
    navigate(url); 
  };

  return (
    <header className="header" style={{ backgroundColor: bgColor }}>
      <div className="logo-container" onClick={() => navigateTo('/')}>
  
        <img src={SwiftToolsLogo} alt="Logo" style={{ cursor: 'pointer' }}/>
      </div>
      <nav className="navigation">
        <button className="rounded-btn" onClick={() => navigateTo('/')}>Accueil</button>
        <button className="rounded-btn" onClick={() => navigateTo('/products')}>Nos Produits</button>
        <button className="rounded-btn" onClick={() => navigateTo('/orders')}>Mes Commandes</button>
        <button className="rounded-btn" onClick={() => navigateTo('/faq')}>FAQ</button>
        <button className="rounded-btn" onClick={() => navigateTo('/support')}>Support</button>
      </nav>
      <div className="login-link-button">
        <button className="login-button rounded-btn" onClick={() => navigateTo('/login')}>Sign in/Log in</button>
      </div>
    </header>
  );
}

export default Header;

