import { useState } from "react";
import Sidebar from "../../components/CoachDashboard/CoachSidebar";
import StatsCards from "../../components/Dashboard/Overview/StatsCards";
import WelcomeCard from "../../ui/cards/WelcomeCard";
import UpcomingSessions from "../../components/CoachDashboard/Overview/UpcomingSessions";
import QuickActions from "../../components/CoachDashboard/Overview/QuickActions";
import PerformanceCard from "../../components/CoachDashboard/Overview/PerformanceCard";
import RecentActivityCard from "../../components/CoachDashboard/Overview/RecentActivityCard";

export default function CoachOverview() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const coachStats = [
    {
      icon: "fa-solid fa-calendar-days",
      title: "Total Sessions",
      value: 124,
      change: "+12%",
      color: "#6c63ff",
    },
    {
      icon: "fa-solid fa-users",
      title: "Active Clients",
      value: 18,
      change: "+3",
      color: "#28a745",
    },
    {
      icon: "fa-solid fa-dollar-sign",
      title: "Monthly Earnings",
      value: "$4,250",
      change: "+15%",
      color: "#ffc107",
    },
    {
      icon: "fa-solid fa-star",
      title: "Avg Rating",
      value: "4.9",
      change: "+0.1",
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
          name="Mariam"
          message="Here's your coaching overview for this month."
        />

        <StatsCards stats={coachStats} />

        {/* === New Row with Two Cards === */}
        <div className="row">
          <UpcomingSessions />
          <QuickActions />
        </div>
        <div className="row mt-4">
  <PerformanceCard />
  <RecentActivityCard />
</div>

      </div>
    </div>
  );
}
