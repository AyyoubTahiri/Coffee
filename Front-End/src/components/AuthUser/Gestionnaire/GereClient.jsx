import { CAvatar, CBadge, CButton, CCardBody, CCollapse, CSmartTable } from '@coreui/react-pro';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../Redux/authActions';

const GereClient = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.auth);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const columns = [
    {
      key: 'name',
      label: 'Name',
      _style: { width: '20%' },
    },
    {
      key: 'email',
      label: 'Email',
      _style: { width: '25%' },
    },
    {
      key: 'orders',
      label: 'Number of Orders',
      _style: { width: '20%' },
    },
    {
      key: 'totalPrice',
      label: 'Total Price of Orders',
      _style: { width: '25%' },
    },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
    },
  ];

  const getBadge = (status) => {
    switch (status) {
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

  const filteredUsers = Array.isArray(users) ? users.filter(user => user.idRole === 3) : [];

  return (
    <Box bgcolor="#f0f0f0" p={2}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
        <div style={{ backgroundColor: '#795548', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>
          <PeopleIcon style={{ fill: 'white', marginRight: '5px' }} />
          Clients
        </div>
        <CButton
          color="primary"
          variant="outlined"
          style={{ borderColor: '#795548', color: '#795548', transition: 'color 0.3s, background-color 0.3s' }}
          className="hover-effect"
          onClick={() => navigate('/gest/ajouterclient')}
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
        items={filteredUsers}
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
          name: (item) => <td>{item.nom} {item.prenom}</td>,
          email: (item) => <td>{item.email}</td>,
          orders: (item) => <td>{item.numberOfOrders}</td>,
          totalPrice: (item) => <td>{item.totalOrders}</td>,
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
                  <h4>{item.nom} {item.prenom}</h4>
                  <p className="text-muted">Email: {item.email}</p>
                  <p className="text-muted">Number of Orders: {item.numberOfOrders}</p>
                  <p className="text-muted">Total Price of Orders: {item.totalOrders}</p>
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
        sorterValue={{ column: 'totalPrice', state: 'asc' }}
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

export default GereClient;
