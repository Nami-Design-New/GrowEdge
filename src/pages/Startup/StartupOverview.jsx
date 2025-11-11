import { useState } from "react";
import Sidebar from "../../components/StartupDashboard/StartupSidebar";
import WelcomeCard from "../../ui/cards/WelcomeCard";
import StatsCards from "../../components/Dashboard/Overview/StatsCards";

export default function StartupOverview() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const Stats = [
    {
      icon: "fa-regular fa-suitcase",
      title: "Active Internships",
      value: 8,
      change: "+2%",
      color: "#6c63ff",
    },
    {
      icon: "fa-solid fa-users",
      title: "Total Applications",
      value: 165,
      change: "+23",
      color: "#28a745",
    },
    {
      icon: "fa-regular fa-user",
      title: "Current Interns",
      value: "12",
      change: "4 new this month",
      color: "#ffc107",
    },
    {
      icon: "fa-solid fa-eye",
      title: "Profile Views",
      value: "2,341",
      change: "+18 this month",
      color: "#17a2b8",
    },
  ];



  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="main-content p-0 p-md-4">
        <div className="overview-header">
          <h5>Overview</h5>
          <button
            className="sidebar-toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        <WelcomeCard
          name="Sarah"
          message="You have 23 new applications this week and 3 interviews scheduled for today. Keep building your amazing team!"
        />
       <StatsCards stats={Stats} />
        
    </div>
    </div>

    
  );
}
