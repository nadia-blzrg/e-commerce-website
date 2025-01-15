import React, { useState } from 'react';
import './CSS/SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Veuillez remplir tous les champs');
    } else {
      setError('');
      // Logique d'inscription ici (par exemple, appel API pour enregistrer l'utilisateur)
      console.log('Inscription réussie');
    }
  };

  return (
    <div className="signup-container">
      <h2>Créer un compte</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            placeholder="Entrez votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Entrez votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            placeholder="Entrez votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">S'inscrire</button>
      </form>

      {/* Boutons de connexion via Facebook et Google */}
      <div className="social-signup">
        <button className="facebook-btn">S'inscrire avec Facebook</button>
        <button className="google-btn">S'inscrire avec Google</button>
      </div>
    </div>
  );
};

export default SignUp;
