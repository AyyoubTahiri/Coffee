import React from 'react'
import SidebarPersonnel from '../AuthUser/Personnal/SidebarPersonnel'
import { Outlet } from 'react-router-dom'

export default function PersonnelLayouts() {
  return (
    <div>
    <div style={{ display: 'flex', height: '100vh' }}>
    <SidebarPersonnel />
    <div style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
      <Outlet />
    </div>
  </div>
    </div>
  )
}
