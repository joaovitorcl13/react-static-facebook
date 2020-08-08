import React from 'react';

import './styles.css'

import logo from '../../assets/facebook-logo.png'

function Header() {
  return (
    <header className='container'>
      <nav>
        <img className='logo' src={logo} />
        <a className='profile-text'>Meu perfil</a>
      </nav>
    </header>
  );
}

export default Header;