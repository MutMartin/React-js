import './Producto.css';
import { Link } from 'react-router-dom';

function Producto({ item }) {
    if (!item) return <p>Cargando...</p>;

    return (
        <div className="producto-card">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre} />
            <p>Precio: ${item.precio}</p>
            <p>Descripción: {item.descripcion}</p>

            <button>Añadir al carrito</button>

            <Link to="/">
                <button>Volver</button>
            </Link>
        </div>
    );
}

export default Producto;
