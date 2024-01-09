import React, { useState } from 'react';
import './Header.jsx';
import './Footer.jsx';
import SwiftTools from "./SwiftTools.png";

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (event) => {
        event.preventDefault(); 

        try {
            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.status === 201) {
               
                
            } else {
              r
            }
        } catch (error) {
            console.error('Erreur durant l\'inscription:', error);
            alert('Une erreur est survenue.');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ textAlign: 'center' }}>
                
                <div>
                    <img src={SwiftTools} alt="Company Logo" style={{ width: '50%', height: 'auto' }} />
                </div>

                
                <form onSubmit={handleSignup} style={{ marginBottom: '20px' }}>
                    <div style={{ marginBottom: '10px' }}>
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            required
                            style={{ padding: '10px', width: '100%' }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                        <button type="submit" style={{ padding: '10px 20px', marginRight: '10px' }}>Inscription</button>
                    </div>
                </form>

                
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={() => window.location.href = '/login'} style={{ padding: '10px 20px' }}>Vous avez déjà un compte? Connectez-vous!</button>
                </div>
            </div>
        </div>
    );
}

export default SignupForm;
