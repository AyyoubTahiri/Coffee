import React, { useEffect, useRef } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CButton } from '@coreui/react-pro';
import { useNavigate } from 'react-router-dom';
import CIcon from '@coreui/icons-react';
import { cilSpeedometer } from '@coreui/icons';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';

const Analytics = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const barChartRef = useRef(null);
  const pieChartRef1 = useRef(null);
  const pieChartRef2 = useRef(null);

  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const pieChartData1 = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [300, 50, 100],
        backgroundColor: ['red', 'blue', 'yellow'],
      },
    ],
  };

  const pieChartOptions1 = {
    plugins: {
      title: {
        display: true,
        text: 'Chart 1',
      },
    },
  };

  const pieChartData2 = {
    labels: ['Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Dataset 2',
        data: [200, 100, 50],
        backgroundColor: ['green', 'purple', 'orange'],
      },
    ],
  };

  const pieChartOptions2 = {
    plugins: {
      title: {
        display: true,
        text: 'Chart 2',
      },
    },
  };

  useEffect(() => {
    const barChart = barChartRef.current;
    const pieChart1 = pieChartRef1.current;
    const pieChart2 = pieChartRef2.current;

    return () => {
      if (barChart) {
        barChart.destroy();
      }
      if (pieChart1) {
        pieChart1.destroy();
      }
      if (pieChart2) {
        pieChart2.destroy();
      }
    };
  }, []);

  return (
    <>
    <Box
      
      bgcolor="#f0f0f0"
      p={2}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
        <div style={{ backgroundColor: '#795548', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>
          <CIcon icon={cilSpeedometer} className="me-2" />
          Sales Analytics
        </div>
        <CButton
          color="primary"
          variant="outlined"
          style={{ borderColor: '#795548', color: '#795548', transition: 'color 0.3s, background-color 0.3s' }}
          className="hover-effect"
          onClick={() => navigate('/gest/ajouter')}
          startIcon={<AddIcon />}
        >
          Ajouter
        </CButton>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ width: '300px', height: '300px' }}>
          <Pie data={pieChartData1} options={pieChartOptions1} ref={pieChartRef1} />
        </div>
        <div style={{ width: '300px', height: '300px' }}>
          <Pie data={pieChartData2} options={pieChartOptions2} ref={pieChartRef2} />
        </div>
      </div>
      <Bar data={barChartData} options={barChartOptions} ref={barChartRef} /></Box>
    </>
  );
};

export default Analytics;
