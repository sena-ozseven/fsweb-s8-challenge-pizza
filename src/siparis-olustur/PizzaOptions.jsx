import React from 'react';
import './PizzaOptions.css';

const PizzaOptions = ({ size, setSize, dough, setDough, toppings, setToppings }) => {
  const sizes = ['Küçük', 'Orta', 'Büyük'];
  const doughOptions = ['İnce', 'Normal', 'Kalın'];
  const extraToppings = [
    'Pepperoni', 'Domates', 'Biber', 'Sosis', 'Mısır', 'Sucuk',
    'Kanada Jambonu', 'Ananas', 'Tavuk Izgara', 'Jalepeno',
    'Kabak', 'Soğan', 'Sarımsak'
  ];

  const handleToppingChange = (topping) => {
    if (toppings.includes(topping)) {
      setToppings(toppings.filter(t => t !== topping));
    } else if (toppings.length < 10) {
      setToppings([...toppings, topping]);
    }
  };

  return (
    <div className="pizza-options-container">
      <div className='option-group'>
        <h3 className="option-title">Boyut Seç <span className="required">*</span></h3>
        <div className="size-options">
          {sizes.map((s, i) => (
            <label key={i}>
              <input
                type="radio"
                name="size"
                value={s}
                checked={size === s}
                onChange={() => setSize(s)}
              />
              <span className='label-text'>{s}</span>
            </label>
          ))}
        </div>
      </div>

      <div className='option-group'>
        <h3 className="option-title">Hamur Seç <span className="required">*</span></h3>
        <select
          className="dough-select"
          value={dough}
          onChange={(e) => setDough(e.target.value)}
        >
          <option value="">Hamur Kalınlığı</option>
          {doughOptions.map((d, i) => (
            <option key={i} value={d}>{d}</option>
          ))}
        </select>
      </div>

      <div className='option-group'>
        <h3 className="option-title">Ek Malzemeler</h3>
        <p className="topping-note">En fazla 10 malzeme seçebilirsiniz. 5₺</p>
        <div className="toppings-grid">
          {extraToppings.map((topping, index) => (
            <label key={index} className='checkbox-label'>
              <input
                type="checkbox"
                checked={toppings.includes(topping)}
                onChange={() => handleToppingChange(topping)}
              />
              <span className="label-text">{topping}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PizzaOptions;
