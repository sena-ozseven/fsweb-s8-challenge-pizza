import React from 'react';
import './PizzaOptions.css';
import { Form, FormGroup, Input, Label } from 'reactstrap';

const PizzaOptions = ({ size, setSize, dough, setDough, toppings, setToppings }) => {
  const sizes = ['Küçük', 'Orta', 'Büyük'];
  const doughOptions = ['İnce', 'Normal', 'Kalın'];
  const extraToppings = [
    'Pepperoni', 'Domates', 'Biber', 'Sosis', 'Mısır', 'Sucuk',
    'Jambon', 'Salam', 'Ananas', 'Tavuk Izgara',
    'Jalepeno', 'Kabak', 'Soğan', 'Sarımsak'
  ];

  const handleToppingChange = (topping) => {
    if (toppings.includes(topping)) {
      setToppings(toppings.filter(t => t !== topping));
    } else if (toppings.length < 10) {
      setToppings([...toppings, topping]);
    }
  };

  return (
    <Form className="pizza-options-container">
      <div className='boyut-hamur'>
        <FormGroup className='option-group'>
          <h3 className="option-title">Boyut Seç <span className="required">*</span></h3>
          <FormGroup className="size-options">
            {sizes.map((s, i) => (
              <Label key={i}>
                <Input
                  type="radio"
                  name="size"
                  value={s}
                  checked={size === s}
                  onChange={() => setSize(s)}
                />
                <span className='size-options-text'>{s}</span>
              </Label>
            ))}
          </FormGroup>
        </FormGroup>

        <FormGroup className='option-group'>
          <section className='hamur-sec-container'>
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
          </section>
        </FormGroup>
      </div>

      <FormGroup className='option-group'>
         <section className='ek-malzemeler-container'>
           <h3 className="option-title">Ek Malzemeler</h3>
            <p className="topping-note">En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <FormGroup className="toppings-grid">
              {extraToppings.map((topping, index) => (
                <Label key={topping} className='checkbox-label'>
                  <Input
                    type="checkbox"
                    checked={toppings.includes(topping)}
                    onChange={() => handleToppingChange(topping)}
                  />
                  <span className="label-text">{topping}</span>
                </Label>
              ))}
            </FormGroup>
         </section>
      </FormGroup>
    </Form>
  );
};

export default PizzaOptions;
