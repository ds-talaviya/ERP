import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PrivateRoutes from './PrivateRoutes';

const Login = lazy(() => import('../pages/Login'));
const Layout = lazy(() => import('../components/Layout'));
const Calendar = lazy(() => import('../pages/Calendar'));

const AppRoutes = createBrowserRouter([
    {
        path: '/login',
        element: (
            <Suspense fallback={<>Loading...</>}>
                <Login />
            </Suspense>
        )
    },
    {
        path: '/',
        element: (
            <Suspense fallback={<>Loading...</>}>
                <Layout />
            </Suspense>
        ),
        children: [
            {
                path: '/',
                element: (
                    <PrivateRoutes>
                        <Calendar />
                    </PrivateRoutes>
                )
            }
        ]
    }
])

export default AppRoutes