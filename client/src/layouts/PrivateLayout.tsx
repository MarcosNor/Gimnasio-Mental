import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Footer } from '../components/ui/footer';
import { NavbarPrivate } from '@/components/ui/NavbarPrivate';

export default function PrivateLayout() {

  const { loading, isAuthenticated } = useAuth();

  if (loading) return <h1>Cargando...</h1>

  if (!loading && !isAuthenticated && location.pathname !== "/auth/login" && location.pathname !== "/auth/register") return <Navigate to='/auth/login' replace />;

  return (
    <>
      <header>
        <NavbarPrivate/>
      </header>
        <Outlet />
      <footer>
        <Footer/>
      </footer>
    </>
  )

}
