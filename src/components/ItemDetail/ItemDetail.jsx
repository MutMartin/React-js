import "./ItemDetail.css";

export function ItemDetail({ item }) {
  return (
    <div className="card">
      <h3>{item.nombre}</h3>
      <p>{item.descripcion}</p>
      <span className="price">${item.precio}</span>
      <button>Agregar</button>
    </div>
  );
}
