import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Books from './Pages/Books/Books.jsx';
// import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import PipeCigar from './Pages/PipeCigar/PipeCigar.jsx';
import Tabletop from './Pages/Tabletop/Tabletop.jsx';
import Whiskey from './Pages/Whiskey/Whiskey.jsx';
import SignUp from './Pages/Login/SignUp.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h2 className='error-header'>There was an error. Please review the logs and try again.</h2>,
    children: [
      {
        index: true,
        element: <Books />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path:'/signup',
        element: <SignUp />,
      },
      {
        path:'/gamers_corner',
        element: <Tabletop />,
      },
      {
        index: true,
        path: '/books',
        element: <Books />,
      },
      {
        path: '/whiskey',
        element: <Whiskey />,
      },
      {
        path: '/tobacco',
        element: <PipeCigar />,
      },
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={ router } />
)
