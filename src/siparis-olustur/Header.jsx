import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
  return (
    <header className="header-siparis">
        <section className="header-container">
            <nav className="headerNav">
              <Link to='/' exact>
                 <button className="nav-item">Anasayfa </button>
              </Link>
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