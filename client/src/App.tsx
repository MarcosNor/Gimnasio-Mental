import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage.js'
import LoginPage from './pages/LoginPage.tsx'
import NavBar from './components/NavBar.tsx'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/profile' element={<h1>Profile</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App