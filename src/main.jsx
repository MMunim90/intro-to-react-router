import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import Users from './components/Users/Users.jsx';
import Users2 from './components/Users2/Users2.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Comments from './components/Comments/Comments.jsx';
import commentDetail from './components/CommentDetail/commentDetail.jsx';

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'mobiles', Component: Mobiles},
      {path: 'laptops', Component: Laptops},
      {
      path: 'users',
      loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
      Component: Users
    },
    {
      path: 'users2',
      element: <Suspense fallback={<span>Loading.....</span>}>
        <Users2 usersPromise={usersPromise}></Users2>
      </Suspense>
    },
    {
      path: 'users/:userId',
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      Component: UserDetails,
    },
    {
      path: 'comments',
      loader: () => fetch('https://jsonplaceholder.typicode.com/comments'),
      Component: Comments,
    },
    {
      path: 'comments/:commentId',
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`),
      Component: commentDetail
    }
    ]
  },
  {
    path: 'about',
    element: <div>About me here</div>
  },
  {
    path: 'blogs',
    element: <div>All my blogs are here</div>,
  },
  {
    path: 'app',
    Component: App
  },
  {
    path: 'app2',
    element: <App></App>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
