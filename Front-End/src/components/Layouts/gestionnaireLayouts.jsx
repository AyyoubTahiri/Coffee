import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../AuthUser/Gestionnaire/sidebarre';

const GestionnaireLayouts = () => {
    return (
      <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
        <Outlet />
      </div>
    </div>
    );
}

export default GestionnaireLayouts;
