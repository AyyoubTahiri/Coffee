import React, { useState } from 'react';
import '../../../assets/css/MenuGestionnaire.css';

const MenuGestionnaire = () => {
    // Sample initial data
    const initialCoffees = [
        { id: 1, name: 'Espresso', image: '/path-to-image/espresso.jpg', ingredients: 'Espresso', price: '2.00' },
        { id: 2, name: 'Cappuccino', image: '/path-to-image/cappuccino.jpg', ingredients: 'Espresso, Milk Foam', price: '3.50' },
    ];

    // State to hold coffees
    const [coffees, setCoffees] = useState(initialCoffees);
    const [showForm, setShowForm] = useState(false);
    const [editableCoffee, setEditableCoffee] = useState(null);

    // Handle add button click
    const onAddClick = () => {
        setEditableCoffee({ id: null, name: '', image: '', ingredients: '', price: '' }); // Empty object for new entry
        setShowForm(true);
    };

    // Handle delete
    const onDelete = (id) => {
        setCoffees(coffees.filter(coffee => coffee.id !== id));
    };

    // Handle modify
    const onModify = (id) => {
        const coffee = coffees.find(coffee => coffee.id === id);
        setEditableCoffee(coffee);
        setShowForm(true);
    };

    return (
        <div className="coffee-table-container">
            <button className="add-button" onClick={onAddClick}>Add</button>
            {showForm && (
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target;
                    const updatedCoffee = {
                        id: editableCoffee.id ? editableCoffee.id : Date.now(),
                        name: form.name.value,
                        image: form.image.value,
                        ingredients: form.ingredients.value,
                        price: form.price.value
                    };

                    if (editableCoffee.id) {
                        setCoffees(coffees.map(coffee => coffee.id === editableCoffee.id ? updatedCoffee : coffee));
                    } else {
                        setCoffees([...coffees, updatedCoffee]);
                    }

                    setShowForm(false);
                }}>
                    <input type="text" name="name" defaultValue={editableCoffee.name} placeholder="Name" required />
                    <input type="text" name="image" defaultValue={editableCoffee.image} placeholder="Image URL" required />
                    <input type="text" name="ingredients" defaultValue={editableCoffee.ingredients} placeholder="Ingredients" required />
                    <input type="text" name="price" defaultValue={editableCoffee.price} placeholder="Price" required />
                    <button type="submit">Save</button>
                    <button onClick={() => setShowForm(false)}>Cancel</button>
                </form>
            )}
            <table className="coffee-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Ingredients</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {coffees.map((coffee) => (
                        <tr key={coffee.id}>
                            <td>{coffee.name}</td>
                            <td>
                                <img src={coffee.image} alt={coffee.name} className="coffee-image" />
                            </td>
                            <td>{coffee.ingredients}</td>
                            <td>{coffee.price}</td>
                            <td>
                                <button className="modify-button" onClick={() => onModify(coffee.id)}>Modify</button>
                                <button className="delete-button" onClick={() => onDelete(coffee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="add-button" onClick={onAddClick}>Add Another</button>
        </div>
    );
};

export default MenuGestionnaire;
