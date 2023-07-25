import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { createHashRouter, Route, RouterProvider } from 'react-router-dom';
import MarkdownWriter from './routes/MarkdownWriter';
import Help from './routes/Help';
import About from './routes/About';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/writer',
        element: <MarkdownWriter />
      },
      {
        path: "/help",
        element: <Help />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
