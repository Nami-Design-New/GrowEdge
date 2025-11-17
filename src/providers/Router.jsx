import { createBrowserRouter } from "react-router";
// import ProtectionProvider from "./ProtectionProvider";
import RootLayout from "../layout/RootLayout";
import DashboardLayout from "../ui/layout/DashboardLayout";
import Error from "../routes/Error";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Register from "../routes/Register";
import ResetPassword from "../routes/ResetPassword";
import Faqs from "../routes/Faqs";
import CareerCoaching from "../routes/CareerCoaching";
import StartupInternships from "../routes/StartupInternships";
import MvpLabs from "../routes/MvpLabs";
import ParticipantOverview from "../pages/participant/ParticipantOverview";
import Coaching from "../pages/participant/Coaching";
import SessionDetails from "../pages/participant/SessionDetails";
import Internships from "../pages/participant/Interships";
import MVP from "../pages/participant/MvpLabs";
import EditProfile from "../pages/participant/EditProfile";
import Messages from "../pages/participant/Messages";
import Notifications from "../pages/participant/Notifications";
import Setting from "../pages/participant/Setting";
import CoachOverview from "../pages/Coach/CoachOverview";
import Sessions from "../pages/Coach/Sessions";
import Clients from "../components/CoachDashboard/Clients/AllClients";
import ClientDetails from "../pages/Coach/ClientDetails";
import Analytics from "../pages/Coach/Analytics";
import EditCoachProfile from "../pages/Coach/EditCoachProfile";
import CoachMessages from "../pages/Coach/CoachMessages";
import CoachNotifications from "../pages/Coach/CoachNotifications";
import CoachSettings from "../pages/Coach/CoachSetting";
import Blogs from "../routes/Blogs";
import StartupOverview from "../pages/Startup/StartupOverview";
import InternshipsStartup from "../pages/Startup/InternshipsStartup";
import EditStartupProfile from "../pages/Startup/EditProfile";
import InternshipDetails from "../components/StartupDashboard/Internships/InternshipDetails";
import StartupMessages from "../pages/Startup/StartupMessages";
import StartupNotifications from "../pages/Startup/StartupNotifications";
import StartupSettings from "../pages/Startup/StartupSetting";
import CreateInternship from "../pages/Startup/CreateInternship";
import StartupCandidates from "../pages/Startup/StartupCandidates";
import StartupAnalytics from "../pages/Startup/StartupAnalytics";
import BlogDetails from "../routes/BlogDetails";

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
        path: "blog",
        element: <Blogs />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
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
      { path: "/session-details", element: <SessionDetails /> }

    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <ParticipantOverview /> },
      { path: "coaching", element: <Coaching /> },
      { path: "internships", element: <Internships /> },
      { path: "mvp-labs", element: <MVP /> },
      { path: "profile", element: <EditProfile /> },
      { path: "messages", element: <Messages /> },
      { path: "notifications", element: <Notifications /> },
      { path: "settings", element: <Setting /> },

    ],
  },
  {
    path: "/coach-dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <CoachOverview /> },
      { path: "sessions", element: <Sessions /> },
      { path: "clients", element: <Clients /> },
      { path: "clients/:clientId", element: <ClientDetails /> },
      { path: "analytics", element: <Analytics /> },
      { path: "edit-profile", element: <EditCoachProfile /> },
      { path: "messages", element: <CoachMessages /> },
      { path: "notifications", element: <CoachNotifications /> },
      { path: "settings", element: <CoachSettings /> },
    ],
  },
  {
    path: "/startup-dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <StartupOverview /> },
      { path: "Internships", element: <InternshipsStartup /> },
      { path: "Internships/:id", element: <InternshipDetails /> },
      { path: "Candidates", element: <StartupCandidates /> },
      { path: "edit-profile", element: <EditStartupProfile /> },
      { path: "analytics", element: <StartupAnalytics /> },
      { path: "messages", element: <StartupMessages /> },
      { path: "notifications", element: <StartupNotifications /> },
      { path: "settings", element: <StartupSettings /> },
      { path: "create", element: <CreateInternship /> },

    ],
  }


]);
