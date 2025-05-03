import React, { useState } from 'react';
import Header from './Header';
import PizzaInfo from './PizzaInfo';
import PizzaOptions from './PizzaOptions';
import SiparisNotu from './SiparisNotu';
import SiparisVer from './SiparisVer';
import './siparisOlustur.css';



export default function SiparisOlustur() {
    
    const [size, setSize] = useState('');
    const [dough, setDough] = useState('');
    const [toppings, setToppings] = useState([]);
    const [note, setNote] = useState('');

    return (
        <div className='app-container'>
            <Header/>
            <div className="form-container">
                <PizzaInfo />
                <PizzaOptions
                    size={size}
                    setSize={setSize}
                    dough={dough}
                    setDough={setDough}
                    toppings={toppings}
                    setToppings={setToppings}
                />
                <SiparisNotu 
                    note={note}
                    setNote={setNote}            
                />
                <SiparisVer 
                    toppings={toppings}
                    note={note}
                    setNote={setNote}
                    dough={dough}
                    size={size}
                />
            </div>
        </div>
    );
}
