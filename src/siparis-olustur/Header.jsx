import React, { useState } from 'react';
import './Header.css'

const Header = () => {

    const [activeClass, setActiveClass] = useState("");
    function handleChange (event) {
        //buradaki kod onClick eventi tetiklendiğinde active classını 
        // span içine ekleyecek.
        // Onclick false ise çıkaracak.
    }

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