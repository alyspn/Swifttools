import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LoginForm from "./components/LoginForm";
import FAQ from "./components/FAQ";
import Support from "./components/Support";
import MDPO from "./components/Motdepasseoublié"
import NosProduits from './components/NosProduits';
import Accueil from './components/Accueil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MesCommandes from "./components/Mescommandes.jsx";
import Signup from "./components/Signup.jsx";

function App() {
  return (
    <Router>
    <div className="App">
      <div>
      <Header bgColor="#F3E44E" /> 
      <Routes>
        <Route path="/products" element={<NosProduits />} />
        <Route path="/" element={<Accueil />} />
        <Route path="/orders" element={<MesCommandes />} />
		    <Route path="/login" element={<LoginForm />} />
		    <Route path="/support" element={<Support />} />
		    <Route path="/faq" element={<FAQ />} />
        <Route path="/forgot-password" element={<MDPO />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </div>
    <Footer />
    </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
