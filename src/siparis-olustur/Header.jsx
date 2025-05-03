import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header className="header-siparis">
        <section className="header-container">
            <nav className="headerNav">
                 <button className="nav-item">Anasayfa </button>
                 -
                 <button className="nav-item">Seçenekler</button>
                 -
                 <button className="nav-item active">Sipariş Oluştur</button>
            </nav>
        </section> 
    </header>
  );
};

export default Header;