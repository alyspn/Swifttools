import './Support.css';
import "./Header.jsx";
import "./Footer.jsx";
import React, { useState } from 'react';
import "./Footer.css";
import SwiftTools from "./SupportLogo.png";

const Support = () => {
  const [query, setQuery] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Support query submitted with: ', { email, query });
  };

  return (
    <div className="page-container"> 

      
      <div className="flex-container">

       
        <div className="support-section">
          <h1>Support Client</h1>
          <form onSubmit={handleSubmit} className="support-form">
            <div className="input-group">
              <label htmlFor="email">Votre e-mail :</label>
              <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="input-group">
              <label htmlFor="query">Votre demande :</label>
              <textarea 
                id="query" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="support-button">Envoyer</button>
          </form>
        </div>

        
        <div className="logo-section">
          <img src={SwiftTools} alt="Logo de l'entreprise" style={{ width: '75%', height: 'auto' }} />
        </div>

      </div>

    </div>
  );
};

export default Support;