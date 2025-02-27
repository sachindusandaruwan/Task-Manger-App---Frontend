
import './App.css'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";

import {Dashboard} from "./page/Dashboard.tsx";
import {SignupForm} from "./page/register/SignupForm.tsx";
import {LoginForm} from "./page/register/LoginForm.tsx";
import {RootState} from "./store/Store.ts";
import {useSelector} from "react-redux";


function App() {
    const isAuthenticated = useSelector((state: RootState) => state.userReducer.isAuthenticated)

  const routes = createBrowserRouter([
      {
          path: '/',
          element: <LoginForm/>
      },
      {
          path: 'signup',
            element: <SignupForm/>
      },
      {
          path: '/dashboard',
          element: isAuthenticated ? <Dashboard/> : <Navigate to={'/'}/>
      }
  ])

  return (
    <>
        <RouterProvider router={routes}>
        </RouterProvider>
    </>
  )
}

export default App
