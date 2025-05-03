import React, { useState } from 'react';
import Header from './Header';
import PizzaInfo from './PizzaInfo';
import PizzaOptions from './PizzaOptions';
import SiparisNotu from './SiparisNotu';
import SiparisVer from './SiparisVer';



export default function SiparisOlustur() {
    
    const [size, setSize] = useState('');
    const [dough, setDough] = useState('');
    const [toppings, setToppings] = useState([]);

    return (
        <div className='app-container'>
            <Header/>
            <PizzaInfo />
            <PizzaOptions
            size={size}
            setSize={setSize}
            dough={dough}
            setDough={setDough}
            toppings={toppings}
            setToppings={setToppings}
            />
            <SiparisNotu />
            <SiparisVer />
        </div>
    );
}
