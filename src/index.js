import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import MarkdownWriter from './routes/MarkdownWriter';
import Help from './routes/Help';
import About from './routes/About';
import store from './store/store';
import { Provider } from 'react-redux';
import Shortcuts from './routes/Shortcuts';

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
        path: "/shortcuts",
        element: <Shortcuts />
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
