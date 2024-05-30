import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../AuthUser/Client/navigationbar'

export default function ClientLayouts() {
  return (
    <div>
    <NavigationBar/>
    <Outlet/>
    </div>
  )
}
