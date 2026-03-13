import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

export default function ProtectedRoute() {

  const { loading, isAuthenticated } = useAuth();

  if (loading) return <h1>Cargando...</h1>

  if (!loading && !isAuthenticated && location.pathname !== "/login" && location.pathname !== "/register") return <Navigate to='/login' replace />;

  return <Outlet />;
}
