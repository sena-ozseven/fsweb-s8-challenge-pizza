import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Anasayfa = () => {
  return (
    <div className="anasayfa-container">
      <h1 className="marka-baslik">Teknolojik Yemekler</h1>
      <h2 className="anasayfa-slogan">
        KOD ACIKTIRIR <br /> PİZZA, DOYURUR
      </h2>
      <Link to='/siparisform'>
        <button className="aciktim-buton">ACIKTIM</button>
      </Link>
    </div>
  );
};

export default Anasayfa;
