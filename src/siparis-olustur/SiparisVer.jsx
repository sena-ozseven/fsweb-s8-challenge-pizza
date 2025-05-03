import React, { useState } from "react";
import { Button } from "reactstrap";


const SiparisVer = ({ toppings, note, setNote, dough, size }) => {
  const [adet, setAdet] = useState(1);


  const secimUcreti = toppings.length * 5
  const bazFiyat = 85.5;
  const toplamFiyat = (bazFiyat + secimUcreti) * adet;

  const adetArttir = () => setAdet((prev) => prev + 1);
  const adetAzalt = () => setAdet((prev) => (prev > 1 ? prev - 1 : 1));



  return (
    <div className="siparis-page">
      <div className="siparis-container">
        <div className="adet-kontrol">
          <Button className="adet-btn" onClick={adetAzalt} color="warning">-</Button>
          <span className="adet-sayi">{adet}</span>
          <Button className="adet-btn" onClick={adetArttir} color="warning">+</Button>
        </div>

        <input
            type="text"
            className="siparis-note"
            placeholder="Siparişe eklemek istediğiniz bir not var mı?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
        />


        <div className="siparis-ozet">
          <div className="siparis-fiyat">
            <div className="satir">
              <span>Seçimler</span>
              <span>{(secimUcreti * adet).toFixed(2)}₺</span>
            </div>
            <div className="satir toplam">
              <span>Toplam</span>
              <span>{toplamFiyat.toFixed(2)}₺</span>
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
