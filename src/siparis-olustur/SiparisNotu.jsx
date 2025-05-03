import React, { useState } from 'react';

const SiparisNotu = () => {
  const [isim, setIsim] = useState('');
  const [note, setNote] = useState('');

  return (
    <div className="siparis-notu-container">
      <label htmlFor="isim">İsim (en az 3 karakter)</label>
      <input
        type="text"
        id="isim"
        name="isim"
        value={isim}
        onChange={(e) => setIsim(e.target.value)}
        placeholder="Adınızı giriniz"
        minLength={3}
        required
      />

      <label htmlFor="siparisNotu">Sipariş Notu</label>
      <input
        type="text"
        id="siparisNotu"
        name="siparisNotu"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Siparişe eklemek istediğiniz bir not var mı?"
      />
    </div>
  );
};

export default SiparisNotu;


