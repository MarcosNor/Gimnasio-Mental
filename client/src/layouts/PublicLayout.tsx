import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { Footer } from '../components/ui/footer';
import { NavbarPublic } from '@/components/ui/navbar/NavbarPublic';
import { useAuth } from '../context/AuthContext'


export default function PublicLayout() {

  const { loading, isAuthenticated } = useAuth();
  const location = useLocation();

  if (loading) return <h1>Cargando...</h1>

  // Si el usuario ya está loggeado, lo redireccionará a su home
  if (isAuthenticated && (location.pathname === "/" || location.pathname.startsWith("/auth"))) return <Navigate to='/usuario/home' replace />;

  return (
    <>
      <header>
        <NavbarPublic/>
      </header>
        <Outlet />
      <footer>
        <Footer/>
      </footer>
    </>
  )

}
