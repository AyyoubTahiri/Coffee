import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const specialProducts = [
  { id: 1, name: "Café Grand Cru", description: "Un mélange exclusif pour nos clients fidèles.", price: "$5.99", quantity: 100, date: "2024-05-01" },
  { id: 2, name: "Édition Limitée Mocha", description: "Un mocha spécial avec du chocolat importé.", price: "$6.50", quantity: 50, date: "2024-05-15" }
];

const tableContainerStyle = {
  borderRadius: '8px',
  margin: '20px 10%',
  maxWidth: '80%',
  backgroundColor: '#f5f5dc'  // Beige background to resemble coffee cream
};

const tableHeaderCellStyle = {
  fontWeight: 'bold',
  backgroundColor: '#6b4f4f',  // Dark coffee brown
  color: '#fff'  // Creamy white for text
};

const tableRowStyle = {
  '&:hover': {
    backgroundColor: '#ddd2c5',  // Lighter shade of brown for hover
  }
};

const priceStyle = {
  fontWeight: 'bold',
  color: '#805e49'  // Medium coffee brown
};

const titleStyle = {
  margin: '20px 0',
  color: '#5a4234'  // Rich espresso brown
};

const dateStyle = {
  fontStyle: 'italic',
  color: '#3e2723'  // Deep coffee color
};

const Special = () => {
  return (
    <TableContainer component={Paper} style={tableContainerStyle}>
      <Typography variant="h4" align="center" style={titleStyle}>
        Offres Spéciales
      </Typography>
      <Table aria-label="special offers table">
        <TableHead>
          <TableRow>
            <TableCell style={tableHeaderCellStyle}>Nom du Produit</TableCell>
            <TableCell align="right" style={tableHeaderCellStyle}>Description</TableCell>
            <TableCell align="right" style={tableHeaderCellStyle}>Prix</TableCell>
            <TableCell align="right" style={tableHeaderCellStyle}>Quantité</TableCell>
            <TableCell align="right" style={tableHeaderCellStyle}>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {specialProducts.map((product) => (
            <TableRow key={product.id} style={tableRowStyle}>
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="right">{product.description}</TableCell>
              <TableCell align="right" style={priceStyle}>{product.price}</TableCell>
              <TableCell align="right">{product.quantity}</TableCell>
              <TableCell align="right" style={dateStyle}>{product.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Special;
