import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header>
        <section className="header-container">
            <img src='images/iteration-1-images/logo.svg' alt="logo" />
            <nav className="headerNav">
                 <span className="nav-item">Anasayfa</span>
                 <span className="nav-item">Seçenekler</span>
                 <span className="nav-item active">Sipariş Oluştur</span>
            </nav>
        </section> 
    </header>
  );
};

export default Header;