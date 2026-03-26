import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Footer } from '../components/ui/footer';
import { NavbarPrivate } from '@/components/ui/navbar/NavbarPrivate';
import Breadcrumb from '@/components/ui/breadcrumb';

export default function PrivateLayout() {

  const { loading, isAuthenticated } = useAuth();

  if (loading) return <h1>Cargando...</h1>

  // Si no está registrado, regresa al usuario al login
  if (!loading && !isAuthenticated && location.pathname !== "/auth/login" && location.pathname !== "/auth/register") return <Navigate to='/auth/login' replace />;

  return (
    <>
      <header>
        <NavbarPrivate/>
        <div className="flex justify-center w-full py-4">
        <Breadcrumb />
        </div>
      </header>
        <Outlet />
      <footer>
        <Footer/>
      </footer>
    </>
  )

}
