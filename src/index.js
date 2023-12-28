import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "./App";
import './index.scss';
import MainPage from "./routes/MainPage";
import Impulse from "./routes/Impulse";
import Leagues from "./routes/Leagues";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "/impulse",
                element: <Impulse />,
            },
            {
                path: "/leagues",
                element: <Leagues />,
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);