import { Outlet } from "react-router";
// import Header from "./Header";

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      {/* <Header/> */}
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}
