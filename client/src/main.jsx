import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Books from './Components/Books/Books.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import PipeCigar from './Components/PipeCigar/PipeCigar.jsx';
import Tabletop from './Components/Tabletop/Tabletop.jsx';
import Whiskey from './Components/Whiskey/Whiskey.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h2 className='error-header'>There was an error. Please review the logs and try again.</h2>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path:'/tabletop',
        element: <Tabletop />,
      },
      {
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
      }
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={ router } />
)
