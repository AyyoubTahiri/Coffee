import React, { useState } from 'react';
import './AddCoffeeForm.css';
import { Box } from '@mui/system';

const AddCoffeeForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCoffee = {
            id: Date.now(),
            name,
            ingredients,
            price,
            image
        };
        onAdd(newCoffee);
        setName('');
        setIngredients('');
        setPrice('');
        setImage('');
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <Box
      bgcolor="#f0f0f0"
      p={2}
    >
        <form className="add-coffee-form" onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Ingredients:
                <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
            </label>
            <label>
                Price:
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </label>
            <label>
                Image:
                <input type="file" accept="image/*" onChange={handleImageChange} required />
            </label>
            <button type="submit">Add</button>
        </form></Box>
    );
};

export default AddCoffeeForm;
