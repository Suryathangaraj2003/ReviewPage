import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Page1 from './components/Page2'; 
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "page2",
    element: <Page1 />,
  },
  {
    path: "page3",
    element: <Page3 />,
  },
  {
    path: "page4",
    element: <Page4 />,
  },
  {
    path: "page5",
    element: <Page5 />,
  },
  {
    path: "page6",
    element: <Page6 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
