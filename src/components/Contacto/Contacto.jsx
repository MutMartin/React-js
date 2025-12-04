import { Link } from 'react-router-dom';

import './Contacto.css';
import NavBar from '../NavBar/NavBar';

function Contacto() {
    return (
        <div>
            <NavBar />
            <div className="contacto-card">
                <h2>Contactanos</h2>
                <imput type="text" placeholder="Tu nombre" />
                <br />
                <input type="email" placeholder="Tu email" />
                <br />
                <textarea placeholder="Tu mensaje"></textarea>
                <br />
                <Link to="/">
                    <button >Enviar</button>
                </Link>
            </div>
        </div>
    );
}

export default Contacto;
