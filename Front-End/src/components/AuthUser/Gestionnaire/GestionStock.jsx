// GestionStock.js
import { CAvatar, CBadge, CButton, CCardBody, CCollapse, CSmartTable } from '@coreui/react-pro';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StorageIcon from '@mui/icons-material/Storage';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';

const GestionStock = () => {
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
        key: 'ingredient', // Changed from 'name'
        _style: { width: '20%' },
      },
      'date', // Changed from 'ingredient'
      { 
        key: 'prix', // Changed from 'role'
        _style: { width: '20%' }
      },
      { 
        key: 'quantite', // Changed from 'status'
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
        ingredient: 'Flour', // Changed from 'name'
        avatar: '1.jpg',
        date: '2022/01/01', // Changed from 'ingredient'
        prix: '320 $', // Changed from 'role'
        quantite: '400 kg', // Changed from 'status'
      },
      {
        id: 2,
        ingredient: 'Sugar',
        avatar: '2.jpg',
        date: '2022/02/07',
        prix: '400 $',
        quantite: '400 L',
      },
      {
        id: 3,
        ingredient: 'Salt',
        avatar: '3.jpg',
        date: '2022/02/07',
        prix: '120 $',
        quantite: '600 kg',
        _selected: true,
      },
      {
        id: 4,
        ingredient: 'Butter',
        avatar: '4.jpg',
        date: '2022/03/19',
        prix: '450 $',
        quantite: '400 L',
      },
      {
        id: 5,
        ingredient: 'Milk',
        avatar: '5.jpg',
        date: '2022/01/21',
        prix: '410 $',
        quantite: '300 kg'
      },
      { 
        id: 6,
        ingredient: 'Eggs',
        avatar: '6.jpg',
        date: '2022/01/01',
        prix: '120 $',
        quantite: '400 L'
      },
      {
        id: 7,
        ingredient: 'Yeast',
        avatar: '7.jpg',
        date: '2022/02/07',
        prix: '0.3',
        quantite: '50',
        _selected: true,
      },
      {
        id: 8,
        ingredient: 'Water',
        avatar: '8.jpg',
        date: '2022/02/07',
        prix: '0.1',
        quantite: '100'
      },
      { 
        id: 9,
        ingredient: 'Oil',
        avatar: '9.jpg',
        date: '2022/03/19',
        prix: '3.5',
        quantite: '10'
      },
      { 
        id: 10,
        ingredient: 'Vinegar',
        avatar: '10.jpg',
        date: '2022/01/21',
        prix: '200 $',
        quantite: '230 kg'
      },
      { 
        id: 11,
        ingredient: 'Baking Powder',
        avatar: '11.jpg',
        date: '2022/01/01',
        prix: '420 $',
        quantite: '150 L'
      },
      {
        id: 12,
        ingredient: 'Cocoa Powder',
        avatar: '12.jpg',
        date: '2022/02/07',
        prix: '100 $',
        quantite: '400 L',
        _selected: true,
      },
      {
        id: 13,
        ingredient: 'Honey',
        avatar: '13.jpg',
        date: '2022/02/07',
        prix: '400 $',
        quantite: '600 L'
      },
      {
        id: 14,
        ingredient: 'Cheese',
        avatar: '14.jpg',
        date: '2022/03/19',
        prix: '600$',
        quantite: '300 kg',
      },
      {
        id: 15,
        ingredient: 'Olives',
        avatar: '15.jpg',
        date: '2022/01/21',
        prix: '600$',
        quantite: '200 Kg'
      },
    ];
    const getBadge = (quantite) => {
      switch (quantite) {
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
      <Box
      
      bgcolor="#f0f0f0"
      p={2}
    > <div>
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
          quantite: (item) => (
            <td>
              <CBadge color={getBadge(item.quantite)}>{item.quantite}</CBadge>
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
                  <h4>{item.username}</h4>
                  <p className="text-muted">Date: {item.date}</p> {/* Changed from 'ingredient' */}
                  <CButton size="sm" color="primary" >
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
      />
       </div></Box>
    );
}

export default GestionStock;
