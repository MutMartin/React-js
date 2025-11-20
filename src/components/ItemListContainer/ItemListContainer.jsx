import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail.jsx";
import './ItemListContainer.css';

function ItemListContainer() {
    const [items, setItems] = useState([]);

useEffect(() => {
    (async () => {
        try {
            const response = await fetch("/productos.json");
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    })();
}, []);

    return (
        <div className="ItemListContainer">
            {items.map((item) => (
                <ItemDetail key={item.id} item={item} />
            ))}
        </div>
    );
}

export default ItemListContainer;
