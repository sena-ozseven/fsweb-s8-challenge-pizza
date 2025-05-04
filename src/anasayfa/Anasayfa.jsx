import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './anasayfa.css';

const Anasayfa = () => {
  return (
    <div className="anasayfa-container">
      <section className="logo-yazi-buton">
      <img className="teknolojik-logo" src="images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler" />
      <h2 className="anasayfa-slogan">
        KOD ACIKTIRIR <br /> PİZZA, DOYURUR
      </h2>
      <Link to='/siparisform'>
        <button className="aciktim-buton">ACIKTIM</button>
      </Link>
      </section>
    </div>
  );
};

export default Anasayfa;
