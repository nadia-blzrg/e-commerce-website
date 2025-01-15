import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CartContext } from './Context/CartContext';
import './CSS/nav.css';

export const Nav = () => {
  const { cart } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='NavStyle'>
      <nav className='nav'>

        {/* Logo */}
        <div className='logo'>
          <Link to='/'>
            <img 
              src='https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/293502143/original/09bfd010e5b4907499a1111e84507f898f592a75.png' 
              alt='Logo' 
              className='logo-img' 
            />
          </Link>
        </div>

        {/* Bouton Menu Burger */}
        <div className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Liens du menu */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><NavLink to='/' activeClassName="active">Home</NavLink></li>
          <li><NavLink to='/about' activeClassName="active">About</NavLink></li>
          <li><NavLink to='/montres' activeClassName="active">Montres</NavLink></li>
          <li><NavLink to='/baskets' activeClassName="active">Baskets</NavLink></li>
          <li><NavLink to='/vetements' activeClassName="active">Vêtements</NavLink></li>
          <li><NavLink to='/contactus' activeClassName="active">Contact us</NavLink></li>
        </ul>

        {/* Panier */}
        <div 
          className='cart-icon' 
          onMouseEnter={() => setIsCartOpen(true)} 
          onMouseLeave={() => setIsCartOpen(false)}
        >
          🛒 <span className='cart-count'>{cart.length}</span>

          {isCartOpen && cart.length > 0 && (
            <div className='cart-dropdown'>
              {cart.map((item, index) => (
                <div key={index} className='cart-item'>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                    <p>{item.price}€</p>
                  </div>
                </div>
              ))}
              <NavLink to="/cart" className="checkout-btn">Voir le panier</NavLink>
            </div>
          )}
        </div>

        {/* Authentification */}
        <div className='auth-links'>
          <NavLink to='/signup' activeClassName="active">Sign up</NavLink>
          <NavLink to='/login' activeClassName="active">Log In</NavLink>
        </div>

      </nav>
    </div>
  );
}

export default Nav;
