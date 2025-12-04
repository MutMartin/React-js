import "./ItemDetail.css";
import { Link } from "react-router-dom";

export function ItemDetail({ item }) {
  return (
    <div className="card">
      <h3>{item.nombre}</h3>
      <img src={item.img} alt={item.nombre} />
      <span className="price">${item.precio}</span>
      <div className="Buttons">
        <button>Agregar</button>
        <Link to={`/producto/${item.id}`}>
          <button>Ver detalle</button>
        </Link>
        
      </div>
    </div>
  );
}
