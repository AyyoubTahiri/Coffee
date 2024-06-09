import { CAvatar, CBadge, CButton, CCardBody, CCollapse, CSmartTable } from '@coreui/react-pro';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { getProduits } from '../../Redux/authActions';

const GestionMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { produits, loading } = useSelector((state) => state.auth);
  const [details, setDetails] = useState([]);
  console.log(produits);
  useEffect(() => {
    dispatch(getProduits());
  }, [dispatch]);

  const columns = [
    {
      key: 'nomProduit',
      label: 'Produit',
      _style: { width: '20%' },
    },
    {
      key: 'categorie',
      label: 'Categorie',
      _style: { width: '20%' },
    },
    {
      key: 'ingredients',
      label: 'Ingredients',
      _style: { width: '20%' },
    },
    {
      key: 'description',
      label: 'Description',
      _style: { width: '20%' },
    },
    {
      key: 'Prix',
      label: 'Prix',
      _style: { width: '10%' },
    },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
    },
  ];

  const getBadge = (prix) => {
    switch (prix) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'secondary';
      case 'Pending':
        return 'warning';
      case 'Banned':
        return 'danger';
      default:
        return 'primary';
    }
  };

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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
        <div style={{ backgroundColor: '#795548', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>
          <RestaurantMenuIcon style={{ fill: 'white', marginRight: '5px' }} />
          Menu
        </div>
        <CButton
          color="primary"
          variant="outlined"
          style={{ borderColor: '#795548', color: '#795548', transition: 'color 0.3s, background-color 0.3s' }}
          className="hover-effect"
          onClick={() => navigate('/gest/ajoutermenu')}
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
        items={produits}
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
          nomProduit: (item) => <td>{item.nomProduit}</td>,
          categorie: (item) => <td>{item.categorie ? item.categorie.name : 'N/A'}</td>,
          ingredients: (item) => <td>{item.ingredients ? item.ingredients.map(ing => ing.name).join(', ') : 'N/A'}</td>,
          Prix: (item) => (
            <td>
              <CBadge color={getBadge(item.Prix)}>{item.Prix}</CBadge>
            </td>
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
                  <h4>{item.nomProduit}</h4>
                  <p className="text-muted">Category: {item.categorie ? item.categorie.name : 'N/A'}</p>
                  <p className="text-muted">Ingredients: {item.ingredients ? item.ingredients.map(ing => ing.name).join(', ') : 'N/A'}</p>
                  <p className="text-muted">Description: {item.description}</p>
                  <p className="text-muted">Price: {item.Prix}</p>
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
        sorterValue={{ column: 'Prix', state: 'asc' }}
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
    </Box>
  );
}

export default GestionMenu;
