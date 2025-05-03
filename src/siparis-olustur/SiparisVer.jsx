import React, { useState } from "react";
import PizzaOptions from "./PizzaOptions";


const SiparisVer = () => {
  const [adet, setAdet] = useState(1);
  const [size, setSize] = useState('');
  const [dough, setDough] = useState('');
  const [toppings, setToppings] = useState([]);
  const [note, setNote] = useState('');

  const secimUcreti = toppings.length * 5
  const bazFiyat = 85.5;
  
  const toplamFiyat = (bazFiyat + secimUcreti) * adet;

  const adetArttir = () => setAdet((prev) => prev + 1);
  const adetAzalt = () => setAdet((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="siparis-page">

      <PizzaOptions
        size={size}
        setSize={setSize}
        dough={dough}
        setDough={setDough}
        toppings={toppings}
        setToppings={setToppings}
      />

      <div className="siparis-container">
        <div className="adet-kontrol">
          <button className="adet-btn" onClick={adetAzalt}>-</button>
          <span className="adet-sayi">{adet}</span>
          <button className="adet-btn" onClick={adetArttir}>+</button>
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
          <button className="siparis-ver-btn">SİPARİŞ VER</button>
        </div>
      </div>
    </div>
  );
};

export default SiparisVer;
