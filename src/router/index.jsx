import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import AuthLayout from "@/layouts/AuthLayout";
import LoginForm from "@/pages/auth/LoginForm";
import ForgotPasswordForm from "@/pages/auth/ForgotPasswordForm";
import OtpVerificationForm from "@/pages/auth/OtpVerificationForm";
import ResetPasswordForm from "@/pages/auth/ResetPasswordForm";
import Dashboard from "@/pages/dashboard/Dashboard";
import AgenciesPage from "@/pages/AgenciesPage/AgenciesPage";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginForm /> },
      { path: "forgot-password", element: <ForgotPasswordForm /> },
      { path: "otp-verification", element: <OtpVerificationForm /> },
      { path: "reset-password", element: <ResetPasswordForm /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
     
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "agencies",
        element: <AgenciesPage/>,
      },
      {
        path: "subscriptions",
        element: <h1>Subscriptions Page</h1>,
      },
      {
        path: "users",
        element: <h1>Users Page</h1>,
      },
      {
        path: "reports",
        element: <h1>Reports Page</h1>,
      },
      {
        path: "leads",
        element: <h1>Leads Page</h1>,
      },
      {
        path: "activity-log",
        element: <h1>Activity Log Page</h1>,
      },
      {
        path: "settings",
        element: <h1>Settings Page</h1>,
      },
    ],
  },
]);
export default router;
