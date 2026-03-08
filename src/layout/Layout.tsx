import { Outlet } from 'react-router'
import { NavBar } from '../components/NavBar/NavBar'

export const Layout = () => {
  return (
    <div className='app-layout'>
        <NavBar />
        <main className='app-content'>
          <Outlet />
        </main>
    </div>
  )
}