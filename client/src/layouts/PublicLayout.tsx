import { Outlet } from 'react-router-dom'
import { Footer } from '../components/ui/footer';
import { NavbarPublic } from '@/components/ui/NavbarPublic';

export default function PublicLayout() {

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
