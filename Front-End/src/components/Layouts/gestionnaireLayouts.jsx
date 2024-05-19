import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebare from '../AuthUser/Gestionnaire/sidebarre';

const GestionnaireLayouts = () => {
    return (
        <div>
      <div>
        <Sidebare/>
      </div>
      <div>
        <Outlet />
      </div>
 
    </div>
    );
}

export default GestionnaireLayouts;
