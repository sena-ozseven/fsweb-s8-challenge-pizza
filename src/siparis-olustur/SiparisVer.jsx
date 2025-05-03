import React, { useState } from "react";
import { Button } from "reactstrap";
import './siparisVer.css';


const SiparisVer = ({ toppings, dough, size }) => {
  const [adet, setAdet] = useState(1);


  const secimUcreti = toppings.length * 5
  const bazFiyat = 85.5;
  const toplamFiyat = (bazFiyat + secimUcreti) * adet;

  const adetArttir = () => setAdet((prev) => prev + 1);
  const adetAzalt = () => setAdet((prev) => (prev > 1 ? prev - 1 : 1));



  return (
    <div className="siparis-page">
      <div className="ayirici-cizgi" />
      <div className="siparis-container">
        <div className="adet-kontrol">
          <Button className="adet-btn" onClick={adetAzalt} color="warning">-</Button>
          <span className="adet-sayi">{adet}</span>
          <Button className="adet-btn" onClick={adetArttir} color="warning">+</Button>
        </div>
        <div className="siparis-toplami-container">
          <div className="siparis-ozet">
            <div className="siparis-fiyat">
              <h3 className="siparis-toplami-yazisi">Sipariş Toplamı</h3>
              <div className="satir">
                <span>Seçimler</span>
                <span>{(secimUcreti * adet).toFixed(2)}₺</span>
              </div>
              <div className="satir">
                <span>Toplam</span>
                <span>{toplamFiyat.toFixed(2)}₺</span>
              </div>
            </div>
          </div>
          <Button
            type="submit"
            color="warning"
            className="siparis-ver-btn"
            disabled={!size || !dough || toppings.length < 4}>
            SİPARİŞ VER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SiparisVer;
