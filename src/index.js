import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './Context/CartContext'; // Import du contexte du panier

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider> {/* Ajout du provider ici */}
      <App />
    </CartProvider>
  </React.StrictMode>
);
