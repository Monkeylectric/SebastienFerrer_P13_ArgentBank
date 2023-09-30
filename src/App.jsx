import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import User from './pages/User/User';
import Transactions from './pages/Transactions/Transactions';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            // loader:
            // errorElement:
        },
        {
            path: "/signin",
            element: <SignIn />
            //loader:
            //errorElement:
        },
        {
            path: "/user",
            element: <User />
            //loader:
            //errorElement:
        },
        {
            path: "/transactions",
            element: <Transactions />
            //loader:
            //errorElement:
        },
    ]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App
