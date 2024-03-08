import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './Contact'
import ErrorPage from './ErrorPage'
import Root from './Root'
import './index.css'
import { getContactsloader } from './loaders/ContactsLoader'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsloader,
    children: [
      {
        path: '/contacts/:contactId',
        element: <Contact />,
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
