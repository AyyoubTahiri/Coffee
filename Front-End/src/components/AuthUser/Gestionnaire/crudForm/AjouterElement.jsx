import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AjouterElement = () => {
    const [formData, setFormData] = useState({ element: '', quantite: '', date: '', prix: '', photo: null });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'prix') {
            if (value === '' || (Number(value) > 0 && !value.startsWith('-'))) {
                setFormData({ ...formData, [name]: value });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handlePhotoChange = (e) => {
        setFormData({ ...formData, photo: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
        // Handle the submission, like sending data to an API or state management
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
                    <input
                        type="text"
                        name="element"
                        value={formData.element}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    />
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
                    <label style={{ display: 'block', marginBottom: '5px' }}>Prix:</label>
                    <input
                        type="number"
                        name="prix"
                        value={formData.prix}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Photo:</label>
                    <input
                        type="file"
                        name="photo"
                        onChange={handlePhotoChange}
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        accept="image/*"
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
