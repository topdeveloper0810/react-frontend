import { lazy } from 'react';

// project import
import Loadable from '../Components/Loadable';
import AuthLayout from '../layout/AuthLayout';
import AuthLogin from './../sections/auth/auth-forms/AuthLogin';
import AuthRegister from '../sections/auth/auth-forms/AuthRegister.jsx';
import AuthForgotPassword from '../sections/auth/auth-forms/AuthForgotPassword.jsx';

// render - page
const RegisterPage = Loadable(lazy(() => import('../pages/LoginPages/RegisterPage.jsx')))

const LoginRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "registerpage",
          element: <RegisterPage />,
        },
        {
          path: "login",
          element: <AuthLogin />,
        },
        {
          path: "register",
          element: <AuthRegister />,
        },
        {
          path: "forgot-password",
          element: <AuthForgotPassword />,
        },
        // {
        //   path: "check-mail",
        //   element: <AuthCheckMail />,
        // },
        // {
        //   path: "reset-password",
        //   element: <AuthResetPassword />,
        // },
        // {
        //   path: "code-verification",
        //   element: <AuthCodeVerification />,
        // }
      ],
    },
  ],
};

export default LoginRoutes;