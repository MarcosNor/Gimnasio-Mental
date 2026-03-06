import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { AuthProvider } from './context/AuthContext.tsx'
import { Navbar } from "@/components/ui/hero-section.tsx"
import MainPage from './pages/MainPage.tsx'
import RegisterPage from './pages/RegisterPage.js'
import LoginPage from './pages/LoginPage.tsx'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/profile' element={<h1>Profile</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App