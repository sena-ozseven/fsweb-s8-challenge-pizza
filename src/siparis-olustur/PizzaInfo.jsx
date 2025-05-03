import React, { useState } from 'react';
import './PizzaInfo.css';

const PizzaInfo = () => {

    const [pizzaInfo, setPizzaInfo] = useState({
        name: "Position Absolute Acı Pizza",
        price: 85.50,
        rating: 4.9,
        reviews: 200,
        description: "Frontend Dev olarak hâlâ position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir."
    });

    return (
        <section className="pizza-info">
            <h2 className="pizza-name">{pizzaInfo.name}</h2>
            <div className="price-and-rating">
                <p className="pizza-price">{pizzaInfo.price.toFixed(2)}₺</p>
                <p className="pizza-rating">
                    <span>{pizzaInfo.rating}</span> <span>({pizzaInfo.reviews})</span>
                </p>
            </div>
            <p className="pizza-description">
                {pizzaInfo.description}
            </p>        
        </section>
    );
};

export default PizzaInfo;
