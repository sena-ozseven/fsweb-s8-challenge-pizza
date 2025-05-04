import React from 'react';
import './pizzaCard.css';

const pizzaData = [
    {
        id: 1,
        name: 'Terminal Pizza',
        imgSrc: 'images/iteration-2-images/pictures/food-1.png',
        rating: '4.9',
        reviews: '(200)',
        price: '60₺'
    },
    {
        id: 2,
        name: 'Position Absolute Acı Pizza',
        imgSrc: 'images/iteration-2-images/pictures/food-2.png',
        rating: '4.9',
        reviews: '(200)',
        price: '60₺'
    },
    {
        id: 3,
        name: 'useEffect Tavuklu Burger',
        imgSrc: 'images/iteration-2-images/pictures/food-3.png',
        rating: '4.9',
        reviews: '(200)',
        price: '60₺'
    }
];

const PizzaCard = () => {
    return (
        <section className="pizzalar">
            {pizzaData.map((pizza) => (
                <div key={pizza.id} className={`pizza${pizza.id}`}>
                    <img src={pizza.imgSrc} alt={pizza.name} />
                    <h3 className="pizza-name">{pizza.name}</h3>
                    <section className="info">
                        <span className="rating">{pizza.rating}</span>
                        <span className="reviews">{pizza.reviews}</span>
                        <span className="price">{pizza.price}</span>
                    </section>
                </div>
            ))}
        </section>
    );
};

export default PizzaCard;
