import React, { useState } from 'react';
import axios from 'axios';

function ItemForm({ refreshItems, editingItem }) {
    const [name, setName] = useState(editingItem ? editingItem.name : '');
    const [description, setDescription] = useState(editingItem ? editingItem.description : '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const item = { name, description };

        if (editingItem) {
            await axios.put(`/api/items/${editingItem._id}`, item);
        } else {
            await axios.post('/api/items', item);
        }

        refreshItems();
        setName('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <button type="submit">{editingItem ? 'Update' : 'Add'} Item</button>
        </form>
    );
}

export default ItemForm;
