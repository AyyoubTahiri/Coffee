import { CButton, CSmartTable } from '@coreui/react-pro';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StorageIcon from '@mui/icons-material/Storage';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredient } from '../../Redux/authActions';

const GestIngredient = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ingredients, loading } = useSelector((state) => state.auth);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    dispatch(getIngredient());
  }, [dispatch]);
  
  const columns = [
    {
      key: 'name',
      _style: { width: '50%' },
      label: 'Name'
    },
    {
      key: 'prix',
      _style: { width: '50%' },
      label: 'Price'
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
          
        </div>

        <CSmartTable
          activePage={1}
          cleaner
          clickableRows
          columns={columns}
          columnFilter
          columnSorter
          footer
          items={ingredients}
          itemsPerPageSelect
          itemsPerPage={5}
          pagination
          onFilteredItemsChange={(items) => {
            console.log(items);
          }}
          onSelectedItemsChange={(items) => {
            console.log(items);
          }}
          selectable
          sorterValue={{ column: 'name', state: 'asc' }}
          tableFilter
          tableProps={{
            style: { borderCollapse: 'collapse', borderRadius: '5px' },
            responsive: true,
            striped: true,
            hover: true,
          }}
        />
      </div>
    </Box>
  );
};

export default GestIngredient;
