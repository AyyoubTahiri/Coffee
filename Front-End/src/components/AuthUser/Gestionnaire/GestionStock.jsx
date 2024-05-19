// GestionStock.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GestionStock = () => {
    const navigate = useNavigate(); // Hook to programmatically navigate

    const [showForm, setShowForm] = useState(false); // State to control form visibility
    const [formData, setFormData] = useState({ element: '', quantite: '', date: '' }); // State to manage form data
    const [tableData, setTableData] = useState([
        { element: 'milk', quantite: '125', date: '02-02-2001' },
        { element: 'coffe', quantite: '49', date: '02-60-5550' },
        { element: 'suggar', quantite: '68', date: '57557575577' }
    ]); // State to manage table data

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setTableData([...tableData, formData]);
        setFormData({ element: '', quantite: '', date: '' }); // Reset form fields
        setShowForm(false); // Hide form after submission
    };

    // Handle delete action
    const handleDelete = (index) => {
        const newData = [...tableData];
        newData.splice(index, 1);
        setTableData(newData);
    };

    // Handle update action (this will show the form with existing data)
    const handleUpdate = (index) => {
        setFormData(tableData[index]);
        setShowForm(true);
        const newData = [...tableData];
        newData.splice(index, 1);
        setTableData(newData);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px' }}>
                <button
                    style={{ backgroundColor: 'brown', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    onClick={() => navigate('/gest/ajouter')} // Navigate to AjouterElement on click
                >
                    Ajouter
                </button>
            </div>
            {/* Centered Table with Enhanced Styling and Action Column */}
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
                <table style={{ width: '60%', borderCollapse: 'collapse', boxShadow: '0 6px 10px rgba(0,0,0,0.15)', borderRadius: '8px', overflow: 'hidden' }}>
                    <thead style={{ backgroundColor: 'brown', color: 'white' }}>
                        <tr>
                            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Élément</th>
                            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Quantité</th>
                            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Date</th>
                            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Action</th> {/* New Action Column */}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.length === 0 ? (
                            <tr>
                                <td style={{ border: '1px solid #ccc', padding: '10px' }} colSpan="4">No data available</td>
                            </tr>
                        ) : (
                            tableData.map((data, index) => (
                                <tr key={index}>
                                    <td style={{ border: '1px solid #ccc', padding: '10px' }}>{data.element}</td>
                                    <td style={{ border: '1px solid #ccc', padding: '10px' }}>{data.quantite}</td>
                                    <td style={{ border: '1px solid #ccc', padding: '10px' }}>{data.date}</td>
                                    <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                                        <button className='btn btn-danger me-3'
                                            onClick={() => handleDelete(index)}
                                        >
                                            Delete
                                        </button>
                                        <button
                                                className='btn btn-primary'
                                            onClick={() => handleUpdate(index)}
                                        >
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GestionStock;
