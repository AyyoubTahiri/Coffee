import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Select,
  MenuItem,
} from '@mui/material';
import ordersData from './data';

const GestionCommande = () => {
  const [orders, setOrders] = useState(ordersData);

  const handleAction = (id, action) => {
    const updatedOrders = orders.map(order => {
      if (order.id === id) {
        return { ...order, status: action };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell>Compte de messagerie</TableCell>
            <TableCell>Type de commande</TableCell>
            <TableCell>Contenu de la commande</TableCell>
            <TableCell>Heure de la commande</TableCell>
            <TableCell>État de la commande</TableCell>
            <TableCell>Actions disponibles</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(order => (
            <TableRow key={order.id}>
              <TableCell>{order.name}</TableCell>
              <TableCell>{order.email}</TableCell>
              <TableCell>{order.orderType}</TableCell>
              <TableCell>{order.orderContent}</TableCell>
              <TableCell>{order.orderTime}</TableCell>
              <TableCell>
                <Select
                  value={order.status}
                  onChange={e => handleAction(order.id, e.target.value)}
                >
                  <MenuItem value="En attente">En attente</MenuItem>
                  <MenuItem value="En cours de préparation">En cours de préparation</MenuItem>
                  <MenuItem value="Prête pour livraison/retrait">Prête pour livraison/retrait</MenuItem>
                  <MenuItem value="Expirée">Expirée</MenuItem>
                </Select>
              </TableCell>
              <TableCell>
                {order.status === 'En attente' && (
                  <div>
                    <Button
                    
                      variant="contained"
                      color="primary"
                      onClick={() => handleAction(order.id, 'En cours de préparation')}
                    >
                      Accepter
                    </Button>
                    <Button
                    style={{marginTop:"5px",paddingTop:"5px",width:"100px"}}
                      variant="contained"
                      color="secondary"
                      onClick={() => handleAction(order.id, 'Expirée')}
                    >
                      Refuser
                    </Button>
                  </div>
                )}
                {order.status === 'En cours de préparation' && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAction(order.id, 'Prête pour livraison/retrait')}
                  >
                    Mettre à jour le statut
                  </Button>
                )}
                {order.status === 'Prête pour livraison/retrait' && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAction(order.id, 'Livrée')}
                  >
                    Marquer comme Livrée
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GestionCommande;
