import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddStocks, getIngredient } from '../../../Redux/authActions';

const AjouterElement = () => {
    const [formData, setFormData] = useState({ element: '', quantite: '', dateEntre: '', dateExpires: '', prixTotale: '' });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { ingredients, loading } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getIngredient());
    }, [dispatch]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => {
            const newFormData = { ...prevState, [name]: value };

            if (name === 'element' || (name === 'quantite' && prevState.element)) {
                const selectedIngredient = ingredients.find(ingredient => ingredient.id === parseInt(newFormData.element));
                if (selectedIngredient) {
                    newFormData.prixTotale = selectedIngredient.prix * newFormData.quantite;
                }
            }

            return newFormData;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const stockData = {
            idIngredient: parseInt(formData.element),
            quantite: parseInt(formData.quantite),
            dateEntre: formData.dateEntre,
            dateExpires: formData.dateExpires,
            prixTotale: parseFloat(formData.prixTotale)
        };
        dispatch(AddStocks(stockData, () => {
            setFormData({ element: '', quantite: '', dateEntre: '', dateExpires: '', prixTotale: '' });
            navigate('/gest/stock');
        }));
    };

    const handleCancel = () => {
        navigate('/gest/stock');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    border: '1px solid #ccc',
                    padding: '30px',
                    borderRadius: '8px',
                    boxShadow: '0 6px 10px rgba(0,0,0,0.15)',
                    width: '50%',
                    minWidth: '300px',
                    backgroundColor: '#f9f9f9'
                }}
            >
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Add New Element</h1>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Élément:</label>
                    <select
                        name="element"
                        value={formData.element}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    >
                        <option value="">Select an ingredient</option>
                        {ingredients.map((ingredient) => (
                            <option key={ingredient.id} value={ingredient.id}>
                                {ingredient.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Quantité:</label>
                    <input
                        type="number"
                        name="quantite"
                        value={formData.quantite}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Prix Total:</label>
                    <input
                        type="number"
                        name="prixTotale"
                        value={formData.prixTotale}
                        readOnly
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Date d'Entrée:</label>
                    <input
                        type="date"
                        name="dateEntre"
                        value={formData.dateEntre}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Date d'Expiration:</label>
                    <input
                        type="date"
                        name="dateExpires"
                        value={formData.dateExpires}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button
                        type="submit"
                        style={{
                            width: '48%',
                            padding: '10px 20px',
                            backgroundColor: 'brown',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Ajouter
                    </button>
                    <button
                        type="button"
                        onClick={handleCancel}
                        style={{
                            width: '48%',
                            padding: '10px 20px',
                            backgroundColor: 'grey',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AjouterElement;
