import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Submitted = () => {

    const location = useLocation();
    const { size, dough, toppings } = location.state || {}; 

    return (
        <div>
            <p>Boyut: {size}</p>
            <p>Hamur: {dough}</p>
            <p>Malzemeler: {toppings?.join(', ')}</p>
        </div>
    )
}

export default Submitted;