import { CButton, CCardBody, CCollapse, CSmartTable } from '@coreui/react-pro';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StorageIcon from '@mui/icons-material/Storage';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { getStock } from '../../Redux/authActions';

const GestionStock = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { stocks, loading } = useSelector((state) => state.auth);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        dispatch(getStock()); // Fetch stock data
    }, [dispatch]);

    const columns = [
      {
        key: 'ingredient',
        label: 'Ingredient',
        _style: { width: '20%' },
        sorter: false,
        filter: false,
        _props: { className: 'fw-semibold' },
      },
      {
        key: 'dateEntre',
        label: 'Date Entered',
        _style: { width: '20%' },
        sorter: true,
        filter: true,
      },
      {
        key: 'dateExpires',
        label: 'Date Expires',
        _style: { width: '20%' },
        sorter: true,
        filter: true,
      },
      {
        key: 'prixTotale',
        label: 'Total Price',
        _style: { width: '20%' },
        sorter: true,
        filter: true,
      },
      {
        key: 'quantite',
        label: 'Quantity',
        _style: { width: '20%' },
        sorter: true,
        filter: true,
      },
      {
        key: 'show_details',
        label: '',
        _style: { width: '1%' },
        filter: false,
        sorter: false,
      },
    ];

    const toggleDetails = (index) => {
      const position = details.indexOf(index);
      let newDetails = details.slice();
      if (position !== -1) {
        newDetails.splice(position, 1);
      } else {
        newDetails = [...details, index];
      }
      setDetails(newDetails);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
      <Box bgcolor="#f0f0f0" p={2}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
            <div style={{ backgroundColor: '#795548', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>
              <StorageIcon style={{ fill: 'white', marginRight: '5px' }} />
              Stock
            </div>
            <CButton
              color="primary"
              variant="outlined"
              style={{ borderColor: '#795548', color: '#795548', transition: 'color 0.3s, background-color 0.3s' }}
              className="hover-effect"
              onClick={() => navigate('/gest/ajouterstock')}
              startIcon={<AddIcon />}
            >
              Ajouter
            </CButton>
          </div>

          <CSmartTable
            activePage={2}
            cleaner
            clickableRows
            columns={columns}
            columnFilter
            columnSorter
            footer
            items={stocks}
            itemsPerPageSelect
            itemsPerPage={5}
            pagination
            onFilteredItemsChange={(items) => {
              console.log(items);
            }}
            onSelectedItemsChange={(items) => {
              console.log(items);
            }}
            scopedColumns={{
              ingredient: (item) => (
                <td>{item.ingredient ? item.ingredient.name : 'Unknown'}</td>
              ),
              show_details: (item) => {
                return (
                  <td className="py-2">
                    <CButton
                      color="primary"
                      variant="outline"
                      shape="square"
                      size="sm"
                      onClick={() => {
                        toggleDetails(item.id);
                      }}
                    >
                      {details.includes(item.id) ? 'Hide' : 'Show'}
                    </CButton>
                  </td>
                );
              },
              details: (item) => {
                return (
                  <CCollapse visible={details.includes(item.id)}>
                    <CCardBody className="p-3">
                      <h4>{item.ingredient ? item.ingredient.name : 'Unknown'}</h4>
                      <p className="text-muted">Date Entered: {item.dateEntre}</p>
                      <p className="text-muted">Date Expires: {item.dateExpires}</p>
                      <p className="text-muted">Total Price: {item.prixTotale}</p>
                      <p className="text-muted">Quantity: {item.quantite}</p>
                      <CButton size="sm" color="primary">
                        Update
                      </CButton>
                      <CButton size="sm" color="danger" className="ml-1">
                        Delete
                      </CButton>
                    </CCardBody>
                  </CCollapse>
                );
              },
            }}
            selectable
            sorterValue={{ column: 'quantite', state: 'asc' }}
            tableFilter
            tableProps={{
              style: { borderCollapse: 'collapse', borderRadius: '5px' },
              responsive: true,
              striped: true,
              hover: true,
            }}
            tableBodyProps={{
              style: {
                borderTop: '1px solid #8D6E63',
                borderBottom: '1px solid #8D6E63',
              },
              className: 'striped-table-body',
            }}
          />
        </div>
      </Box>
    );
}

export default GestionStock;
