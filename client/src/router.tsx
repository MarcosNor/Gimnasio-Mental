import { createBrowserRouter } from 'react-router-dom'

import MainPage from './pages/MainPage.tsx'
import RegisterPage from './pages/RegisterPage.js'
import LoginPage from './pages/LoginPage.tsx'
import UserHomePage from './pages/UserHomePage.tsx'

import PrivateLayout from './layouts/PrivateLayout.tsx'
import PublicLayout from './layouts/PublicLayout.tsx'
import CategoriesPage from './pages/CategoriesPage.tsx'

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
        handle: { Breadcrumb: "Login" },
      },
      {
        path: "auth",
        children:[
          {
            path: "login",
            element: <LoginPage />,
            handle: { breadcrumb: "Iniciar sesión" },
          },
          {
            path: "register",
            element: <RegisterPage />,
            handle: { breadcrumb: "Registrarse" },
          },
        ],
      },
    ],
  },
  {
    element: <PrivateLayout/>,
    children: [
      {
        path: 'usuario',
        handle: { breadcrumb: 'Usuario' },
        children: [
          {
            path: 'home',
            handle: { breadcrumb: 'Inicio' },
            children: [
              {
                index: true,
                element: <UserHomePage />,
                handle: { breadcrumb: 'Dashboard' },
              },
              {
                path: 'perfil',
                children: [
                  {
                    index: true,
                    element: <h1>Profile</h1>,
                    handle: { breadcrumb: 'Perfil' },
                  },
                  {
                    path: 'Ajustes',
                        element: <h1>Ajustes</h1>,
                        handle: { breadcrumb: 'Ajustes' },
                  },
                ], 
              },
              {
                path: 'categorias',
                index: true,
                element: <CategoriesPage/>,
                handle: { breadcrumb: 'Categorias' },
              }
            ]
          },
        ],
      },
    ]
  }
])