import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { AuthProvider } from './context/AuthContext.tsx'

import MainPage from './pages/MainPage.tsx'
import RegisterPage from './pages/RegisterPage.js'
import LoginPage from './pages/LoginPage.tsx'
import UserHomePage from './pages/UserHomePage.tsx'
import PrivateLayout from './layouts/PrivateLayout.tsx'
import PublicLayout from './layouts/PublicLayout.tsx'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout/>}>
            <Route path='/' element={<MainPage/>} />
            <Route path='/auth/login' element={<LoginPage/>} />
            <Route path='/auth/register' element={<RegisterPage/>} />
          </Route>

          <Route element={<PrivateLayout/>}>
            <Route path='/profile' element={<h1>Profile</h1>} />
            <Route path='/user/home' element={<UserHomePage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App