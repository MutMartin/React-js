import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Producto from "../Producto/Producto";

function ItemDetailContainer() {
    const { itemId } = useParams();      // ← toma el ID de la URL
    const [item, setItem] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("/productos.json");
                const data = await response.json();

                // Busca el producto por ID
                const encontrado = data.find(prod => prod.id == itemId);
                setItem(encontrado);
            } catch (error) {
                console.error("Error fetching item:", error);
            }
        })();
    }, [itemId]);

    return (
        <div>
            {item ? (
                <Producto item={item} />   // ← aquí le pasás el item a Producto
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
}

export default ItemDetailContainer;