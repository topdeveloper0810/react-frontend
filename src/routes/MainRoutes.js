import { lazy } from 'react';

// project import
import Loadable from '../Components/Loadable';
import MainLayout from '../layout/MainLayout';

// render - page
const Dashboard = Loadable(lazy(() => import('../pages/Mainpages/Dashboard')));
const Precious = Loadable(lazy(() => import('../pages/Mainpages/Precios')))

const MainRoutes = {
    path: '/',
    children: [
        {
            path: '/',
            element: (
                    <MainLayout/>
            ),
            children: [       
                {
                    path: '/',
                    element: <Dashboard />
                },
                {
                    path: 'precios',
                    element: <Precious/>
                }
              
            ]
        }
    ],
    
}

export default MainRoutes;