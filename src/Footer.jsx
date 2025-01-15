import React from 'react';
import './CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li><a href="/about">À propos</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Politique de confidentialité</a></li>
            <li><a href="/terms">Conditions d'utilisation</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MonSite - Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;
