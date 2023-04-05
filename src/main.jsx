import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import FriendDetails from './Components/FriendDetails/FriendDetails';

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <App></App>
//   },
//   {
//     path:"/about",
//     element: <About></About>
//   },
//   {
//     path:"/contact",
//     element: <Contact></Contact>
//   }
// ])

const router =createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path:"about",
        element: <About></About>
      },
      {
        path:'contact',
        element: <Contact></Contact>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: "friend/:friendId",
        element: <FriendDetails></FriendDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path:'*',
        element: <div>not found</div>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
