import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './Components/Home/Home.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h2 className='error-header'>Page does not exist.  Please try another route.</h2>,
    children: [
      {
        index: true,
        element: <Home />,
      },
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={ router } />
)
