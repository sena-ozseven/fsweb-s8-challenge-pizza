import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import './submittedForm.css';

const Submitted = () => {

    const location = useLocation();
    const { size, dough, toppings } = location.state || {}; 

    return (
        <div className="submitted-container">
            <img className="teknolojik-logo" src="images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler"/>

            <section className="confirmation-messages">
                <p className="on-the-way">lezzetin yolda</p>
                <h3 className="received-message">SİPARİŞ ALINDI</h3>
                <hr />    
            </section> 
            
            <p className="pizza-name">Position Absolute Acı Pizza</p>
            <section className="boyut-hamur-malz">
                <p>Boyut: {size}</p>
                <p>Hamur: {dough}</p>
                <p>Malzemeler: {toppings?.join(', ')}</p>
            </section>
        </div>
    )
}

export default Submitted;