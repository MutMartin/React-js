import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail.jsx";
import './ItemListContainer.css';

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");
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
    }, [])

    const filteredItems = items.filter((item) =>
        item.nombre.toLowerCase().includes(search.toLowerCase())
    );;

    return (

        <div>
            <div className="Filtro">
            <h2>Buscar</h2>

            <input
                type="text"
                placeholder="Buscar producto..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}

            />
            </div>
            <div className="ItemListContainer">
            {filteredItems.map((filteredItems) => (
                <ItemDetail key={filteredItems.id} item={filteredItems} />
            ))}</div>
        </div>
    );
}

export default ItemListContainer;
