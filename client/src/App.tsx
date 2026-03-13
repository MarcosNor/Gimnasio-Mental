import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { AuthProvider } from './context/AuthContext.tsx'
import { Navbar } from "@/components/ui/components/Navbar.tsx"

import MainPage from './pages/MainPage.tsx'
import RegisterPage from './pages/RegisterPage.js'
import LoginPage from './pages/LoginPage.tsx'
import HomePage from './pages/HomePage.tsx'
import ProtectedRoute from './ProtectedRoute.tsx'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />

          <Route element={<ProtectedRoute/>}>
            <Route path='/profile' element={<h1>Profile</h1>} />
            <Route path='/home' element={<HomePage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App