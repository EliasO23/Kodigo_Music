import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ArtistPage from './Pages/ArtistPage/ArtistPage';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/artist',
      element: <ArtistPage />
    },
    {
      path: '/login',
      element: <LoginPage />
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
