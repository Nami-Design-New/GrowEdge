import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./DashFooter";

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Header/>
      <div className="main-content">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
