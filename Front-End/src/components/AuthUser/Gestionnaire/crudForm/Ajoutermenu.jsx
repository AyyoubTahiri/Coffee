import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddProduits, getCategory, getIngredient } from '../../../Redux/authActions';

const AjouterMenu = () => {
    const [formData, setFormData] = useState({
        nomProduit: '',
        description: '',
        Prix: '',
        idCategorie: '',
        ingredients: []
    });
    const navigate = useNavigate();
    const { categories, ingredients, loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategory());
        dispatch(getIngredient());
    }, [dispatch]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectChange = (e) => {
        const { name, options } = e.target;
        const value = Array.from(options).filter(option => option.selected).map(option => option.value);
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddProduits(formData, () => {
            setFormData({
                nomProduit: '',
                description: '',
                Prix: '',
                idCategorie: '',
                ingredients: []
            });
            navigate('/gest/menu');
        }));
    };

    const handleCancel = () => {
        navigate('/gest/menu');
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
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Add New Product</h1>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Produit:</label>
                    <input
                        type="text"
                        name="nomProduit"
                        value={formData.nomProduit}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    ></textarea>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Prix:</label>
                    <input
                        type="number"
                        name="Prix"
                        value={formData.Prix}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Categorie:</label>
                    <select
                        name="idCategorie"
                        value={formData.idCategorie}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    >
                        <option value="">Select a category</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Ingredients:</label>
                    <select
                        name="ingredients"
                        multiple
                        value={formData.ingredients}
                        onChange={handleSelectChange}
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    >
                        {ingredients.map(ingredient => (
                            <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>
                        ))}
                    </select>
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

export default AjouterMenu;
