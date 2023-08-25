import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Board from './pages/Board';
import LetterManage from './pages/LetterManage';
import Mypage from './pages/Mypage';
import UserInfo from './pages/UserInfo';
import UserSurvey from './pages/UserSurvey';
import Writing from "./pages/Board/index";
import Main from "./pages/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Landing/>},
      {path: '/login', element: <Login/>},
      {path: '/signup', element: <Signup/>},
      {path: '/userinfo', element: <UserInfo/>},
      {path: '/usersurvey', element: <UserSurvey/>},
      {path: '/board', element: <Board/>},
      {path: '/lettermanage', element: <LetterManage/>},
      {path: '/mypage', element: <Mypage/>},
    ]
  }
])
      { path: "/main", element: <Main /> },
      { path: "/board", element: <Writing /> },

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
