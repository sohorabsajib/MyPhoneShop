
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Favourite from '../pages/Favourite/Favourite';
import Login from '../pages/Login/Login';

const MyCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/favourites',
                element: <Favourite></Favourite>
            },
            {
                path: '/login',
                element: <Login></Login>
            },

        ]
    },
    
])
    

export default MyCreateRoute;