import './FAQ.css';
import "./Header.jsx";
import "./Footer.jsx";
import React from 'react';
import "./Footer.css";
import SwiftTools from "./FAQLogo.png";


const FAQ = () => {
  
  const faqs = [
    {
      question: "Comment puis-je réinitialiser mon mot de passe ?",
      answer: "Vous pouvez réinitialiser votre mot de passe en cliquant sur 'mot de passe oublié' à la page de connexion."
    },
    {
      question: "Où puis-je télécharger vos logiciels ?",
      answer: "Nos logiciels sont disponibles dans la section 'Nos Produits' sur notre site web."
    },
    {
      question: "Comment nous contacter ?",
      answer: "Veuillez vous rendre dans notre section support ou nous contacter par email ou téléphone directement."
    },
   
  ];

  return (
    <div className="page-container"> 
      <div className="content-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
        
        <div className="faq-container">
          <h1>Foire aux Questions (FAQ)</h1>
          <div className="faqs">
            {faqs.map((faq, index) => (
              <div key={index} className="faq">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        
        <div className="logo-container" style={{ marginLeft: '20px' }}>
          
          <img src={SwiftTools} alt="Logo de l'entreprise" style={{ width: '85%', height: 'auto' }} />
        </div>

      </div>
    </div>
  );
};

export default FAQ;
