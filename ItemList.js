import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ItemList({ editItem }) {
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const response = await axios.get('/api/items');
        setItems(response.data);
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`/api/items/${id}`);
        fetchItems();
    };

    return (
        <ul>
            {items.map(item => (
                <li key={item._id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <button onClick={() => editItem(item)}>Edit</button>
                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default ItemList;
