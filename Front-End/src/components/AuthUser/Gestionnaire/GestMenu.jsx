import { CAvatar, CBadge, CButton, CCardBody, CCollapse, CSmartTable } from '@coreui/react-pro';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';

const GestionMenu = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const [details, setDetails] = useState([]);
  const columns = [
    {
      key: 'avatar',
      label: '',
      filter: false,
      sorter: false,
    },
    {
      key: 'produit', // Changed from 'ingredient'
      _style: { width: '20%' },
    },
    'date', // Changed from 'ingredient'
    { 
      key: 'description', // Changed from 'prix'
      _style: { width: '20%' }
    },
    { 
      key: 'prix', // Changed from 'quantite'
      _style: { width: '20%' }
    },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
    },
  ];
  
  const usersData = [
    {
      id: 1,
      produit: 'Flour', // Changed from 'ingredient'
      avatar: '1.jpg',
      date: '2022/01/01', // Changed from 'ingredient'
      description: 'High quality flour for baking', // Changed from 'prix'
      prix: '320 $', // Changed from 'quantite'
    },
    {
      id: 2,
      produit: 'Sugar',
      avatar: '2.jpg',
      date: '2022/02/07',
      description: 'Refined sugar for cooking',
      prix: '400 $',
    },
    // Other user data entries...
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

  return (
    <>
    <Box
      bgcolor="#f0f0f0"
      p={2}
    >
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
        items={usersData}
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
          avatar: (item) => (
            <td>
              <CAvatar src={`/images/avatars/${item.avatar}`} />
            </td>
          ),
          prix: (item) => (
            <td>
              <CBadge color={getBadge(item.prix)}>{item.prix}</CBadge>
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
                  <h4>{item.produit}</h4>
                  <p className="text-muted">Date: {item.date}</p> {/* Changed from 'ingredient' */}
                  <p className="text-muted">Description: {item.description}</p> {/* Added description */}
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
        sorterValue={{ column: 'prix', state: 'asc' }}
        tableFilter
        tableProps={{
          style: { borderCollapse: 'collapse', borderRadius: '5px' }, // Collapse borders
          responsive: true,
          striped: true,
          hover: true,
        }}
        tableBodyProps={{
          style: {
            borderTop: '1px solid #8D6E63',
            borderBottom: '1px solid #8D6E63',
          },
          className: 'striped-table-body'
        }}
      /></Box>
    </>
  );
}

export default GestionMenu;
