import { createBrowserRouter } from "react-router";
// import ProtectionProvider from "./ProtectionProvider";
import RootLayout from "../layout/RootLayout";
import Error from "../routes/Error";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Register from "../routes/Register";
import ResetPassword from "../routes/ResetPassword";
import Faqs from "../routes/Faqs";
import CareerCoaching from "../routes/CareerCoaching";
import StartupInternships from "../routes/StartupInternships";
import MvpLabs from "../routes/MvpLabs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
       {
        path: "signin",
        element: <Login />,
      },
        {
        path: "signup",
        element: <Register />,
      },
        {
        path: "signup",
        element: <Register />,
      },
          {
        path: "reset-password",
        element: <ResetPassword />,
      },
          {
        path: "faqs",
        element: <Faqs />,
      },
          {
        path: "career-coaching",
        element: <CareerCoaching />,
      },
          {
        path: "startup-internships",
        element: <StartupInternships />,
      },
          {
        path: "mvp-labs",
        element: <MvpLabs />,
      },
    ],
  },
]);
