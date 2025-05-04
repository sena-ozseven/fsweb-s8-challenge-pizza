import React from 'react';
import './mainContent.css';

const MainContent = () => {

    return (
        <section className="main">

            <section className="uclu-blok">
                <div className="left-block">
                    <h2 className="left-header">
                        Özel<br />Lezzetus
                    </h2>
                    <p className="left-p">Position:Absolute Acı Burger</p>
                    <button className="siparis-ver">SİPARİŞ VER</button>
                </div>

                <div className="right-block">
                    <div className="right-first">
                        <h2 id="right-first-header">
                            Hackathlon<br />Burger Menü
                        </h2>
                        <button className="siparis-ver">SİPARİŞ VER</button>
                    </div>

                    <div className="right-second">
                        <h2 id="right-second-header">
                            <span style={{ color: "#CE2829" }}>Çoooook</span> hızlı<br />npm gibi kurye
                        </h2>
                        <button className="siparis-ver">SİPARİŞ VER</button>
                    </div>
                </div>
            </section>

            <section className="ara-yazi">
                <h3 id="en-cok">en çok paketlenen menüler</h3>
                <h2 id="aciktiran-kodlar">Acıktıran Kodlara Doyuran Lezzetler</h2>
            </section>

            <section className="second-menu">
                <div className="ramen">
                    <img src="images/assets/iteration-2-images/icons/1.svg" alt="ikon1" />
                    <a href="#">Ramen</a>
                </div>
                <div className="pzza">
                    <img src="images/assets/iteration-2-images/icons/2.svg" alt="ikon2" />
                    <a href="#">Pizza</a>
                </div>
                <div className="bggr">
                    <img src="images/assets/iteration-2-images/icons/3.svg" alt="ikon3" />
                    <a href="#">Burger</a>
                </div>
                <div className="french">
                    <img src="images/assets/iteration-2-images/icons/4.svg" alt="ikon4" />
                    <a href="#">French Fries</a>
                </div>
                <div className="fast-f">
                    <img src="images/assets/iteration-2-images/icons/5.svg" alt="ikon5" />
                    <a href="#">Fast food</a>
                </div>
                <div className="soft">
                    <img src="images/assets/iteration-2-images/icons/6.svg" alt="ikon6" />
                    <a href="#">Soft Drinks</a>
                </div>
            </section>

        </section>

    )
}

export default MainContent;