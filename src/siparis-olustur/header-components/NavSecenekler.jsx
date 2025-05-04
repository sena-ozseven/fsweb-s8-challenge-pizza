import React from "react";
import './navSecenekler.css';

const NavSecenekler = () => {
  return (
    <div className="secenekler">
      <nav>
        <div className="kore">
          <img src="images/iteration-2-images/icons/1.svg" alt="ikon1" />
          <a href="/">YENİ! Kore</a>
        </div>
        <div className="pz">
          <img src="images/iteration-2-images/icons/2.svg" alt="ikon2" />
          <a href="/">Pizza</a>
        </div>
        <div className="brgr">
          <img src="images/iteration-2-images/icons/3.svg" alt="ikon3" />
          <a href="/">Burger</a>
        </div>
        <div className="kizartma">
          <img src="images/iteration-2-images/icons/4.svg" alt="ikon4" />
          <a href="/">Kızartmalar</a>
        </div>
        <div className="fastf">
          <img src="images/iteration-2-images/icons/5.svg" alt="ikon5" />
          <a href="/">Fast food</a>
        </div>
        <div className="gazli">
          <img src="images/iteration-2-images/icons/6.svg" alt="ikon6" />
          <a href="/">Gazlı içecek</a>
        </div>
      </nav>
    </div>
  );
};

export default NavSecenekler;
