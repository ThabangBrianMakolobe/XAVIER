import React, { useState } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

function App() {
    const [editingItem, setEditingItem] = useState(null);

    const refreshItems = () => {
        setEditingItem(null);
    };

    return (
        <div>
            <h1>CRUD Application</h1>
            <ItemForm refreshItems={refreshItems} editingItem={editingItem} />
            <ItemList editItem={setEditingItem} />
        </div>
    );
}

export default App;
