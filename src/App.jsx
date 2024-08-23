import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';

const Layout = ()=>{
  return(
    <>
    <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/signup',
        element:<Signup />
      },
      {
        path:'/login',
        element:<Login />
      }
    ]
  }
])

function App() {
  

  return (
    <>
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
