import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer>
            <section className="ana-footer">
                <div className="iletisim">
                    <img
                        id="footer-logo"
                        src="public/assets/iteration-2/footer/logo-footer.svg"
                        alt="footer logo"
                    />

                    <div id="location">
                        <img
                            id="location-icon"
                            src="public/assets/iteration-2/footer/icons/icon-1.png"
                            alt="location icon"
                        />
                        <a
                            className="footer-firstcolumn"
                            href="https://www.google.com/maps"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            341 Londonderry Road,
                            <br />
                            Istanbul Türkiye
                        </a>
                    </div>

                    <div id="mailaddress">
                        <img
                            id="mail-icon"
                            src="public/assets/iteration-2/footer/icons/icon-2.png"
                            alt="mail icon"
                        />
                        <a
                            className="footer-firstcolumn"
                            href="mailto:aciktim@teknolojikyemekler.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            aciktim@teknolojikyemekler.com
                        </a>
                    </div>

                    <div id="phone">
                        <img
                            id="phone-icon"
                            src="public/assets/iteration-2/footer/icons/icon-3.png"
                            alt="phone icon"
                        />
                        <a className="footer-firstcolumn" href="tel:+902161234567">
                            +90 216 123 45 67
                        </a>
                    </div>
                </div>

                <div className="hot-menu">
                    <h2 id="hot-menu-header">Hot Menu</h2>
                    <p>Terminal Pizza</p>
                    <p>5 Kişilik Hackathlon Pizza</p>
                    <p>useEffect Tavuklu Pizza</p>
                    <p>Beyaz Console Frosty</p>
                    <p>Testler Geçti Mutlu Burger</p>
                    <p>Position Absolute Acı Burger</p>
                </div>

                <div className="instagram">
                    <h2 id="insta-header">Instagram</h2>
                    <div className="insta-images">
                        {[...Array(6)].map((_, index) => (
                            <img
                                key={index}
                                src={`public/assets/iteration-2/footer/insta/li-${index}.png`}
                                alt={`insta ${index}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="copyright-x">
                <p>@ 2023 Teknolojik Yemekler.</p>
                <i className="fa fa-twitter" />
            </section>
        </footer>
    );
};

export default Footer;
